import Edit from "@/assets/edit.svg";
import ReviewListItem from "@/components/Review/List/ReviewListItem";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
const RecruitContainer = styled.div`
    position: relative;
    width: 100%;
    position: relative;
    border-radius: 1rem;
    margin-top: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 6rem;
`;

const ReviewPostButton = styled.button`
    z-index: 80;
    font-weight: 700;
    font-size: 1.3rem;
    width: 100%;
    text-align: right;
    padding-right: 1rem;
    img {
        width: 1.5rem;
        margin-left: 0.5rem;
    }

    :active {
        text-decoration: underline;
    }
`;

const ReviewListLayout = ({ list }: { list: any[] }) => {
    const navigator = useNavigate();
    const { id } = useParams();
    const onClickPost = () => {
        navigator("/review/post/" + id);
    };

    return (
        <>
            <RecruitContainer>
                <ReviewPostButton onClick={onClickPost}>
                    리뷰 작성하기
                    <img src={Edit} alt="작성하기" />
                </ReviewPostButton>
                {list.map((item) => (
                    <ReviewListItem {...item} />
                ))}
            </RecruitContainer>
        </>
    );
};

export default ReviewListLayout;
