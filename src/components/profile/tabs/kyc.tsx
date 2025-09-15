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
import { DateInput } from "@/components/ui/date-input";
import { FileUploader } from "@/components/utils/file-uploader";


export default function KYC() {
    return (
        <TabsContent value="kyc" className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and profile information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="registration_number">Registration Number</Label>
                            <Input id="registration_number" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="license_name">License Name</Label>
                            <Input id="license_name" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="license_issuance_authority">License Issuance Authority</Label>
                            <Input id="license_issuance_authority" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="license_number">License Number</Label>
                            <Input id="license_number" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="license_issue_date">License Issue Date</Label>
                            <DateInput id="license_issue_date" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="license_expiry_date">License Expiry Date</Label>
                            <DateInput id="license_expiry_date" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="license_document">Upload Hospital License Document</Label>
                            <FileUploader id="license_document" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="id_document">Upload Admin ID Document (Passport e.t.c)</Label>
                            <FileUploader id="id_document" />
                        </div>
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


/*

"id_document": "string",
"is_active": true,
"license_document": "string",

*/
