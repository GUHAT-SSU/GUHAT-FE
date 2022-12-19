import styled from "@emotion/styled";
const ReviewContainer = styled.div`
    position: absolute;
    top: 0;
    border-radius: 1rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    margin-left: calc(26rem);
    gap: 2rem;
`;

const ReviewHistoryLayout = () => {
    return <ReviewContainer></ReviewContainer>;
};

export default ReviewHistoryLayout;
