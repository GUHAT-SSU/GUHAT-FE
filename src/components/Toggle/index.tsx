import themes from "@/styles/themes";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
const Wrapper = styled.div`
    position: relative;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const ToggleBtn = styled.button<{ toggle?: boolean }>`
    width: 8.6rem;
    height: 2rem;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
    background-color: #c6c6c6;
    background-color: ${(props) =>
        props.toggle ? `${themes.colors.blue_500}90` : " #c6c6c660"};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;

    .state {
        transition: all 0.5s ease-in-out;
        color: white;
        font-weight: 600;
        font-size: 0.8rem;
    }
    .on {
        margin-right: 2rem;
    }
    .off {
        margin-left: 1.6rem;
    }
`;
const Circle = styled.div<{ toggle?: boolean }>`
    background-color: white;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 2rem;
    position: absolute;
    left: 5%;
    transition: all 0.5s ease-in-out;
    ${(props) =>
        props.toggle &&
        css`
            transform: translate(6.2rem, 0);
            transition: all 0.5s ease-in-out;
        `}
`;

const Toggle = ({
    listener,
    init,
}: {
    listener: (state: boolean) => void;
    init: boolean;
}) => {
    const [toggle, setToggle] = useState(init);
    const clickedToggle = () => {
        listener(!toggle);
        setToggle((prev) => !prev);
    };
    return (
        <Wrapper>
            <ToggleBtn onClick={clickedToggle} toggle={toggle}>
                {toggle ? (
                    <p className="on state">이력서 공개</p>
                ) : (
                    <p className="off state">이력서 비공개</p>
                )}

                <Circle toggle={toggle} />
            </ToggleBtn>
        </Wrapper>
    );
};

export default Toggle;
