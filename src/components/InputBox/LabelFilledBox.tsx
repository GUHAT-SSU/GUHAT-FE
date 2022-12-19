import FilledBox from "./FilledBox";
import { LabelFilledBoxContainer } from "./LabelFilledBox.style";

interface Props {
    label: string;
    text: string;
}

const LabelFilledBox = ({ label, text }: Props) => {
    return (
        <LabelFilledBoxContainer>
            <p className="label">{label}</p>
            {text !== "undefined" ? <FilledBox text={text} /> : null}
        </LabelFilledBoxContainer>
    );
};

export default LabelFilledBox;
