import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const ProgressContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 0rem 2.5rem;
`;
export const ProgressWrap = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${themes.colors.gray_900};
    border-radius: 10px;
`;

export const Progress = styled.div<{ progress: number }>`
    width: ${({ progress }) => `${progress}%`};
    height: 100%;
    background-color: white;
    border-radius: 10px;
`;

export const ProgressInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 200;
    color: ${themes.colors.gray_900};
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    .profile-point {
        color: white;
        margin-right: 0.5rem;
    }
`;
