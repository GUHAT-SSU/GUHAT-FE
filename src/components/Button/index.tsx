import themes from "@/styles/themes";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export const MainButtonContainer = styled.button<{ width?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${themes.colors.black_500};
    border-radius: 1rem;
    color: white;
    width: ${({ width }) => (width ? `${width}` : null)};
`;

const MainButton = ({
    children,
    clickListener,
    width,
    disabled,
}: {
    children?: ReactNode;
    clickListener: () => void;
    width?: string;
    disabled?: boolean;
}) => {
    return (
        <MainButtonContainer
            width={width}
            onClick={clickListener}
            disabled={disabled}
        >
            {children}
        </MainButtonContainer>
    );
};

export default MainButton;
