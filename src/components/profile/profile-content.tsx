import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

// Tabs
import Personal from "@/components/profile/tabs/personal";
import Account from "@/components/profile/tabs/account";
import Security from "@/components/profile/tabs/security";
import KYC from "@/components/profile/tabs/kyc";


export default function ProfileContent() {
  return (
    <Tabs defaultValue="personal" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4 bg-muted p-1">
        <TabsTrigger
          className="cursor-pointer data-[state=active]:!bg-blue-600 data-[state=active]:!text-white data-[state=active]:shadow-sm"
          value="personal"
        >
          Personal
        </TabsTrigger>
        <TabsTrigger
          className="cursor-pointer data-[state=active]:!bg-blue-600 data-[state=active]:!text-white data-[state=active]:shadow-sm"
          value="kyc"
        >
          KYC Information
        </TabsTrigger>
        <TabsTrigger
          className="cursor-pointer data-[state=active]:!bg-blue-600 data-[state=active]:!text-white data-[state=active]:shadow-sm"
          value="account"
        >
          Account
        </TabsTrigger>
        <TabsTrigger
          className="cursor-pointer data-[state=active]:!bg-blue-600 data-[state=active]:!text-white data-[state=active]:shadow-sm"
          value="security"
        >
          Security
        </TabsTrigger>
      </TabsList>

      {/* Personal Information */}
      <Personal />

      {/* KYC Information */}
      <KYC />

      {/* Account Settings */}
      <Account />

      {/* Security Settings */}
      <Security />
    </Tabs>
  );
}
