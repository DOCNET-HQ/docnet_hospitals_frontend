import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: 'Verify | Hospital Dashboard',
    description: 'Verify to your account',
}

export default function VerifyPage() {
    return (
            <div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold text-foreground">Account Verification</h1>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/auth/register"
                        className="text-xs underline underline-offset-4 text-blue-600 transition-colors"
                    >
                        Register
                    </Link>
                </div>

                <div className="text-center text-sm text-muted-foreground mt-8">
                   <p>
                        We have sent a verification link to your email. Please check your inbox and click on the link to verify your account.
                   </p>
                </div>

                <div className="grid gap-6 mt-8">
                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white transition-colors bg-blue-600 cursor-pointer"
                    >
                        Login <ArrowRight />
                    </Button>
                </div>
            </div>
        )
}
