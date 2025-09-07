import ProfileHeader from "@/components/profile/profile-header";
import ProfileContent from "@/components/profile/profile-content";

export default function Page() {
  return (
    <div className="container mx-auto space-y-6 px-2 md:px-5 lg:px-25 py-8">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
}
