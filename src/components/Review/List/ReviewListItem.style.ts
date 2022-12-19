import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const ReviewItemContainer = styled.button`
    position: relative;
    background-color: white;
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    color: black;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    .bold {
        font-weight: 600;
    }

    .lecture-title {
        font-size: 1.4rem;
    }

    .title-wrapper {
        align-items: flex-end;
    }
    .file-icon {
        display: flex;
        gap: 0.5rem;
        img {
            width: 1rem;
        }
    }
    .content-wrapper {
        display: flex;
        gap: 0.8rem;
    }

    .text-wrapper {
        max-height: 4rem;
        overflow: hidden;
        color: ${themes.colors.gray_500};
        line-height: 2rem;
        text-align: left;
        margin: 1.5rem 0;
        font-size: 1rem;
    }
    .level {
        font-size: 0.8rem;
        padding-top: 0.2rem;
        color: ${themes.colors.gray_700};
    }

    .count-wrapper {
        position: absolute;
        display: flex;
        gap: 1rem;
        bottom: 2rem;
        right: 2rem;
        font-weight: 600;
        height: 1.5rem;

        img {
            filter: brightness(0) saturate(100%) invert(0%) sepia(3%)
                saturate(7500%) hue-rotate(153deg) brightness(93%)
                contrast(107%);
        }
        p {
            color: black;
            font-size: 1rem;
            font-weight: 400;
        }
    }
`;
