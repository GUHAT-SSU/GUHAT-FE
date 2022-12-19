import themes from "@/styles/themes";
import styled from "@emotion/styled";
export const RecruitViewInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;

    .recruit-info-content {
        min-width: 50%;
        max-width: 50%;
        padding: 1.5rem;
        display: flex;
        gap: 1rem;
        align-items: center;
    }
`;

export const RecruitViewInfoGroup = styled.div`
    display: flex;
    width: 50%;
    justify-content: left;
    align-items: left;
    padding-left: 1.5rem;
    p {
        min-width: 5rem;
        color: ${themes.colors.gray_700};
        font-weight: 500;
        font-size: 1.3rem;
        padding-top: 1rem;
    }

    .recruit-info-group {
        display: flex;
        flex-direction: column;
        padding: 0 1.5rem;
        gap: 1rem;
    }

    .recruit-info-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        h1 {
            font-size: 1.3rem;
            font-weight: 700;
        }
    }
`;

export const RecruitViewNowInfo = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;
