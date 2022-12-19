import { useRecentReview } from "@/apis/review/list";
import ReviewHistory from "@/components/History/ReviewHistory";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
const RecruitMoreContainer = styled.div`
    width: 110%;
    display: flex;
    padding: 0 10rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 6rem;
    padding-bottom: 6rem;

    .navigate-bar {
        display: flex;
        width: 60%;
        justify-content: center;
        gap: 2rem;
    }

    .navigate-btn {
        font-weight: 500;
        font-size: 1.3rem;
        color: gray;
    }
`;

export const RecruitNavigateBtn = styled.button<{ check: boolean }>`
    font-weight: 500;
    font-size: 1.3rem;
    ${({ check }) => (check ? `color:black;` : `color :gray`)}
`;

const ReviewMoreLayout = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const loadingRef = useRef(null);

    const [focusPage, setFocusPage] = useState(1);
    const { status, data } = useRecentReview(focusPage);

    const [posts, setPosts] = useState(data ? data : []);

    const navigator = useNavigate();

    // setLoading(status !== "success");
    // useEffect(() => {
    //     setLoading(true);
    // }, []);

    const onClickPage = (page: number) => {
        // setFocusPosts(posts.slice(10 * page - 10, 10 * page));
        setFocusPage(page);
    };

    useEffect(() => {
        setModalVisible(false);
    }, []);
    setLoading(status !== "success");
    const getFetchData = () => {
        switch (status) {
            case "success":
                return (
                    <RecruitMoreContainer>
                        {data.map((post: any) => (
                            <ReviewHistory
                                key={post.id}
                                {...post}
                                clickListener={() => {
                                    navigator("/recruit/" + post.id);
                                }}
                            />
                        ))}
                        <div className="navigate-bar">
                            {data.length > 10 ? (
                                [
                                    ...Array(Math.floor(data.length / 10) + 1),
                                ].map((m, i) => {
                                    return (
                                        <RecruitNavigateBtn
                                            key={i}
                                            check={focusPage === i + 1}
                                            onClick={() => {
                                                onClickPage(i + 1);
                                            }}
                                        >
                                            {i + 1}
                                        </RecruitNavigateBtn>
                                    );
                                })
                            ) : (
                                <RecruitNavigateBtn key={1} check={true}>
                                    1
                                </RecruitNavigateBtn>
                            )}
                        </div>
                    </RecruitMoreContainer>
                );
            case "error":
                return <h1>Error 발생 </h1>;
            case "loading":
                return (
                    <>
                        {" "}
                        <div
                            className="lecture-loading-state"
                            ref={loadingRef}
                        ></div>
                    </>
                );
        }
    };

    return <>{getFetchData()}</>;
};

export default ReviewMoreLayout;
