import { MainButtonContainer } from "@/components/Button";
import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const RecruitPostLayoutContainer = styled.div`
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

export const RecruitContentLayout = styled.div<{ isFilled?: boolean }>`
    position: relative;
    background-color: white;
    width: 80%;
    display: flex;
    flex-direction: column;
    border-radius: 0.7rem;
    padding: 2rem 4rem;
    padding-left: 5rem;
    gap: 1rem;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    .content-label {
        margin-top: 1rem;
        font-size: 1.3rem;
        font-weight: 600;
    }

    .content-inputbox {
        border-radius: 0.5rem;
        border: 1px solid black;
        padding: 2rem 2rem;
        font-size: 1.1rem;
    }

    textArea {
        border-radius: 0.5rem;
        border: 1px solid black;
        height: 10rem;
        resize: none;
        :focus {
            border: 1px solid black;
            outline: none;
        }
    }

    .content-input-count {
        width: 100%;
        font-size: 0.5rem;
        color: gray;
        text-align: right;
    }

    .label-dropdown {
        text-align: right;
        font-size: 1.2rem;
        color: ${themes.colors.gray_700};
    }

    .label-group {
        text-align: bottom;
        color: black;

        font-size: 1rem;
        padding-bottom: 0.5rem;
    }
`;

export const RecruitContentProgress = styled.div<{ isFilled?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ isFilled }) =>
        isFilled
            ? `linear-gradient(103.01deg, #0f3472 12.26%, #303644 59.38%)`
            : `${themes.colors.gray_500}`};

    border-radius: 0.7rem 0 0 0.7rem;
    height: 100%;
    width: 1.5rem;
`;

export const RecruitPostTitle = styled.input`
    width: calc(100%);
    padding: 1rem;
    font-size: 2rem;
    border-bottom: 1px solid black;
`;

export const RecruitGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 70%;
`;

export const RecruitDrowdownWrapper = styled.div`
    display: flex;
    gap: 1.4rem;
    align-items: center;
    padding: 1rem 0;

    .group-wrap {
        font-size: 1.2rem;
        color: ${themes.colors.gray_700};
        padding: 0;
    }
`;

export const RecruitGroupFlexWrapper = styled(RecruitDrowdownWrapper)`
    align-items: flex-end;
    flex-direction: row;
`;

export const RecruitAddbtn = styled(MainButtonContainer)`
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.7rem;
`;
