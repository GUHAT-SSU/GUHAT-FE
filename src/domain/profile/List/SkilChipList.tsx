import { useEffect, useState } from "react";

import Plus from "@/assets/plus.svg";
import EditKeywordChip from "@/components/Chip/EditKeywordChip";
import SkillChip from "@/components/Chip/SkillChip";
import themes from "@/styles/themes";
import styled from "@emotion/styled";

const ChipLayout = styled.div`
    flex-wrap: wrap;
    display: flex;
    gap: 0.8rem;
`;

const AddButton = styled.button`
    border-radius: 1rem;
    width: 3rem;
    height: 2.6rem;

    background: url(${Plus}) no-repeat;
    background-color: ${themes.colors.black_500};
    background-position: center;
`;

interface Props {
    mode: number;
    list: string[];
    handler?: (list: any[]) => void;
}

const ChipList = ({ mode, list, handler }: Props) => {
    const [skills, setSkills] = useState(list); //실데이터
    const [input, setInput] = useState("");

    useEffect(() => {
        setInput("");
        handler?.(skills);
    }, [skills]);

    const addListener = (keyword: string) => {
        setInput("");
        const newArray = [...skills];
        newArray.push(keyword);
        setSkills(newArray);
    };

    const deleteListener = (keyword: string) => {
        const newArray = [...skills].filter(
            (k: string) => k !== keyword && k !== ""
        );
        setSkills(newArray);
        // handler?.(newArray);
    };

    return (
        <ChipLayout>
            {mode === 0 ? (
                skills.map((i) => <SkillChip text={i} />)
            ) : (
                <>
                    {skills.map((i) => (
                        <EditKeywordChip
                            mode="end"
                            text={i}
                            inputValue={i}
                            submitHandler={(key) => {
                                addListener(key);
                            }}
                            inputHandler={(key) => {
                                setInput(key);
                            }}
                            deleteHandler={(key) => {
                                deleteListener(key);
                            }}
                        />
                    ))}
                    <EditKeywordChip
                        mode="active"
                        text={input}
                        inputValue={input}
                        submitHandler={(key) => {
                            if (key !== "") addListener(key);
                        }}
                        inputHandler={(key) => {
                            setInput(key);
                        }}
                        deleteHandler={(key) => {
                            deleteListener(key);
                        }}
                    />
                    <AddButton
                        onClick={() => {
                            if (input !== "") addListener(input);
                        }}
                    ></AddButton>
                </>
            )}
        </ChipLayout>
    );
};

export default ChipList;
