import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const RecruitItemContainer = styled.button`
    position: relative;
    overflow: hidden;
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
        width: 70%;
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

    .day-wrapper {
        z-index: 20;
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-weight: 600;
        color: white;
    }
`;
