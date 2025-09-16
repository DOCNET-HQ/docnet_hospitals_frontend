import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardDescription,
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

type AccountTabProps = {
    isActive: boolean;
    isVisible: boolean;
}


export default function Account(
    { isActive, isVisible }: AccountTabProps
) {

    const getStatusBgColor = (is_active: boolean) => {
        if (is_active) {
            return "border-green-200 bg-green-600"
        } else {
            return "border-red-200 bg-red-600"
        }
    }


    return (
        <TabsContent value="account" className="space-y-6">
        <Card>
            <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account preferences and subscription.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <Label className="text-base">Account Status</Label>
                    <p className="text-muted-foreground text-sm">Your account is currently active</p>
                </div>

                <Badge variant="outline" className={`${getStatusBgColor(isActive)} text-white py-2 px-3 rounded-full`}>
                { isActive ? "Active" : "Not Active" }
                </Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                <Label className="text-base">Subscription Plan</Label>
                <p className="text-muted-foreground text-sm">Pro Plan - $29/month</p>
                </div>
                        <Button variant="outline" className="cursor-pointer">Manage Subscription</Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                <Label className="text-base">Account Visibility</Label>
                <p className="text-muted-foreground text-sm">
                    Make your profile visible to other users
                </p>
                </div>
                <Switch className="cursor-pointer" defaultChecked={isVisible} />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                <Label className="text-base">Data Export</Label>
                <p className="text-muted-foreground text-sm">Download a copy of your data</p>
                </div>
                <Button variant="outline">Export Data</Button>
            </div>
            </CardContent>
        </Card>

        <Card className="border-destructive/50">
            <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
            <CardDescription>Irreversible and destructive actions</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                <Label className="text-base">Delete Account</Label>
                <p className="text-muted-foreground text-sm">
                    Permanently delete your account and all data
                </p>
                </div>
                <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                    Delete Account
                </Button>
            </div>
            </CardContent>
        </Card>
        </TabsContent>
    )
}
