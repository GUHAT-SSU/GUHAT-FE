import styled from "@emotion/styled";
import themes from "@styles/themes";
export const LectureHistoryContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    color: black;
    padding: 3rem;
    border-radius: 1rem;
    background-color: white;
    gap: 1rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    .recruit-title {
        font-weight: 600;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        .edit-img {
            width: 1.2rem;
        }
    }

    .recruit-sub-title {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
        h1 {
            font-weight: 600;
        }
    }

    .recruit-content {
        width: 70%;
        height: 4.5rem;
        overflow: hidden;
        line-height: 1.5rem;
    }

    .recruit-class {
        font-size: 1rem;
        font-weight: 600;
    }
`;

export const StatusChip = styled.div`
    border-radius: 0.7rem;
    background-color: ${themes.colors.blue};
    color: white;
    padding: 0.4rem 0.8rem;
    font-size: 0.5rem;
    text-align: center;
`;

export const LectureProgressContainer = styled.div<{ major?: boolean }>`
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 10;
    top: 0;
    right: 0;
    height: 100%;
    width: 21rem;
    display: flex;
    border-radius: 0;

    transform: skew(-20deg) translate(40px, 0px);
    ${({ major }) =>
        major
            ? "background: #303644; color:white; "
            : "background: #C6E7FA; color:black;"};
    box-shadow: -5px 4px 4px rgba(0, 0, 0, 0.25);

    p {
        transform: skew(20deg) !important;
    }

    .recruit-day {
        font-weight: 600;
        margin-top: 2rem;
        margin-left: 4rem;
    }
`;

export const ProgressWrapper = styled.div<{ major?: boolean }>`
    position: absolute;
    transform: skew(20deg) !important;
    width: 15rem;
    height: 0.5rem;
    border-radius: 1rem;
    bottom: 3rem;
    right: 3rem;
    background-color: darkgray;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    .progress-label {
        position: absolute;
        transform: skew(-20deg) !important;
        display: flex;
        top: -3rem;
        right: 1rem;
        color: white;
        font-weight: 600;
        font-size: 1.2rem;
        gap: 0.2rem;

        ${({ major }) =>
            major
                ? "background: #303644; color:darkgray; "
                : "background: #C6E7FA; color:darkgray;"};
    }
    .total {
        color: lightgray;
        ${({ major }) =>
            major
                ? "background: #303644; color:white; "
                : "background: #C6E7FA; color:gray;"};
    }
`;

export const Progress = styled.div<{ percent: number }>`
    position: absolute;
    transform: skew(20deg) !important;
    width: ${({ percent }) => (percent ? `calc(${percent} * 15rem)` : `15rem`)};
    height: 0.5rem;
    border-radius: 1rem;
    /* bottom: 3rem;
    right: 3rem; */
    background-color: white;

    ${({ percent }) => (percent === 0 ? "background: darkgray; " : "")};
`;
