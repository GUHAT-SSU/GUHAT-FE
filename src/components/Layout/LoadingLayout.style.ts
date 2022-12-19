import styled from "@emotion/styled";

export const LoadingContainer = styled.div`
    z-index: 100;
    position: fixed;
    top: 0rem;
    background-color: black;
    width: 100%;
    height: 100%;
    overflow: hidden !important;
    opacity: 0.6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: 500;
        font-size: 1.8rem;
        color: white;
    }

    .loading-img {
        width: 20vw;
    }
`;
