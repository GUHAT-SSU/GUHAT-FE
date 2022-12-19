import {
    ResultTabContainer,
    ResultTabCount,
    ResultTabTitle,
    ResultTabWrap,
} from "./SearchResultTab.style";

interface Props {
    title: string;
    count: number;
}
const SearchResultTab = ({ title, count }: Props) => {
    return (
        <ResultTabContainer>
            <ResultTabWrap>
                <ResultTabTitle>{title}</ResultTabTitle>
                <ResultTabCount>{count}</ResultTabCount>
            </ResultTabWrap>
        </ResultTabContainer>
    );
};

export default SearchResultTab;
