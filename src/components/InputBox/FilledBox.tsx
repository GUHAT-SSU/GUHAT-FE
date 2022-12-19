import { FilledBoxWrap } from "./FilledBox.style";

interface Props {
    text: string;
    mode?: string;
}

const FilledBox = ({ text, mode }: Props) => {
    return <FilledBoxWrap mode={mode}>{text}</FilledBoxWrap>;
};

export default FilledBox;
