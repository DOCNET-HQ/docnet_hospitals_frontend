import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Bell, MessageCircleMore } from "lucide-react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "https://ui.shadcn.com/avatars/shadcn.jpg",
    },
    notifications: {
        count: 3
    },
    messages: {
        count: 7
    }
}

function NotificationButton({ count }: { count: number }) {
    return (
        <Button variant="ghost" size="icon" className="relative h-9 w-9 cursor-pointer">
            <Bell className="h-4 w-4" />
            {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                    {count > 99 ? '99+' : count}
                </span>
            )}
            <span className="sr-only">Notifications</span>
        </Button>
    )
}

function MessageButton({ count } : { count: number }) {
    return (
        <Button variant="ghost" size="icon" className="relative h-9 w-9 cursor-pointer">
            <MessageCircleMore className="h-4 w-4" />
            {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-medium text-white">
                    {count > 99 ? '99+' : count}
                </span>
            )}
            <span className="sr-only">Messages</span>
        </Button>
    )
}

export function Header() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1 cursor-pointer" />
                <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                />

                <div className="ml-auto flex items-center gap-2">
                    <ThemeToggle />

                    <MessageButton count={data.messages.count} />
                    <NotificationButton count={data.notifications.count} />

                    <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={data.user.avatar} alt={data.user.name} />
                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    )
}