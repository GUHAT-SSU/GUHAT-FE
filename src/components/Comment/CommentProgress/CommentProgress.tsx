import LikeIcon from "@/assets/like_percent.svg";
import {
    CommentProgressContainer,
    LikePoint,
    LikeProgess,
    LikeProgressWraper,
    LikeShadow,
} from "./CommenntProgress.style";
const CommentProgress = ({
    percent,
    likeCount,
}: {
    percent: string | number;
    likeCount: number;
}) => {
    return (
        <CommentProgressContainer>
            <LikePoint percent={percent + "%"}>
                <div className="like-wrapper">
                    <p>Like</p>
                    <h1>{likeCount}</h1>
                </div>

                <img src={LikeIcon} alt="좋아요 아이콘" />
            </LikePoint>
            <LikeProgressWraper>
                <LikeShadow percent={percent + "%"} />
                <LikeProgess percent={percent + "%"} />
            </LikeProgressWraper>
        </CommentProgressContainer>
    );
};

export default CommentProgress;
