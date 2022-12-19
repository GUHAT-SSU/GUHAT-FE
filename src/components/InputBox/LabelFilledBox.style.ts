import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const LabelFilledBoxContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
    text-align: center;
    font-size: 1.3rem;
    .label {
        min-width: 5rem;
        color: ${themes.colors.gray_900};
        font-weight: 500;
    }
`;
