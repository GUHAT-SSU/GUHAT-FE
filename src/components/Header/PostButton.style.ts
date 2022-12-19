import styled from "@emotion/styled";
import themes from "@styles/themes";

export const PostBtnWrap = styled.button`
    background: white;
    color: ${themes.colors.black_500};
    border-radius: 20px;
    border: 1px solid black;
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
    padding: 0.9rem 1rem;
    gap: 0.5rem;
    margin: 0.25rem;

    p {
        line-height: 100%;
        text-align: center;
        font-size: 1.3rem;
    }

    img {
        height: 1.2rem;
        filter: brightness(0) saturate(100%) invert(68%) sepia(0%)
            saturate(943%) hue-rotate(172deg) brightness(91%) contrast(90%);
    }

    :active {
        filter: brightness(0.8);
    }
    :hover {
        /// background: linear-gradient(103.01deg, #0f3472 12.26%, #303644 59.38%);
        background-color: ${themes.colors.black_500};
        color: white;
    }
`;
