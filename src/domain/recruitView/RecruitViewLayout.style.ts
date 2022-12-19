import themes from "@/styles/themes";
import styled from "@emotion/styled";
export const RecruitViewContainer = styled.div`
    width: 100%;
    padding: 3rem 0rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title-wrapper {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
    }
    .title {
        font-weight: 700;
        font-size: 2.3rem;
        padding: 0 5rem;
        padding-right: 1rem;
    }

    .content {
        padding: 2rem 5rem;
    }

    .subtitle {
        font-weight: 600;
        font-size: 2rem;
        padding: 3rem 6rem;
        padding-right: 2rem;
    }

    .text-content {
        font-size: 1.4rem;
        padding: 0 7rem;
        line-height: 2rem;
        padding-bottom: 3rem;
    }
`;

export const StickBackBtn = styled.div`
    /* @supports (position: sticky) or (position: -webkit-sticky) {
      
    } */
    position: -webkit-sticky; /* 사파리 브라우저 지원 */
    position: sticky;
    top: 10rem;
    padding-left: 5rem;
    z-index: 1;
`;

export const StickRecruitkBtn = styled.button`
    /* @supports (position: sticky) or (position: -webkit-sticky) {
      
    } */
    position: -webkit-sticky; /* 사파리 브라우저 지원 */
    position: sticky;
    bottom: 3rem;
    left: calc(50% - 6rem);
    width: 12rem;
    color: white;
    border-radius: 2rem;
    text-align: center;
    font-weight: 600;
    padding: 1rem;
    font-size: 1.3rem;
    background: #303644;

    :hover {
        background-color: ${themes.colors.blue};
        color: white;
        transform: scale(1.05);
        :disabled {
            background: #303644;
            color: white;
            transform: scale(1);
        }
    }

    :active {
        filter: brightness(0.8);
    }

    :disabled {
        opacity: 0.5;
    }
`;

export const CloseRecruitBtn = styled.button`
    border-radius: 1rem;
    background-color: ${themes.colors.black_500};
    color: white;
    padding: 0.7rem 1.5rem;
    :active,
    :hover {
        background-color: ${themes.colors.blue};
    }
`;
