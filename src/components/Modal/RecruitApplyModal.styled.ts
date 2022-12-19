import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const RecuitApplyModalContainer = styled.div`
    position: relative;
    padding: 1rem;
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 20vw;
    gap: 2rem;
    h1 {
        font-weight: 500;
        font-size: 1.5rem;
    }

    .modal-close-btn {
        position: absolute;
        width: 1rem;
        height: 1rem;
        top: 0;
        right: 0;
        background-repeat: no-repeat;
        background-size: contain;
    }
`;

export const RecruitApplyGroupItem = styled.button`
    position: relative;
    width: 100%;
    border-radius: 1rem;
    /* background-color: ${themes.colors.gray_500};
    color: black; */
    border: 2px solid #448ef6;
    color: #448ef6;
    padding: 1rem;

    .modal-check-img {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translate(-1rem, -50%);
        width: 2rem;
        height: 2rem;
        background-repeat: no-repeat;
        background-size: contain;
    }

    :disabled {
        background-color: #448ef6;
        color: white;
        opacity: 1;
    }
`;

export const RecruitApplyButton = styled(RecruitApplyGroupItem)`
    margin-top: 1.5rem;
    background-color: ${themes.colors.black_500};
    border: none;
    color: white;

    :disabled {
        background-color: ${themes.colors.black_500};
        opacity: 0.8;
    }
`;
