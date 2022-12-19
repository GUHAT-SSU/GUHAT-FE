import Review from "@/components/Review/Card/Review";
import { IReview } from "@/types/review.types";
import { useNavigate } from "react-router-dom";
import { ReviewListContainer, ReviewListWrapper } from "./ReviewList.style";

interface Props {
    reviewList?: IReview[];
}

const ReviewList = ({ reviewList }: Props) => {
    const navigator = useNavigate();
    return (
        <ReviewListContainer>
            <ReviewListWrapper>
                {reviewList
                    ? reviewList.map((review, idx) => {
                          return (
                              <Review
                                  review={review}
                                  key={"review " + idx}
                                  clickListener={() => {
                                      navigator(
                                          `/review/${review.id}/${review.lecture.lectureId}`
                                      );
                                  }}
                              />
                          );
                      })
                    : null}
            </ReviewListWrapper>
        </ReviewListContainer>
    );
};

export default ReviewList;
