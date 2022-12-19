import { KeywordChipWrapper } from "./KeywordChip.style";
interface Props {
    keyword?: string;
    clickListener?: (keyword: string) => void;
}
const KeywordChip = ({ keyword, clickListener }: Props) => {
    return (
        <KeywordChipWrapper
            onClick={() =>
                keyword && clickListener ? clickListener(keyword) : null
            }
        >
            {keyword}
        </KeywordChipWrapper>
    );
};

export default KeywordChip;
