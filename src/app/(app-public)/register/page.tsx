'use client'

import Link from "next/link"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import TextInput from "@/components/TextInput"

const registerSchema = z.object({
    email: z.string().email('Insira um email válido'),
    password: z.string().min(1, 'A senha é obrigatória'),
    confirmPassword: z.string().min(1, 'A confirmação da senha é obrigatória')
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
});

type ValidationSchema = z.infer<typeof registerSchema>;

function RegisterPage() {
    const { handleSubmit, register, formState: { errors } } = useForm<ValidationSchema>({
        resolver: zodResolver(registerSchema)
    })

    async function onSubmit(formData: any) {
        console.log(formData)
    }

    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <div className="container max-w-md py-8">
                    <div className="card bg-base-200">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="mb-8 text-xl font-bold">Cardappio - Register</h1>

                            <div className="mb-10">
                                <TextInput label="Email" error={errors.email?.message} {...register('email')} />
                                <TextInput label="Password" type="password" error={errors.password?.message} {...register('password')} />
                                <TextInput label="Confirm password" type="password" error={errors.confirmPassword?.message} {...register('confirmPassword')} />
                            </div>

                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Continuar
                            </button>

                            <p className="mt-6" >Já tem uma conta? <Link className="link link-primary" href="/login" >Faça login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage