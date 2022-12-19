import DislikeIcon from "@/assets/round_dislike.svg";
import LikeIcon from "@/assets/round_like.svg";
import displayedAt from "@/util/displayAt";
import {
    CommentContainer,
    EmojiContainer,
    InfoWrapper,
} from "../Comment.style";

interface Props {
    year: string;
    semester: string;
    createdAt: string;
    status: string;
    comment: string;
}
const LikeComment = ({ ...props }: Props) => {
    console.log(props);
    return (
        <CommentContainer>
            <EmojiContainer>
                <img
                    className="like-img"
                    src={props.status === "like" ? LikeIcon : DislikeIcon}
                    alt="이모지"
                ></img>
            </EmojiContainer>
            <InfoWrapper>
                <p className="day-label">
                    {props.year}년도 {props.semester} 수강자
                </p>
                <p className="day-label">{displayedAt(props.createdAt)}</p>
            </InfoWrapper>

            <p>“{props.comment}”</p>
        </CommentContainer>
    );
};

export default LikeComment;
