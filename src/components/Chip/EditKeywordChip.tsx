import { useEffect, useState } from "react";
import { EditChipContainer } from "./EditKeywordChip.style";

import CloseIcon from "@assets/close.svg";
interface Props {
    mode: string;
    text: string;
    inputValue: string;
    submitHandler: (input: string) => void;
    inputHandler: (input: string) => void;
    deleteHandler: (keyword: string) => void;
}

const EditKeywordChip = ({
    mode,
    text,
    inputValue,
    submitHandler,
    inputHandler,
    deleteHandler,
}: Props) => {
    const [status, setStatus] = useState(mode);
    const [input, setInput] = useState(inputValue);
    const submit = (key: string) => {
        submitHandler(key);
        setInput("");
    };
    useEffect(() => {}, [inputValue]);
    return (
        <EditChipContainer status={status}>
            {status === "active" ? (
                <input
                    value={inputValue}
                    onKeyUp={(e) =>
                        e.keyCode === 13 ? submit(inputValue) : null
                    }
                    onChange={(e) => {
                        e.preventDefault();
                        inputHandler(e.target.value);
                        setInput(e.target.value);
                    }}
                ></input>
            ) : (
                <>
                    <button
                        onClick={(e: any) => {
                            alert(text);
                            deleteHandler(text);
                        }}
                    >
                        {text}
                        <img
                            className="close-icon"
                            src={CloseIcon}
                            alt="닫기"
                        />
                    </button>
                </>
            )}
        </EditChipContainer>
    );
};

export default EditKeywordChip;
