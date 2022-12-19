import styled from "@emotion/styled";

export const MemberListLayout = styled.div`
    max-width: calc(50% - 1rem);
    min-width: 20%;
    padding: 1rem 2rem;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    h1 {
        font-weight: 600;
        font-size: 1.2rem;
    }
    .member-list {
        padding: 1rem;
        display: flex;
        gap: 1.3rem;
        padding-left: 2rem;
        overflow-x: auto;
    }
`;
