import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const RecruitWrap = styled.button<{ lectureType?: string }>`
    position: relative;
    display: flex;
    flex-direction: column;

    width: calc(100% / 3);
    height: 40rem;
    border-radius: 1rem;
    color: ${({ lectureType }) =>
        lectureType === "major"
            ? ` ${themes.colors.white}`
            : ` ${themes.colors.black_500}`};
    //filter: drop-shadow(6px 6px 0px #999999);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    padding-top: 4rem;
    margin-top: 4rem;
    background: ${({ lectureType }) =>
        lectureType === "major" ? "#303644;" : " #C6E7FA"};
    :active {
        filter: brightness(0.5);
    }
    :hover {
        transition-duration: 0.4s;
        transform: translate(0, -20px) scale(1.01);
    }
`;

export const RecruitLectureTitle = styled.p`
    position: relative !important;
    display: flex;
    justify-content: center;
    height: 6rem;
    width: 80%;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    align-items: center;
    align-self: center;
    margin: 1rem;
`;

export const RecruitSubTitle = styled.p<{ type?: string }>`
    position: relative !important;
    width: 100%;
    font-weight: 400;
    font-size: 1.1rem;
    text-align: center;
    align-items: center;
    color: ${({ type }) => (type === "major" ? `white;` : ` black`)};
`;

export const RecruitViewCount = styled.p<{ type?: string }>`
    display: flex;
    width: 100%;
    font-weight: 700;
    text-align: center;
    align-items: center;
    color: ${({ type }) =>
        type === "major" ? `white` : ` ${themes.colors.black_500}`};
`;

export const RecruitBgPogress = styled.div<{
    progress?: number;
    type?: string;
}>`
    position: absolute;
    width: ${({ progress }) =>
        progress
            ? progress === 1
                ? `100%`
                : `calc((100% - 4rem) * ${progress} + 2rem);`
            : `0%;`};
    max-width: 100%;
    height: 100%;
    z-index: 1;

    top: 0;
    background: linear-gradient(
            269.66deg,
            rgba(255, 255, 255, 0.1) -48.44%,
            rgba(255, 255, 255, 0) 61.89%
        )
        rgba(15, 52, 114, 0.05);
    box-shadow: none;
`;
