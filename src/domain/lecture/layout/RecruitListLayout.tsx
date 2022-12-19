import Emptyimg from "@/assets/recruit_find.png";
import RecruitListItem from "@/components/Recruit/List/RecruitListItem";
import themes from "@/styles/themes";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
const RecruitContainer = styled.div`
    width: 100%;
    position: relative;
    border-radius: 1rem;
    margin-top: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 6rem;

    .empty-title {
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
        font-weight: 500;
    }

    .post-btn {
        padding: 1rem;
        color: white;
        background-color: ${themes.colors.blue};
        width: 20%;
        align-self: center;
        border-radius: 2rem;
    }
`;

const EmptyContainer = styled.div`
    background-image: url(${Emptyimg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 40vh;
`;

const RecruitListLayout = ({ list }: { list: any[] }) => {
    console.log("list", list);
    const navigator = useNavigate();
    return (
        <>
            {list && list.length > 0 ? (
                <RecruitContainer>
                    {list.map((item) => (
                        <RecruitListItem {...item} />
                    ))}
                </RecruitContainer>
            ) : (
                <RecruitContainer>
                    <EmptyContainer />
                    <p className="empty-title">모집 중인 팀플이 없습니다.</p>
                    <p className="empty-title">
                        모집글을 작성해 팀원을 구해보세요!
                    </p>
                    <button
                        className="post-btn"
                        onClick={() => {
                            navigator("/recruit/post");
                        }}
                    >
                        {" "}
                        모집글 작성하러 가기
                    </button>
                </RecruitContainer>
            )}
        </>
    );
};

export default RecruitListLayout;
