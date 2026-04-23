"use server"

import { resend } from "@/lib/email"
import { z } from "zod"

const contactSchema = z.object({
	name: z.string().min(2, "Nome muito curto"),
	email: z.string().email("Email inválido"),
	phone: z.string().optional(),
  ciente: z.string().min(1, "Selecione uma opcao")
})

export async function sendContactEmail(formData: FormData) {
	const rawData = {
		name: formData.get("nome"),
		email: formData.get("email"),
		phone: formData.get("telefone"),
		ciente: formData.get("ciente"),
	}

	const parsed = contactSchema.safeParse(rawData)
	if (!parsed.success) {
		return { error: parsed.error.message }
	}

	const { name, email, phone, ciente } = parsed.data

	try {
		await resend.emails.send({
			from: process.env.RESEND_FROM_EMAIL!,
			to: process.env.RESEND_TARGET_EMAIL!,
			replyTo: email,
			subject: `Novo Lead: ${name}`,
			html: `
        <h2>Novo Lead</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ""}
        <p><strong>Está ciente de que é necessário comprovar, no mínimo, CAN$22,895 para obter o visto de estudo no Canadá?:</strong></p>
        <p>${ciente}</p>
      `,
		})

		return { success: true }
	} catch (error) {
		console.error("Erro ao enviar email:", error)
		return { error: "Falha ao enviar mensagem. Tente novamente." }
	}
}
