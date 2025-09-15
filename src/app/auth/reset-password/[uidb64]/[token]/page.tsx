import { PasswordResetForm } from '@/components/auth/PasswordReset'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Reset Password | Hospital Dashboard',
    description: 'Reset your password',
}

export default function ForgotPasswordPage() {
    return <PasswordResetForm />
}
