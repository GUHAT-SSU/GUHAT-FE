import Edit from "@assets/edit.svg";
import styled from "@emotion/styled";
import { useState } from "react";
export const EditBtnContainer = styled.button<{ saveMode?: boolean }>`
    border: 1px solid black;
    color: black;
    border-radius: 0.6rem;
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
    img {
        margin-left: 0.3rem;
        width: 1rem;
    }

    ${({ saveMode }) =>
        !saveMode
            ? ` background-color: black;  color: white;   img {
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
                saturate(0%) hue-rotate(131deg) brightness(105%) contrast(102%);
        }`
            : `background-color: white; color: black;`};

    :hover,
    :active {
        ${({ saveMode }) =>
            saveMode
                ? `translate: scale(1.1);`
                : ` background-color: black;  color: white;  img {
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
                saturate(0%) hue-rotate(131deg) brightness(105%) contrast(102%);
        }`}
    }
    :active {
        filter: brightness(0.8);
    }
`;

const EditButton = ({
    clickListener,
    saveMode,
}: {
    clickListener?: () => void;
    saveMode?: boolean;
}) => {
    const [saveStatus, setSaveMode] = useState(saveMode);
    return (
        <EditBtnContainer
            saveMode={saveStatus}
            onClick={() => {
                if (saveMode) setSaveMode((prev) => !prev);
                clickListener?.();
            }}
        >
            {saveStatus !== undefined && !saveStatus ? "저장하기" : "수정하기"}
            <img src={Edit} />
        </EditBtnContainer>
    );
};

export default EditButton;
