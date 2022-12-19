import KeywordChip from "../Chip/KeywordChip";
import {
    RecomandkeywordList,
    RecomandkeywordsWrapper,
} from "./RecomandKeywords.style";

interface Props {
    keywords?: string[];
    clickListener?: (keyword: string) => void;
    closeListener?: () => void;
}

const RecomandKeywords = ({
    keywords,
    clickListener,
    closeListener,
}: Props) => {
    return (
        <RecomandkeywordsWrapper>
            <h1>추천 검색어</h1>
            <RecomandkeywordList>
                {keywords
                    ? keywords.map((keyword, idx) => {
                          return (
                              <KeywordChip
                                  key={idx}
                                  keyword={keyword}
                                  clickListener={clickListener}
                              ></KeywordChip>
                          );
                      })
                    : null}
            </RecomandkeywordList>
            <hr />
            <button className="close-btn" onClick={closeListener}>
                닫기
            </button>
        </RecomandkeywordsWrapper>
    );
};

export default RecomandKeywords;
