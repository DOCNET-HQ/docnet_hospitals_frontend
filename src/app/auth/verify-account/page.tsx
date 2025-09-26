import type { Metadata } from 'next'
import VerifyAccount from '@/components/auth/VerifyAccount'

export const metadata: Metadata = {
    title: 'Verify | Hospital Dashboard',
    description: 'Verify to your account',
}


export default function VerifyPage() {

    return <VerifyAccount />
}
