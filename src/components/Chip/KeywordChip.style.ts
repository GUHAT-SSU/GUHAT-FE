import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const KeywordChipWrapper = styled.button`
    padding: 0.8rem 1.5rem;
    border-radius: 2rem;
    border: 2px solid ${themes.colors.gray_100};
    :active {
        filter: brightness(0.8);
    }
`;
