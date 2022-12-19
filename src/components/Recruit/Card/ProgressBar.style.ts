import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const ProgressContainer = styled.div`
    width: calc(100% - 4rem);
    z-index: 5;
    position: relative;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;
    height: calc(10px + 4rem);
`;
export const ProgressWrap = styled.div`
    height: 10px;
    background-color: ${themes.colors.gray_900};
    border-radius: 10px;
`;

export const Progress = styled.div<{ progress: number }>`
    width: ${({ progress }) => `${progress}%`};
    height: 100%;
    background-color: white;
    border-radius: 10px;
`;

export const ProgressText = styled.p`
    position: absolute;
    right: 0;
    margin-top: 0.5rem;
`;
