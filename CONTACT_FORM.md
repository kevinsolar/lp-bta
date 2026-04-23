# Formulário de Contato com Resend

## TODO: Implementar formulário de envio de leads

Implementar um formulário de contato que envia emails automaticamente para o admin do site quando um lead é submetido.

---

## Stack Escolhida

- **Resend** - Envio de emails transacionais
- **React Hook Form** - Gerenciamento de formulário
- **Zod** - Validação de schema
- **Server Actions** - Processamento no servidor

---

## Implementação

### 1. Instalar dependências

```bash
npm install resend react-hook-form @hookform/resolvers zod
```

### 2. Configurar variáveis de ambiente

```env
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@seudominio.com
RESEND_TARGET_EMAIL=admin@seudominio.com
```

### 3. Criar lib/email.ts

```ts
import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);
```

### 4. Criar Server Action (app/actions/send-email.ts)

```ts
'use server';

import { resend } from '@/lib/email';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Mensagem muito curta'),
});

export async function sendContactEmail(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  };

  const parsed = contactSchema.safeParse(rawData);
  if (!parsed.success) {
    return { error: parsed.error.errors[0].message };
  }

  const { name, email, phone, message } = parsed.data;

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
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { error: 'Falha ao enviar mensagem. Tente novamente.' };
  }
}
```

### 5. Criar componente do formulário (components/ContactForm.tsx)

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sendContactEmail } from '@/app/actions/send-email';
import { useActionState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Mensagem muito curta'),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone || '');
    formData.append('message', data.message);

    const result = await sendContactEmail(formData);

    if (result?.success) {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} action={formAction}>
      <div>
        <input {...register('name')} placeholder="Nome" />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <input {...register('email')} placeholder="Email" type="email" />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <input {...register('phone')} placeholder="Telefone (opcional)" />
      </div>

      <div>
        <textarea {...register('message')} placeholder="Mensagem" />
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>

      {state?.error && <p className="error">{state.error}</p>}
      {state?.success && <p className="success">Mensagem enviada!</p>}
    </form>
  );
}
```

---

## Configuração no Resend

1. Acesse https://resend.com e crie uma conta
2. Gere uma API Key em **API Keys**
3. Adicione seu domínio em **Domains**
4. Configure os registros DNS no seu domínio:
   - **SPF**: `v=spf1 include:resend.email ~all`
   - **DKIM**: Dois registros CNAME fornecidos pelo Resend
   - **DMARC** (recomendado): `v=DMARC1; p=quarantine; rua=mailto:dmarc@seudominio.com`

---

## Free Tier

- **3.000 emails/mês** gratuitos
- Após isso: $1 para cada 1.000 emails extras
- Domínio verificado necessário para produção

---

## Referências

- [How to Send Emails in Next.js (App Router, 2026)](https://sequenzy.com/blog/send-emails-nextjs)
- [Contact Form with Resend & Valibot](https://jahir.dev/blog/create-contact-form-nextjs)
- [Production-Ready Guide](https://digitizia.com/blog/resend-nextjs-app-router-production-guide)
- [Exemplo oficial com useActionState](https://github.com/resend/resend-nextjs-useactionstate-example)

---

## Status

- [x] Instalar dependências
- [x] Configurar API Key no .env.local
- [x] Criar lib/email.ts
- [x] Criar Server Action
- [x] Criar componente ContactForm
- [x] Configurar e testar o Sandbox
- [x] Testar envio
- [ ] Configurar domínio no Resend
