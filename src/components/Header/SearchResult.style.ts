import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const SearchResultWrapper = styled.ul`
    z-index: 60;
    position: absolute;
    top: calc(6rem);
    min-width: calc(35vw);
    padding-top: 2rem;
    padding-bottom: 0;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;

    #search-empty {
        font-size: 1.2rem;
        font-weight: 400;
        padding-left: 2rem;
        padding-bottom: 1rem;
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

export const SearchResultItem = styled.button`
    position: relative;
    list-style: none;
    display: inline-block;
    width: 100%;
    display: flex;
    color: black;
    padding: 1.5rem;
    margin: 0;
    line-height: 100%;
    align-items: center;
    font-size: 1.1rem;
    justify-content: flex-start;

    :hover {
        background-color: ${themes.colors.blue_500}20;
    }
    #search-icon {
        position: absolute;
        left: 2rem;
        width: 3rem;
        height: 1.5rem;
    }
    .result-item {
        display: flex;
        position: absolute;
        left: 6rem;
    }
    .search-key {
        font-weight: bold;
        text-align: left;
    }

    :active {
        filter: brightness(0.9);
    }
`;
