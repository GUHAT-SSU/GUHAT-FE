import styled from "@emotion/styled";

export const MyPostingContainer = styled.div`
    width: calc(100% - 20vw - 2rem);
    margin-top: 1rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const MyPostingListWrapper = styled.div`
    max-width: calc(100%);
    display: flex;

    flex-direction: row;
    gap: 2rem;
    padding: 1rem;
    overflow-x: scroll !important;
`;
