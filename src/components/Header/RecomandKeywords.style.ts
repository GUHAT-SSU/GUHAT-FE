import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const RecomandkeywordsWrapper = styled.div`
    z-index: -1;
    position: absolute;
    top: calc(5.5rem);
    min-width: calc(35vw);
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;

    h1 {
        padding-left: 2rem;
        padding-top: 2rem;
        width: 100%;
        font-weight: 500;
        font-size: 1rem;
        color: ${themes.colors.gray_900};
    }
    hr {
        margin-top: 1rem;
        height: 2px;
        background-color: #d9d9d9;
    }
    .close-btn {
        width: 100%;
        text-align: right;
        align-items: center;
        padding: 1rem;
        color: #999999;
    }
`;

export const RecomandkeywordList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1.5rem 2rem;
`;
