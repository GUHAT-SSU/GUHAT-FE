import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const InputFiledContainer = styled.input`
    width: 100%;
    display: flex;

    justify-content: left;
    align-items: center;
    gap: 1rem;
    text-align: left;
    font-size: 1.4rem;
    border-radius: 1rem;
    padding: 1rem;
    border: 2px solid ${themes.colors.gray_500};
    font-size: 1rem;
`;

const InputFiled = ({
    text,
    handler,
    hint,
    type,
}: {
    text: string;
    hint?: string;
    type?: string;

    handler: (e: string) => void;
}) => {
    return (
        <InputFiledContainer
            type={type}
            placeholder={hint}
            value={text}
            onChange={(e) => {
                handler(e.target.value);
            }}
        />
    );
};

export default InputFiled;
