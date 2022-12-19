import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const ReviewViewLayoutContainer = styled.div`
    width: 100%;
    margin-top: 3rem;
    padding: 3rem 0rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    .title {
        font-weight: 700;
        font-size: 2.3rem;
        padding: 0 5rem;
        padding-bottom: 0.5rem;
    }

    .lecture-info {
        font-size: 1.2rem;
        font-weight: 600;
        padding-left: 5rem;
        color: ${themes.colors.gray_700};
    }
    .content {
        padding: 2rem 5rem;
    }

    .subtitle {
        font-weight: 600;
        font-size: 2rem;
        padding: 3rem 6rem;
    }

    .label-content {
        text-align: right;
        font-size: 1.2rem;
        color: ${themes.colors.gray_700};
    }

    .text-content {
        font-size: 1.3rem;
        padding: 0 7rem;
        line-height: 2rem;
        padding-bottom: 3rem;
    }

    .file-content-wrapper {
        display: flex;
        margin-left: 6rem;
        margin-right: 50%;
        flex-direction: column;
        align-content: center;

        gap: 1rem;
        font-size: 1.3rem;
    }

    .header-gap {
        height: 3rem;
        background-color: ${themes.colors.bgColor};
    }
`;

export const ReviewViewinfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;

    .info-wrapper {
        display: flex;
        gap: 1rem;
        align-items: center;
        font-weight: 500;
        font-size: 1.2rem;

        .check {
            background-color: ${themes.colors.black_500};
            border-radius: 0.7rem;
            color: white;
            padding: 0.5rem;
        }
    }
`;
