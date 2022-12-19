import { useNavigate } from "react-router-dom";
import { IReview } from "../../../types/review.types";
import ReviewList from "../List/ReviewList";
import { RecruitingListLayoutWrapper } from "./RecruitingLayout.style";

const ReviewLayout = ({ list }: { list: IReview[] }) => {
    const navigator = useNavigate();
    return (
        <>
            <RecruitingListLayoutWrapper>
                <div
                    className="recruiting-title"
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                        marginBottom: "1.8rem",
                    }}
                >
                    <p>방금 올라온 </p>
                    <h1>팀플 리뷰 </h1>
                    <p>에요!</p>
                </div>

                <ReviewList
                    reviewList={list.length > 3 ? list.slice(0, 3) : list}
                />
                <div style={{ width: "100%", position: "relative" }}>
                    <button
                        className="recruiting-more"
                        onClick={() => {
                            navigator("/reviews");
                        }}
                    >
                        더보기
                    </button>
                </div>
            </RecruitingListLayoutWrapper>
        </>
    );
};

export default ReviewLayout;
