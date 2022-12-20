import Edit from "@assets/edit.svg";
import { useNavigate } from "react-router-dom";
import displayedAt from "../../util/displayAt";
import {
    ReviewHistoryContainer,
    ReviewLikeCount,
    ReviewLikeTagWrap,
    ReviewTagThumb,
} from "./ReviewHistory.style";

export interface IReviewHistory {
    lecture?: any;
    id: number;
    title: string;
    reviewLevel: string;
    year: string;
    semester: string;
    memberNum: number | string;
    fileCnt: number | string;
    detail: string;
    nickname: string;
    writerLevel: number | string;
    viewCount: number;
    likeCount?: number | string;
    createdAt?: string;
    isOwner: boolean;
    likeCnt?: number;

    clickListener?: () => void;
}
const ReviewHistory = ({ ...props }: IReviewHistory) => {
    const navigator = useNavigate();
    return (
        <ReviewHistoryContainer
            onClick={() => {
                navigator(`/review/${props.id}/${props.lecture.id}`);
            }}
        >
            <div className="recruit-title">
                <p>{props.title}</p>
                {props.isOwner ? (
                    <img className="edit-img" src={Edit} alt="편집 아이콘" />
                ) : null}
            </div>
            <div className="recruit-sub-title">
                <p>
                    {props.lecture.name}/
                    {props.lecture.professor
                        ? props.lecture.professor.join()
                        : null}
                </p>
            </div>
            <p className="recruit-day">
                작성일 : {displayedAt(props.createdAt!!)}
            </p>
            <div className="recruit-content">{props.detail}</div>
            <ReviewLikeTagWrap></ReviewLikeTagWrap>
            <ReviewTagThumb />
            <ReviewLikeCount>+{props.likeCnt}</ReviewLikeCount>
        </ReviewHistoryContainer>
    );
};

export default ReviewHistory;
