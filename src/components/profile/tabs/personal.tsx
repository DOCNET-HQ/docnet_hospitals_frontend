import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";


type PersonalTabProps = {
    name: string;
    email: string;
    phone_number: string;
    website: string;
    country: string;
    state: string;
    city: string;
    address: string;
    postal_code: string;
    bio: string;
};


export default function Personal(
    {
        name,
        email,
        phone_number,
        website,
        country,
        state,
        city,
        address,
        postal_code,
        bio
    } : PersonalTabProps
) {
    return (
        <TabsContent value="personal" className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and profile information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue={name || ""} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue={email || ""} disabled />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone_number">Phone Number</Label>
                            <Input id="phone_number" defaultValue={phone_number || ""} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="website">Website</Label>
                            <Input id="website" defaultValue={website || ""} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Input id="country" defaultValue={country || ""} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Input id="state" defaultValue={state || ""} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" defaultValue={city || ""} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" defaultValue={address || ""} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="postal_code">Postal Code</Label>
                            <Input id="postal_code" defaultValue={postal_code || ""} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                            rows={8}
                            id="bio"
                            placeholder="Tell us about your Hospital"
                            defaultValue={bio || ""}
                        />
                    </div>

                    <div className="flex justify-end">
                        <Button
                            variant="default"
                            className="bg-blue-600 px-15 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 cursor-pointer"
                        >
                            Submit
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    )
}
