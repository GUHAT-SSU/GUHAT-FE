import SearchIcon from "@/assets/Search.svg";
import { SearchResultItem, SearchResultWrapper } from "./SearchResult.style";

interface Props {
    list: string[] | null;
    keyword?: string | undefined;
    clickListener: (keyword: string) => void;
    closeListener?: () => void;
}
const SearchResult = ({
    list,
    keyword,
    clickListener,
    closeListener,
}: Props) => {
    const texts = document.querySelectorAll(".text");

    return (
        <SearchResultWrapper>
            {list && keyword && list.length > 0 ? (
                list.map((result, idx) => {
                    return (
                        <SearchResultItem
                            key={result + idx}
                            onClick={() => {
                                console.log(
                                    "kye",
                                    result.slice(
                                        0,
                                        result.indexOf("...") !== -1
                                            ? result.indexOf("...")
                                            : result.indexOf("/")
                                    )
                                );
                                clickListener(
                                    result.slice(
                                        0,
                                        result.indexOf("...") !== -1
                                            ? result.indexOf("...")
                                            : result.indexOf("/")
                                    )
                                );
                            }}
                        >
                            {" "}
                            <img src={SearchIcon} alt="검색" id="search-icon" />
                            <div
                                className="result-item"
                                style={{ width: "80%" }}
                            >
                                <span>
                                    {result.substring(
                                        0,
                                        result.indexOf(keyword) - 1
                                    )}
                                </span>
                                <span className="search-key">
                                    {result.substring(
                                        result.indexOf(keyword),
                                        result.indexOf(keyword) + keyword.length
                                    )}
                                </span>
                                <span>
                                    {result.substring(
                                        result.indexOf(keyword) + keyword.length
                                    )}
                                </span>
                            </div>
                        </SearchResultItem>
                    );
                })
            ) : (
                <li id="search-empty">검색결과 없음</li>
            )}
            <hr />
            <button className="close-btn" onClick={closeListener}>
                닫기
            </button>
        </SearchResultWrapper>
    );
};

export default SearchResult;
