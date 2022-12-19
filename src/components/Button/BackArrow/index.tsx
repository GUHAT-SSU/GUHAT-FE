import themes from "@/styles/themes";
import BackArrow from "@assets/back_arrow.svg";
import styled from "@emotion/styled";

const BtnWrap = styled.button`
    background-color: white;
    border: 2px solid #e6e6ee;
    border-radius: 1.5rem;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    width: 4rem;
    height: 4rem;
    img {
        width: 60%;
    }
    :active {
        filter: brightness(0.8);
    }

    :hover {
        img {
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
                saturate(0%) hue-rotate(131deg) brightness(105%) contrast(102%);
        }
        background-color: ${themes.colors.black_500};
    }
`;

interface Props {
    clickListener?: () => void;
}

const BackArrowBtn = ({ clickListener }: Props) => {
    return (
        <BtnWrap onClick={clickListener}>
            <img src={BackArrow} alt="뒤로가기" />
        </BtnWrap>
    );
};

export default BackArrowBtn;
