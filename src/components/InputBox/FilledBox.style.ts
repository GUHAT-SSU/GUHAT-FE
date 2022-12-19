import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const FilledBoxWrap = styled.div<{ mode?: string }>`
    background-color: ${({ mode }) =>
        mode === "dark" ? themes.colors.black_500 : themes.colors.gray_100};
    border-radius: 0.8rem;
    font-weight: 500;
    font-size: 1.3rem;
    color: ${({ mode }) =>
        mode === "dark"
            ? themes.colors.white
            : themes.colors.black_500} !important;
    padding: 0.8rem 1rem;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
