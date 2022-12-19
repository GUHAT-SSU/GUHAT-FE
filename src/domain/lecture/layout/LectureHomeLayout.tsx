import styled from "@emotion/styled";
import { useState } from "react";
import { useQueries } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
    getLecture,
    getLectureRecruits,
    getLectureReviews,
} from "../../../apis/lecture/index";
import { loadingState } from "../../../storage/recoil/loadingState";
import RecruitListLayout from "./RecruitListLayout";
import ReviewListLayout from "./ReviewListLayout";
import SidebarLayout from "./SidebarLayout";

export const LectureHomeLayoutContainer = styled.div`
    display: flex;
    margin-left: 3rem;
    width: calc(100% - 26rem);
    flex-direction: column;
    z-index: 50;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row;
`;

const LectureHomeLayout = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [tab, setTab] = useState("main");
    const { id } = useParams();

    const result = useQueries([
        {
            queryKey: ["lecture", id],
            queryFn: () => getLecture(id!!),
            onSuccess: (data: any) => {
                console.log("lecture", data);
            },
        },

        {
            queryKey: ["getLectureRecruits", id],
            queryFn: () => getLectureRecruits(id!!),
            onSuccess: (data: any) => {
                console.log("recruits", data);
            },
        },

        {
            queryKey: ["getLectureReviews", id],
            queryFn: () => getLectureReviews(id!!),
            onSuccess: (data: any) => {
                console.log("review", data);
            },
        },
    ]);
    setLoading(result.some((result) => result.isLoading));
    const getTabPage = () => {
        switch (tab) {
            case "main":
                return <RecruitListLayout list={result[1].data!!} />;
            case "recruit":
                return <RecruitListLayout list={result[1].data!!} />;
            case "review":
                return (
                    <>
                        <ReviewListLayout list={result[2].data!!} />
                    </>
                );
        }
    };

    const reviews = [
        {
            id: 1, //reviewId
            title: "팀플 제목",
            reviewLevel: "상",
            year: "2022",
            semester: "2학기",
            memberNum: 7,
            fileCnt: 4,
            detail: "상세글",
            nickname: "익명1",
            writerLevel: 3,
            viewCnt: 0,
            likeCnt: 10,
            createdAt: "2022-02-02", // 작성일,
        },
        {
            id: 1, //reviewId
            title: "팀플 제목",
            reviewLevel: "상",
            year: "2022",
            semester: "2학기",
            memberNum: 7,
            fileCnt: 4,
            detail: "상세글",
            nickname: "익명1",
            writerLevel: 3,
            viewCnt: 0,
            likeCnt: 10,
            createdAt: "2022-02-02", // 작성일,
        },
        {
            id: 1, //reviewId
            title: "팀플 제목",
            reviewLevel: "상",
            year: "2022",
            semester: "2학기",
            memberNum: 7,
            fileCnt: 4,
            detail: "상세글",
            nickname: "익명1",
            writerLevel: 3,
            viewCnt: 0,
            likeCnt: 10,
            createdAt: "2022-02-02", // 작성일,
        },
        {
            id: 1, //reviewId
            title: "팀플 제목",
            reviewLevel: "상",
            year: "2022",
            semester: "2학기",
            memberNum: 7,
            fileCnt: 4,
            detail: "상세글",
            nickname: "익명1",
            writerLevel: 3,
            viewCnt: 0,
            likeCnt: 10,
            createdAt: "2022-02-02", // 작성일,
        },
        {
            id: 1, //reviewId
            title: "팀플 제목",
            reviewLevel: "상",
            year: "2022",
            semester: "2학기",
            memberNum: 7,
            fileCnt: 4,
            detail: "상세글",
            nickname: "익명1",
            writerLevel: 3,
            viewCnt: 0,
            likeCnt: 10,
            createdAt: "2022-02-02", // 작성일,
        },
        {
            id: 1, //reviewId
            title: "팀플 제목",
            reviewLevel: "상",
            year: "2022",
            semester: "2학기",
            memberNum: 7,
            fileCnt: 4,
            detail: "상세글",
            nickname: "익명1",
            writerLevel: 3,
            viewCnt: 0,
            likeCnt: 10,
            createdAt: "2022-02-02", // 작성일,
        },
    ];

    const recruits = [
        {
            id: 1, //postId
            type: "major",
            title: "팀플 제목",
            nickname: "익명1",
            level: 1,
            time: ["월 10~11", "수 11:30 ~12:30"],
            year: "2022",
            semester: "2학기",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 3, // 현재 모집된 인원
            endDate: "2022-12-31",
            createdAt: "2022-02-02", // 작성일,
            lectureName: "현대인과성서",
            professor: ["김명배"],
        },
        {
            id: 1, //postId
            type: "elective",
            title: "팀플 제목",
            nickname: "익명1",
            level: 1,
            time: ["월 10~11"],
            year: "2022",
            semester: "2학기",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 4, // 현재 모집된 인원
            endDate: "2023-01-31",
            createdAt: "2022-02-02", // 작성일,
            lectureName: "현대인과성서",
            professor: ["김명배"],
        },
    ];
    return (
        <>
            <Container>
                {!loading ? (
                    <>
                        <SidebarLayout
                            tabController={setTab}
                            lecture={result[0].data}
                        />
                        <LectureHomeLayoutContainer>
                            {getTabPage()}
                        </LectureHomeLayoutContainer>
                    </>
                ) : null}
            </Container>
        </>
    );
};

export default LectureHomeLayout;
