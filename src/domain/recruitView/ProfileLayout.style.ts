import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const ProfileLayoutContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: end;

    p {
        padding: 0.5rem;
    }

    .nickname {
        font-weight: 700;
        font-size: 1.2rem;
    }
    .level {
        font-weight: 300;
        font-size: 0.7rem;
        padding: 0rem;
        text-align: end;
    }
    .day {
        font-weight: 400;
    }
`;

export const ProfileImg = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    background-color: ${themes.colors.gray_500};
`;
