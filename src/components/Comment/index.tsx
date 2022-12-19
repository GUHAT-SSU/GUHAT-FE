import Angry from "@/assets/Angry.png";
import Crying from "@/assets/Crying.png";
import Happy from "@/assets/Happy.png";
import Smile from "@/assets/Smiling.png";
import Star from "@/assets/star.svg";
import displayedAt from "@/util/displayAt";
import Love from "../../assets/Love.png";
import { CommentContainer, EmojiContainer } from "./Comment.style";
const assetPath = "../../assets/";
interface Props {
    day: string;
    emoji: string;
    score: string | number;
    comment?: string;
    createdAt?: string;
}

const emotionType = (id: number) => {
    if (id === 1) {
        return Love;
    } else if (id === 2) {
        return Smile;
    } else if (id === 3) {
        return Happy;
    } else if (id === 4) {
        return Crying;
    } else return Angry;
};

const Comment = ({ ...props }) => {
    return (
        <CommentContainer>
            <EmojiContainer>
                <img
                    className="emoji-img"
                    src={emotionType(props.emojiType)}
                    alt="이모지"
                ></img>
                <div className="star-wrapper">
                    <img className="star-img" src={Star}></img>
                    <p>{props.score}</p>
                </div>
            </EmojiContainer>
            <p className="day-label">{displayedAt(props.createdAt!!)}</p>
            <p>{props.comment}</p>
        </CommentContainer>
    );
};

export default Comment;
