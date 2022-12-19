import {
    RecruitApplyImg,
    RecruitApplyItemContainer,
    RecruitApplyItemWrap,
} from "./RecruitApplyItem.style";

interface Props {
    id: string | number;
    nickname: string;
    level: string | number;
    profileImg?: string | null;

    clickListener?: () => void;
}

const RecruitApplyItem = ({ ...props }: Props) => {
    // console.log(props);
    return (
        <RecruitApplyItemContainer>
            <RecruitApplyImg
                image={props.profileImg ? props.profileImg : null}
            />
            <RecruitApplyItemWrap onClick={props.clickListener}>
                <p className="apply-nickname">{props.nickname}</p>
                <p>{props.level}</p>
            </RecruitApplyItemWrap>
        </RecruitApplyItemContainer>
    );
};

export default RecruitApplyItem;
