import themes from "@/styles/themes";
import ElectiveIcon from "@assets/elective_recruit.svg";
import MajorIcon from "@assets/major_recruit.svg";
import styled from "@emotion/styled";

export const RecruitContentWrap = styled.div`
    z-index: 5;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 2.5rem;
    background-color: white;
    border-radius: 0 0 1rem 1rem;
    color: ${themes.colors.gray_1000};
`;

export const RecruitContentChip = styled.div<{ type?: string }>`
    z-index: 10;
    position: absolute;
    top: -2.5rem;
    left: 50%;
    transform: translate(-50%);
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    background-color: white;
    background-image: ${(props) =>
        props.type === "major" ? `url(${MajorIcon})` : `url(${ElectiveIcon})`};
    background-position: center;
    background-size: contain;
`;

export const RecruitContentTitle = styled.p`
    font-weight: 700;
    font-size: 18px;
`;

export const RecruitContentDetail = styled.p`
    font-size: 12px;
    margin-top: 1rem;
    margin-bottom: 2rem;
    max-lines: 2;
    height: 2.5rem;
    overflow: hidden;
    color: ${themes.colors.gray_700};
`;

export const RecruitContentDDay = styled.p`
    position: absolute;
    font-size: 1.6rem;
    font-weight: 500;
    right: 2.5rem;
    bottom: calc(3rem);
`;
