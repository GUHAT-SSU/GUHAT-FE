import BackArrowBtn from "@/components/Button/BackArrow";
import APILayout from "@/components/Layout/APILayout";

import { StickBackBtn } from "@/domain/recruitView/RecruitViewLayout.style";
import CommentLayout from "@/domain/reviewView/Layout/CommentLayout";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getReview, getReviewComment } from "../apis/review/index";
import ReviewViewLayout from "../domain/reviewView/Layout/ReviewViewLayout";

const ReviewViewContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 3rem;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
`;

const ReviewView = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const { id, lectureId } = useParams();
    const [review_id, setReviewId] = useState<string | null>(null);
    const [lecture_id, setLectureId] = useState<string | null>(null);

    const { status, data } = useQuery(
        ["reviewPost", id],

        () => getReview(id!!, lectureId!!),
        {
            onSuccess: (data: any) => {
                console.log("review response", data);
            },
        }
    );

    const resultComment = useQuery(
        ["reviewCommentList", id],
        () => getReviewComment(id!!, lectureId!!),
        {
            onSuccess: (data: any) => {},
            onError: (err: any) => {
                console.log("comment error", err);
            },
        }
    );

    useEffect(() => {
        setModalVisible(false);
        if (id) setReviewId(id);
        if (lectureId) setLectureId(lectureId);
    }, []);
    setLoading(status !== "success");

    const onClickBack = () => {
        window.history.back();
    };
    console.log("response", data);
    return (
        <>
            <StickBackBtn>
                <BackArrowBtn clickListener={onClickBack} />
            </StickBackBtn>
            <APILayout modal={null}>
                {data?.data ? (
                    <ReviewViewContainer>
                        <ReviewViewLayout {...data.data.data} />
                        <CommentLayout
                            {...resultComment.data}
                            {...data.data.data}
                        />
                    </ReviewViewContainer>
                ) : null}
            </APILayout>
        </>
    );
};

export default ReviewView;
