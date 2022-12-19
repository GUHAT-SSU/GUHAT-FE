import styled from "@emotion/styled";

export const HistoryListcontainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0;
    max-height: 15rem;
    overflow-y: auto;
    position: relative;
    .histtory-content-wrapper {
        width: 100%;
        display: flex;
        padding: 0;
    }
    .line-item {
        width: 0.4rem;
        height: 4rem;
        margin-left: 0.6rem;
        background-color: gray;
        border-radius: 0 0 1rem 1rem;
    }

    .end-item {
        width: 0.4rem;
        height: 1rem;
        margin-left: 0.6rem;
        background-color: gray;
        border-radius: 0 0 1rem 1rem;
    }
    .end-item-circle {
        width: 0.4rem;
        height: 0.4rem;
        margin-left: 0.6rem;
        background-color: gray;
        border-radius: 1rem;
        margin-top: 0.3rem;
    }
`;

export const TeamItemWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    .circle-item {
        width: 1.6rem;
        height: 1.6rem;
        border: 0.4rem solid gray;
        background-color: lightgray;
        border-radius: 2rem;
    }

    .day-item {
        font-weight: 600;
        margin-left: 1rem;
        margin-right: 1.5rem;
    }

    .class-item {
        font-weight: 500;
    }
`;
