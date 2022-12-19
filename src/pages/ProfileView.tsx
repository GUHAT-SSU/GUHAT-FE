import APILayout from "@/components/Layout/APILayout";
import ProfilePageLayout from "@/domain/profile/ProfilepageLayout";
import ProfileCommentModal from "../components/Modal/ProfileCommentModal";

const ProfileView = () => {
    return (
        <APILayout modal={<ProfileCommentModal />}>
            <ProfilePageLayout></ProfilePageLayout>;
        </APILayout>
    );
};

export default ProfileView;
