import { useGetMyRecruitPost } from "@/apis/profile";
import LectureHistory from "@/components/History/LectureHistory";
import { RecruitNavigateBtn } from "@/domain/recruitMore/Layout/RecruitMoreLayout";
import { loadingState } from "@/storage/recoil/loadingState";
import styled from "@emotion/styled";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
const LectureContainer = styled.div`
    position: absolute;
    top: 0;
    width: calc(100% - 26rem);
    border-radius: 1rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: calc(26rem);
    gap: 2rem;
    padding-bottom: 5rem;
    .lecture-loading-state {
        background-repeat: no-repeat;
        width: 15vw;
        margin-top: 20vh;
        font-size: 2rem;
        text-align: center;
        align-self: center;
    }
`;

const LectureHistoryLayout = () => {
    const loadingRef = useRef(null);

    const [focusPage, setFocusPage] = useState(1);
    const { status, data } = useGetMyRecruitPost(focusPage);

    const [loading, setLoading] = useRecoilState(loadingState);

    const [posts, setPosts] = useState(data ? data : []);

    const navigator = useNavigate();

    useEffect(() => {
        console.log("status", status);
        console.log("data", data);
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
                    <LectureContainer>
                        {posts.map((post: any) => (
                            <LectureHistory
                                key={post.id}
                                {...post}
                                clickListener={() => {
                                    navigator("/recruit/" + post.id);
                                }}
                            />
                        ))}
                        <div className="navigate-bar">
                            {posts.length > 10 ? (
                                [
                                    ...Array(Math.floor(posts.length / 10) + 1),
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
                    </LectureContainer>
                );
            case "error":
                return <h1>Error 발생 </h1>;
            case "loading":
                return (
                    <>
                        {" "}
                        <LectureContainer>
                            <div
                                className="lecture-loading-state"
                                ref={loadingRef}
                            ></div>
                        </LectureContainer>
                    </>
                );
        }
    };

    return <>{getFetchData()}</>;
    // const posts = [
    //     {
    //         id: 1, //postId
    //         isOwner: true, //내가 작성한건지
    //         type: "major",
    //         title: "팀플 제목",
    //         detail: "상세글",
    //         total: 5, // 모집 총 인원
    //         current: 3, // 현재 모집된 인원
    //         endDate: "2022-12-31",
    //         createdAt: "2022-02-02", // 작성일,
    //         lectureName: "현대인과성서",
    //         professor: ["김명배"],
    //     },
    //     {
    //         id: 1, //postId
    //         isOwner: true, //내가 작성한건지
    //         type: "elective",
    //         title: "팀플 제목",
    //         detail: "상세글",
    //         total: 5, // 모집 총 인원
    //         current: 3, // 현재 모집된 인원
    //         endDate: "2022-12-31",
    //         createdAt: "2022-02-02", // 작성일,
    //         lectureName: "현대인과성서",
    //         professor: ["김명배"],
    //     },
    //     {
    //         id: 1, //postId
    //         isOwner: true, //내가 작성한건지
    //         type: "elective",
    //         title: "팀플 제목",
    //         detail: "상세글",
    //         total: 5, // 모집 총 인원
    //         current: 3, // 현재 모집된 인원
    //         endDate: "2022-12-31",
    //         createdAt: "2022-02-02", // 작성일,
    //         lectureName: "현대인과성서",
    //         professor: ["김명배"],
    //     },
    // ];

    // return (
    //     <LectureContainer>
    //         <LectureHistory {...posts[0]} />
    //     </LectureContainer>
    // );
};

export default LectureHistoryLayout;
