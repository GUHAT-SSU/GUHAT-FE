import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const InputFiledContainer = styled.textarea`
    width: 100%;
    overflow: auto;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
    :focus {
        outline: none;
    }
    text-align: left;
    font-size: 1.4rem;
    border-radius: 1rem;
    padding: 1rem;
    border: 2px solid ${themes.colors.gray_500};
    font-size: 1rem;
    resize: none;
    .scroll::-webkit-scrollbar {
        display: none;
    }
`;

const inputTextArea = ({
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
            placeholder={hint}
            value={text}
            onChange={(e) => {
                handler(e.target.value);
            }}
        />
    );
};

export default inputTextArea;
