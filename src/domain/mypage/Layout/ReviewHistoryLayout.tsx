import { useGetMyReviewPost } from "@/apis/profile";
import ReviewHistory from "@/components/History/ReviewHistory";
import { RecruitNavigateBtn } from "@/domain/reviewMore/ReviewMoreLayout";
import { loadingState } from "@/storage/recoil/loadingState";
import styled from "@emotion/styled";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

const ReviewContainer = styled.div`
    position: absolute;
    top: 0;
    border-radius: 1rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: calc(26rem);
    gap: 2rem;

    .lecture-loading-state {
        background-repeat: no-repeat;
        width: 15vw;
        margin-top: 20vh;
        margin-left: calc(26rem);
        font-size: 2rem;
        text-align: center;
        align-self: center;
    }
`;

const ReviewHistoryLayout = () => {
    const loadingRef = useRef(null);

    const [focusPage, setFocusPage] = useState(1);
    const { status, data } = useGetMyReviewPost(focusPage);

    const [loading, setLoading] = useRecoilState(loadingState);
    const [posts, setPosts] = useState(data ? data : []);

    const navigator = useNavigate();

    useEffect(() => {
        lottie.loadAnimation({
            container: loadingRef.current!!,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../../../assets/loading.json"),
        });
        if (status === "success") {
            setLoading(false);
            setPosts(data);
        } else setLoading(true);
    }, [status]);

    // setLoading(status !== "success");
    // useEffect(() => {
    //     setLoading(true);
    // }, []);

    const onClickPage = (page: number) => {
        // setFocusPosts(posts.slice(10 * page - 10, 10 * page));
        setFocusPage(page);
    };

    const getFetchData = () => {
        switch (status) {
            case "success":
                return (
                    <ReviewContainer>
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
                    </ReviewContainer>
                );
            case "error":
                return <h1>Error 발생 </h1>;
            case "loading":
                return (
                    <>
                        {" "}
                        <ReviewContainer>
                            <div
                                className="lecture-loading-state"
                                ref={loadingRef}
                            ></div>
                        </ReviewContainer>
                    </>
                );
        }
    };

    return <>{getFetchData()}</>;
};

export default ReviewHistoryLayout;
