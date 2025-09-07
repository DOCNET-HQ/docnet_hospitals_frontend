"use client"

import * as React from "react"
import {
    Bot,
    UserRoundPlus,
    ClipboardMinus,
    ClipboardClock,
    CircleUserRound,
    LayoutDashboard,
    GalleryVerticalEnd,
    MessageCircleDashed,

} from "lucide-react"

import { NavMain } from "@/components/dashboard/nav-main"
import { NavUser } from "@/components/dashboard/nav-users"
import { TeamSwitcher } from "@/components/dashboard/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { useSelector } from 'react-redux'
import type { RootState } from '@/lib/store'


const data = {
    platform: [
        {
            name: "DOCNET",
            logo: GalleryVerticalEnd,
            plan: "Hospital",
        }
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "/",
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: "Doctors",
            url: "/doctors",
            icon: UserRoundPlus,
        },
        {
            title: "Patients",
            url: "/patients",
            icon: CircleUserRound,
        },
        {
            title: "Appointments",
            url: "/appointments",
            icon: ClipboardClock,
        },
        {
            title: "Messages",
            url: "/messages",
            icon: MessageCircleDashed,
        },
        {
            title: "Reports",
            url: "/reports",
            icon: ClipboardMinus,
        },
        {
            title: "AI Assistant",
            url: "#",
            icon: Bot,
        },
    ]
}

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const AUTH_USER_DATA = useSelector((state: RootState) => state.auth?.user)

    const user = {
        name: AUTH_USER_DATA?.name || "Hospital",
        email: AUTH_USER_DATA?.email || "",
        avatar: AUTH_USER_DATA?.photo || "https://ui.shadcn.com/avatars/shadcn.jpg",
    }

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.platform} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
