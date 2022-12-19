import styled from "@emotion/styled";

export const ResultTabContainer = styled.div`
    border-bottom: 2px solid lightgray;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4rem;
    padding-left: 5rem;
    padding-right: 5rem;
`;

export const ResultTabWrap = styled.div`
    width: 10rem;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    border-bottom: 3px solid black;
`;

export const ResultTabTitle = styled.p`
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
`;
export const ResultTabCount = styled.p`
    font-size: 1.3rem;
    width: 2rem;
    height: 2rem;
    background-color: darkgray;
    margin: 0.5rem;
    padding: 0.2rem;
    text-align: center;
`;
