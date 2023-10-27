'use client'

import Link from "next/link"
import { z } from "zod"
import { useForm } from "react-hook-form"

import TextInput from "@/components/TextInput"
import { zodResolver } from "@hookform/resolvers/zod"

const loginSchema = z.object({
    email: z.string().email('Insira um email válido'),
    password: z.string().min(1, 'A senha é obrigatória')
})

type ValidationSchema = z.infer<typeof loginSchema>;

function LoginPage() {
    const { handleSubmit, register, formState: { errors } } = useForm<ValidationSchema>({
        resolver: zodResolver(loginSchema)
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
                            <h1 className="mb-8 text-xl font-bold">Cardappio - Login</h1>

                            <div className="mb-10">
                                <TextInput label="Email" error={errors.email?.message} {...register('email')} />
                                <TextInput label="Password" type="password" error={errors.password?.message} {...register('password')} />
                            </div>

                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Continuar
                            </button>

                            <p className="mt-6" >Não tem uma conta? <Link className="link link-primary" href="/register" >Cadastre-se</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage