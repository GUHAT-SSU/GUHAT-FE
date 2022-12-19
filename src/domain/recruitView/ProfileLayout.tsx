import EditButton from "@/components/Button/EditButton";
import {
    ProfileImg,
    ProfileImgBgCircle,
    ProfileImgWrap,
} from "@/components/Recruit/Card/Profile.style";
import { useNavigate } from "react-router-dom";
import { displayLevel } from "../../util/displayLevel";
import { ProfileLayoutContainer } from "./ProfileLayout.style";

interface Props {
    profileImg?: string;
    nickname: string;
    id: string | number;
    level: string | number;
    endDate: string;
    isOwner: boolean;
    profile?: any;
    editClickListener?: () => void;
}

const ProfileLayout = ({ ...props }: Props) => {
    const navigator = useNavigate();
    const onClickEdit = () => {
        props.editClickListener?.();
    };
    const onClickProfile = () => {
        if (props.profile?.mode === "public")
            navigator(`/profile/${props.profile?.id}`);
    };
    return (
        <ProfileLayoutContainer>
            <ProfileImgWrap>
                <ProfileImgBgCircle />
                <ProfileImg img={props.profileImg} onClick={onClickProfile} />
            </ProfileImgWrap>
            <div style={{ marginLeft: "1rem" }}>
                <p className="nickname">{props.nickname}</p>
            </div>
            <p className="level">{displayLevel(props.level)}</p>
            {props.endDate ? (
                <>
                    {" "}
                    <p className="day">|</p>
                    <p className="day">{props.endDate}</p>
                </>
            ) : null}

            <div style={{ marginLeft: "1rem" }}>
                {props.isOwner ? (
                    <>
                        {/* <MainButton clickListener={onClickEdit}>
                            모집 마감하기
                        </MainButton> */}

                        <EditButton clickListener={onClickEdit} />
                    </>
                ) : null}
            </div>
        </ProfileLayoutContainer>
    );
};

export default ProfileLayout;
