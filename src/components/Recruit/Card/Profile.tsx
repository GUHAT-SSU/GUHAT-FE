import { displayLevel } from "@/util/displayLevel";
import {
    ProfileImg,
    ProfileImgBgCircle,
    ProfileImgWrap,
    ProfileWrap,
} from "./Profile.style";

interface Props {
    profileImg?: string | null;
    level: string | number | null;
    nickname: string | null;
}

const Profile = ({ profileImg, level, nickname }: Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <ProfileImgWrap>
                <ProfileImgBgCircle />
                <ProfileImg img={profileImg ? profileImg : null} />
            </ProfileImgWrap>

            <ProfileWrap>
                <p id="recruit-profile-nickname">{nickname}</p>
                <p id="recruit-profile-level">{displayLevel(level!!)}</p>
            </ProfileWrap>
        </div>
    );
};

export default Profile;
