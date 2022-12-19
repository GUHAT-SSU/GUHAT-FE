import BackArrowBtn from "@/components/Button/BackArrow";
import APILayout from "@/components/Layout/APILayout";
import { StickBackBtn } from "@/domain/recruitView/RecruitViewLayout.style";
import ReviewPostLayout from "@/domain/reviewPost/Layout/ReviewPostLayout";
import ScheduleLoadModal from "../components/Modal/ScheduleLoadModal";

const ReviewPost = () => {
    const onClickBack = () => {
        window.history.back();
    };

    return (
        <>
            <StickBackBtn>
                <BackArrowBtn clickListener={onClickBack} />
            </StickBackBtn>
            <APILayout modal={<ScheduleLoadModal />}>
                <ReviewPostLayout />
                <div style={{ height: "6rem" }}></div>
            </APILayout>
        </>
    );
};

export default ReviewPost;
