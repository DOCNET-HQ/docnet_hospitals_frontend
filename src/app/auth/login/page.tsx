import { LoginForm } from '@/components/auth/LoginForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login | Hospital Dashboard',
    description: 'Login to your account',
}

export default function LoginPage() {
    return <LoginForm />
}
