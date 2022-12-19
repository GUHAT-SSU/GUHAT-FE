import styled from "@emotion/styled";
import PersonalitBg from "../../../assets/personality_bar.svg";
export const PersonalityContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    p {
        width: calc(((100%) - 20rem) / 2);
        text-align: center;
    }
`;
export const PersonalityWrapper = styled.div`
    position: relative;
    display: flex;
    width: 18rem;
    align-items: center;
    height: 3rem;
    background-image: url(${PersonalitBg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    .top {
        position: absolute;
        width: 47px;
        height: 11px;
        left: 0;
        border: 3px solid #838383;
        background-color: gray;
    }

    .bottom {
        position: absolute;
        width: 41.5px;
        height: 0px;
        left: 0;
        border: 3px solid #838383;
        background-color: gray;
    }

    .line-item {
        position: relative;
        width: 4rem;
        height: 2rem;
        background-color: red;
    }
`;

const setProgress = (progress: number) => {
    switch (progress) {
        case 0:
            return "transform: translate(0.21rem, -50%);";
        case 1:
            return "transform: translate(5.65rem, -50%);";
        case 2:
            return "transform: translate(11.05rem, -50%);";
        case 3:
            return "transform: translate(16.5rem, -50%)";
        default:
            return "transform: translate(0.21rem, -50%);";
    }
};

export const CheckItem = styled.button<{ progress: number; checked: boolean }>`
    position: absolute;
    top: 50%;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 3rem;
    background-color: ${({ checked }) => (checked ? `#FFBB91` : `white`)};
    background-image: none;
    :disabled {
        opacity: 1;
    }
    ${({ progress }) => setProgress(progress)}
`;
