import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Header } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import ProtectedPage from '@/components/auth/ProtectedPage'


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ProtectedPage>
            <SidebarProvider>
                <DashboardSidebar />
                <SidebarInset>
                    <div className="sticky top-0 z-50 bg-background border-b mb-6">
                        <Header />
                    </div>

                    {children}
                </SidebarInset>
            </SidebarProvider>
        </ProtectedPage>
    )
}
