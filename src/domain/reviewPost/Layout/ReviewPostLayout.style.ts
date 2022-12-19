import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const ReviewLevelButton = styled.button<{ checked?: boolean }>`
    padding: 0.6rem 1rem;
    color: white;
    background-color: white;
    border-radius: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
    ${({ checked }) =>
        checked
            ? `background-color : ${themes.colors.black_500}; `
            : `box-shadow: 0 0 0 2px  ${themes.colors.black_500} inset; color :  ${themes.colors.black_500};`}
`;

export const ReviewLevelWrapper = styled.div`
    display: flex;
    gap: 0.7rem;
`;

export const ReviewFileContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    .upload-button {
        margin-top: 2rem;
        margin-bottom: 2rem;
        height: 3rem;
        width: 30%;
    }
`;

export const ReviewFileWrapper = styled.div`
    width: 60%;
    max-height: 15rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 0;
    gap: 1rem;
`;
