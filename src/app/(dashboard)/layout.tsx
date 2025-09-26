"use client";

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Header } from "@/components/dashboard/header"
import { Loader } from '@/components/dashboard/loader'
import ProtectedPage from '@/components/auth/ProtectedPage'
import { useGetBasicProfileQuery } from '@/lib/api/apiSlice'
import ErrorDisplay from "@/components/utils/error-display";
import { DashboardSidebar } from "@/components/dashboard/sidebar"


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: profileData, isLoading, isError, refetch } = useGetBasicProfileQuery();

    const refetchProfile = () => {
        refetch();
    };

    if (isLoading) return <Loader />;

    if (isError) {
    return (
        <ErrorDisplay
            title="Failed to Load Profile"
            onRetry={refetchProfile}
            type="server"
        />
    );
    }

    return (
        <ProtectedPage>
            <SidebarProvider>
                <DashboardSidebar profileData={profileData} />
                <SidebarInset>
                    <div className="sticky top-0 z-50 bg-background border-b mb-6">
                        <Header profileData={profileData} />
                    </div>

                    {children}
                </SidebarInset>
            </SidebarProvider>
        </ProtectedPage>
    )
}
