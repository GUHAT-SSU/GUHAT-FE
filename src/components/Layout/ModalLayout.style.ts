import styled from "@emotion/styled";

export const ModalBackgroundContainer = styled.div`
    z-index: 80;
    position: fixed;
    top: 0;
    background-color: rgb(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    overflow: hidden !important;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    background-color: white;
    border-radius: 1.5rem;
    display: flex;
    padding: 2rem 3rem;
    opacity: 100% !important;
`;
