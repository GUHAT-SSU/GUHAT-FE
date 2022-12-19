import MemberDefault from "@assets/member_default2.svg";
import { MemberCardContainer, MemberCardImg } from "./MemberCard.style";

interface Props {
    width?: string;
    member: string | null;
    profileImg?: string | null;
    id?: number;
    disabled?: boolean;
    clickListener?: () => any;
}

const MemberCard = ({
    member,
    profileImg,
    width,
    disabled,
    clickListener,
}: Props) => {
    console.log(profileImg);
    return (
        <MemberCardContainer
            width={width}
            member={member}
            disabled={disabled}
            onClick={clickListener}
        >
            <MemberCardImg
                img={profileImg ? profileImg : MemberDefault}
            ></MemberCardImg>

            <div className="member-nickname">{member ? member : "모집중"}</div>
        </MemberCardContainer>
    );
};

export default MemberCard;
