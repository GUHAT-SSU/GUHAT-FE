import styled from "@emotion/styled";

export const RecruitingListLayoutWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3rem 0rem;

    .recruiting-title {
        padding-left: 1.5rem;
        font-size: 1.8rem;
        h1 {
            font-weight: 700;
        }
    }
    .recruiting-more {
        position: absolute;
        right: 1rem;
        top: 2rem;
        transform: translate(-1rem, 1rem);
        text-align: right;
        font-size: 1.6rem;
        font-weight: 700;
        :active {
            text-decoration: underline;
        }
    }
`;
