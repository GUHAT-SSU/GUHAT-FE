import { useRecentRecruit } from "@/apis/recruit/list";
import LectureHistory from "@/components/History/LectureHistory";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

const RecruitMoreContainer = styled.div`
    width: 100%;
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

const RecruitMoreLayout = () => {
    const [focusPage, setFocusPage] = useState(1);
    const { status, data } = useRecentRecruit(focusPage);

    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);

    const [posts, setPosts] = useState(data ? data : []);
    const [focusPosts, setFocusPosts] = useState<any[]>(data ? data : []);

    const navigator = useNavigate();

    useEffect(() => {
        setModalVisible(false);
    }, []);
    useEffect(() => {
        console.log("status", status);
        console.log("data", data);
        if (status === "success") {
            setLoading(false);
            setPosts(data);
        } else if (status === "loading") setLoading(true);
    }, [status]);

    const onClickPage = (page: number) => {
        // setFocusPosts(posts.slice(10 * page - 10, 10 * page));
        setFocusPage(page);
    };

    const getFetchData = () => {
        switch (status) {
            case "success":
                return (
                    <RecruitMoreContainer>
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
                    </RecruitMoreContainer>
                );
            case "error":
                return <h1>Error 발생 </h1>;
        }
    };

    return <>{getFetchData()}</>;
};

export default RecruitMoreLayout;
