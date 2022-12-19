import BackArrowBtn from "@/components/Button/BackArrow";
import APILayout from "@/components/Layout/APILayout";
import RecruitPostLayout from "@/domain/recruitPost/Layout/RecruitPostLayout";
import { StickBackBtn } from "@/domain/recruitView/RecruitViewLayout.style";

const RecruitPost = () => {
    const onClickBack = () => {
        window.history.back();
    };

    return (
        <>
            <StickBackBtn>
                <BackArrowBtn clickListener={onClickBack} />
            </StickBackBtn>
            <APILayout modal={<></>}>
                <RecruitPostLayout />
                <div style={{ height: "6rem" }}></div>
            </APILayout>
        </>
    );
};

export default RecruitPost;
