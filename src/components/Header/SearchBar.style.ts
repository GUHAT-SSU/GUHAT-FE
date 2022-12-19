import moreIcon from "@assets/dropdown.svg";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import themes from "@styles/themes";

const SearchWrap = styled.div<{ isFocused?: boolean }>`
    z-index: 10;
    background-color: ${(props) =>
        props.isFocused ? themes.colors.gray_300 : "white"};
    border-radius: 12px;
    border: 1px solid ${themes.colors.gray_500};
    position: absolute;
    display: flex;
    left: calc(8rem + 10rem);
    transform: translate(calc(8rem + 10rem));
    min-width: 35vw;

    .header-search {
        z-index: 10;
        width: 10%;
        height: 2.2rem;
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translate(1rem, -50%);
        margin: 0 auto;
    }
    .header-search:active {
        filter: brightness(0.8);
    }
`;

const SearchInput = styled.input`
    z-index: 20;
    background-color: transparent;
    padding: 1rem 2rem;
    width: calc(100% - 3rem);
    font-size: 1.2rem;
`;

const SearchKeyword = styled.button<{ active?: boolean }>`
    z-index: 99;
    position: absolute;
    left: calc(14rem);
    transform: translate(calc(14rem));
    ${({ active }) =>
        `${
            !active
                ? `background-color : ${themes.colors.gray_500} ` +
                  " border-radius: 12px 0 0 12px;"
                : "#f18904; border-radius : none;"
        }`};
    width: 8rem;
    display: flex;
    padding-left: 1.5rem;
    align-items: center;
    height: calc(100% - 3rem);
    font-size: 1.2rem;
    text-align: left;

    background-image: url(${moreIcon});
    background-repeat: no-repeat;
    background-position: 85% 50%;
    background-size: 1.2rem;
`;

const drowDownAnmiation = keyframes`

      0% {
                opacity: 0;
                transform:  translate(calc(13rem), -1rem);
        }
   
     100% {
                 opacity: 1;
                transform: scaleY(1) translate(calc(13rem));
    }
`;

const SearchKeywordOption = styled.ul`
    z-index: -1;
    top: calc(6rem);
    position: absolute;
    left: calc(13rem);
    transform: translate(calc(13rem));
    width: 7rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    animation: ${drowDownAnmiation} 0.4s;

    li {
        z-index: 90;
        text-align: center;
        background-color: #2496ff;
        color: white;
        padding: 0.7rem 0rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        cursor: pointer;

        :hover {
            filter: brightness(0.9);
            transform: scale(1.05);
        }
    }
`;
export { SearchWrap, SearchInput, SearchKeyword, SearchKeywordOption };
