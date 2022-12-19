import styled from "@emotion/styled";

export const ResultContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .loading-img {
        width: 20vw;
        padding-top: 10vh;
        z-index: 50;
        height: 5rem;
        background-repeat: no-repeat;
    }
`;

export const ResultTitleWrap = styled.div`
    width: 100%;
    display: flex;
    font-size: 2rem;
    padding: 5rem;
    img {
        width: 4rem;
    }
    .keyword {
        font-weight: 700;
    }
`;

export const ResultItemListWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 3rem 5rem;
    padding-right: 0;
    padding-bottom: 10rem;
`;

export const ResultItemContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    flex-wrap: wrap;
`;

export const ResultMoreButton = styled.button`
    position: absolute;
    bottom: 5rem;
    right: 5rem;
    width: 100%;
    text-align: right;
    font-weight: 700;
    font-size: 1.3rem;

    :active {
        text-decoration: underline;
    }
`;
