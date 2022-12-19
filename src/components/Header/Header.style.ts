import styled from "@emotion/styled";
const HeaderWrap = styled.header`
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    align-items: center;
    z-index: 70;
    margin: 0 0 0 -2.4rem;
    background-color: white;
    padding: 0 2.4rem;
    width: calc(100% + 2.4rem);
    height: 7rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    /* #header-schedule-btn {
        position: absolute;
        right: 9.5rem;
        transform: translate(-9.5rem, 0);
        height: 60%;
    }

    #header-profile-btn {
        position: absolute;
        right: 13rem;
        transform: translate(-13rem);
        height: 60%;
    } */
`;

const Title = styled.button`
    position: absolute;
    left: 5rem;
    transform: translate(5rem);
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 400;
`;

export const IconWrapper = styled.div`
    display: flex;
    height: 3.5rem;
    gap: 1.5rem;
    position: absolute;
    right: 2rem;
    transform: translate(-2rem);

    button:active {
        filter: brightness(0.9);
    }
`;

export const HeaderIcon = styled.button<{ img: string }>`
    height: 3.5rem;
    width: 3.5rem;
    background-image: ${(props) => (props.img ? `url(${props.img})` : null)};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    :active {
        filter: brightness(0.6);
    }
`;

export { HeaderWrap, Title };
