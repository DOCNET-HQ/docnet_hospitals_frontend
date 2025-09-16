import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Calendar, Mail, MapPin, PhoneCall } from "lucide-react";
import { useState, useRef } from "react";

type ProfileHeaderProps = {
  name: string;
  email: string;
  phone_number: string;
  state: string;
  country: string;
  kycStatus: string;
  created_at: string;
};

export default function ProfileHeader(
  {
    name,
    email,
    phone_number,
    state,
    country,
    kycStatus,
    created_at
  }: ProfileHeaderProps
) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setSelectedImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const getStatusBgColor = (status: string) => {
    if (status === "VERIFIED") {
      return "bg-green-600"
    } else if (status === "SUSPENDED") {
      return "bg-blue-600"
    } else if (status === "REJECTED") {
      return "bg-red-600"
    }

    return "bg-yellow-500"
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="relative">
            <Avatar className="h-30 w-30">
              <AvatarImage
                className="object-center object-cover"
                src={selectedImage || "https://bundui-images.netlify.app/avatars/08.png"}
                alt="Profile"
              />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="outline"
              className="absolute -right-1 -bottom-1 h-8 w-8 rounded-full cursor-pointer p-0 border-2 border-white bg-white hover:bg-gray-100"
              onClick={handleCameraClick}
            >
              <Camera />
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <h1 className="text-2xl font-bold">
                {name}
              </h1>
              <Badge
                variant="secondary"
                className={`${getStatusBgColor(kycStatus)} text-white`}
              >
                {
                  kycStatus?.charAt(0) + kycStatus?.slice(1).toLowerCase()
                }
              </Badge>
            </div>
            {/* <p className="text-muted-foreground">Senior Product Designer</p> */}
            <div className="flex items-center gap-1">
              <MapPin className="size-4" />
              <span className="text-sm text-muted-foreground">
                {state}, {country}
              </span>
            </div>

            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Mail className="size-4" />
                {email}
              </div>

              <div className="flex items-center gap-1">
                <PhoneCall className="size-4" />
                {phone_number}
              </div>

              <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                Joined {" "}
                {
                  new Date(created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })
                }
              </div>
            </div>
          </div>
          <Button
            variant="default"
            className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 cursor-pointer"
          >
            {selectedImage ? "Change Photo" : "Edit Profile"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
