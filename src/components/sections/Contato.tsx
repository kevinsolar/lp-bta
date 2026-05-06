"use client"

import { Input } from "../input"
import { Checkbox } from "../checkbox"
import { Button } from "../ui/button"

import { useForm, useWatch } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { sendContactEmail } from "@/app/actions/send-email"

const formSchema = z.object({
	name: z.string().min(2, "Nome muito curto"),
	email: z.string().email("Email inválido"),
	phone: z.string().optional(),
	ciente: z.boolean().refine((val) => val === true, "Você precisa confirmar para continuar"),
})

type LeadFormData = z.infer<typeof formSchema>

export default function ContactForm() {
	const form = useForm<LeadFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			ciente: false,
		},
	})

	const cienteValue = useWatch({ control: form.control, name: "ciente" })

	const onSubmit = async (data: LeadFormData) => {
		const formData = new FormData()
		formData.append("nome", data.name)
		formData.append("email", data.email)
		formData.append("telefone", data.phone || "")
		formData.append("ciente", data.ciente ? "Sim, estou ciente e posso comprovar" : "Não")

		const result = await sendContactEmail(formData)

		if (result.error) {
			console.error("Erro:", result.error)
			return
		}

		form.reset()
	}

	return (
		<section id="contato" className="w-full space-y-10 py-10 text-center">
			<h3 className="text-xl lg:text-5xl">
				<span className="text-highlight">Fale conosco</span> e saiba mais
			</h3>

			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4 w-full lg:max-w-[67.5%] mx-auto"
			>
				<Input {...form.register("name")} placeholder="Nome" />
				<Input {...form.register("email")} placeholder="Email" type="email" />
				<Input {...form.register("phone")} placeholder="Telefone" type="tel" />
				<div className="space-y-3">
					<span className="block text-base text-foreground/80 text-left">
						Você está ciente de que é necessário comprovar, no mínimo, CAN$22,895 para obter o visto de estudo no Canadá?
					</span>
					<div className="flex items-center gap-6">
						<label className="flex items-center gap-2 cursor-pointer">
							<Checkbox
								{...form.register("ciente")}
								value="sim"
								checked={cienteValue === true}
								onChange={() => form.setValue("ciente", true, { shouldValidate: true })}
								id="ciente-sim"
							/>
							<span>Sim</span>
						</label>
						<label className="flex items-center gap-2 cursor-pointer">
							<Checkbox
								{...form.register("ciente")}
								value="nao"
								checked={cienteValue === false}
								onChange={() => form.setValue("ciente", false, { shouldValidate: true })}
								id="ciente-nao"
							/>
							<span>Não</span>
						</label>
					</div>
					{form.formState.errors.ciente && (
						<span className="text-sm text-red-500">{form.formState.errors.ciente.message}</span>
					)}
				</div>

				<div className="flex justify-center">
					<Button variant="secondary" type="submit">
						Enviar
					</Button>
				</div>
			</form>
		</section>
	)
}
