import Profile from "@/components/MyPost/Card/Profile";
import { IReview } from "../../../types/review.types";
import { displayLevel } from "../../../util/displayLevel";
import {
    ReviewContainer,
    ReviewContent,
    ReviewLecturenWrap,
    ReviewLikeCount,
    ReviewLikeTagWrap,
    ReviewProfileInfo,
    ReviewTagThumb,
    ReviewTitle,
    ReviewTitleWrap,
} from "./Review.style";
const Review = ({
    review,
    clickListener,
}: {
    review: IReview;
    clickListener: () => void;
}) => {
    return (
        <ReviewContainer onClick={clickListener}>
            <ReviewLikeTagWrap />
            <ReviewTagThumb />
            <ReviewLikeCount>+{review.likeCount}</ReviewLikeCount>
            <ReviewTitleWrap>
                <ReviewTitle>{review.title}</ReviewTitle>
                <ReviewLecturenWrap>
                    <p>{review.lecture.name} </p>
                    <p>
                        {review.lecture.professors?.map((p, i) => {
                            if (i === 0) return p;
                            else return ` ${p}`;
                        })}
                    </p>
                </ReviewLecturenWrap>
            </ReviewTitleWrap>
            <ReviewContent>{review.detail}</ReviewContent>
            <ReviewProfileInfo>
                <p className="lecture-info">
                    {`${review.lecture.year}년도 ${review.lecture.semester} `}
                    수강자
                </p>
                <Profile
                    profileImg={review.writer.profileImg}
                    level={displayLevel(review.writer.level!!)}
                    nickname={review.writer.nickname}
                />
            </ReviewProfileInfo>
        </ReviewContainer>
    );
};

export default Review;
