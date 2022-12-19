import LoginImg from "@/assets/login_main.png";
import themes from "@/styles/themes";
import styled from "@emotion/styled";
export const LandingLayout = styled.div`
    position: absolute;
    width: calc(100% + 10rem);
    height: calc(100vh + 7rem);
    background-color: blue;
    left: -10rem;
    top: -7rem;
`;

export const LandingBgLayout = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    background-color: red;
    width: 70%;
    height: calc(100vh + 7rem);
    background: linear-gradient(142.62deg, #303644 0%, #0f3472 100%);
    color: white;
    .logo-title {
        position: absolute;
        top: 45vh;
        color: white;
        margin-left: 20rem;
        font-size: 5rem;
        font-weight: 600;
    }
    .logo-subtitle {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 60vh;
        color: white;
        margin-left: 20rem;
        font-size: 2rem;
        font-weight: 400;
        gap: 0.5rem;
    }
    .logo-button {
        position: absolute;
        top: 73vh;
        border: 1px solid white;
        padding: 0.8rem 2rem;
        border-radius: 2rem;
        color: white;
        margin-left: 20rem;
        font-size: 0.9rem;
        background: none;
        :hover {
            background-color: white !important;
            color: ${themes.colors.black_500};
        }
    }
`;

export const LoginFormLayout = styled.div`
    position: absolute;
    right: 0;
    background-color: white;
    width: 38%;
    height: calc(100vh + 7rem);
    padding-top: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    h1 {
        font-size: 1.3rem;
    }
`;

export const LoginImgLayout = styled.div`
    position: absolute;
    bottom: 0rem;
    width: 50%;
    height: 30rem;
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${LoginImg});
`;
