import {
    ProfileImg,
    ProfileImgBgCircle,
    ProfileImgWrap,
    ProfileWrap,
} from "./Profile.style";

interface Props {
    profileImg?: string | null;
    level: string;
    nickname: string | null;
}

const Profile = ({ profileImg, level, nickname }: Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
            <ProfileWrap>
                <p id="recruit-profile-nickname">{nickname}</p>
                <p id="recruit-profile-level">{level}</p>
            </ProfileWrap>
            <ProfileImgWrap>
                <ProfileImgBgCircle />
                <ProfileImg img={profileImg ? profileImg : null} />
            </ProfileImgWrap>
        </div>
    );
};

export default Profile;
