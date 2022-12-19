import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useKeywordResults } from "../../apis/search/keyword/index";

import RecomandKeywords from "./RecomandKeywords";
import {
    SearchInput,
    SearchKeyword,
    SearchKeywordOption,
    SearchWrap,
} from "./SearchBar.style";
import SearchResult from "./SearchResult";

import { debounce } from "@/util/debounce";
import SearchIcon from "@assets/Search.svg";
import { useRecoilState } from "recoil";
import { keywordState } from "../../storage/recoil/keywordState";

const SearchBar = () => {
    const navigator = useNavigate();
    const inputRef: React.RefObject<HTMLDivElement> = useRef(null);

    const options = ["수업명", "교수님", "스택"];

    const [active, setActive] = useRecoilState(keywordState);
    const [option, setOption] = useState(options[0]);

    const [search, setSearch] = useState<string>("");
    const [apiQuery, setApiQuery] = useState<string>("");
    const [searchResult, setSeachResult] = useState<string[] | null>([]);
    const [submitted, setSubmitted] = useState<boolean>(true);
    const [keywordList, setKeywordList] = useState<string[]>([
        "리액트",
        "Django",
        "Springboot",
        "Figma",
        "영어회화",
    ]);

    const [LecturekeywordList, setLectureKeywordList] = useState<string[]>([
        "캡스톤디자인",
        "독서와토론",
        "사용자인터페이스",
        "창의적공학설계",
        "기업가의정신",
    ]);

    const { status, data } = useKeywordResults(apiQuery, option);

    useEffect(() => {
        document.addEventListener("mousedown", clickInputOutside);

        return () => {
            document.removeEventListener("mousedown", clickInputOutside);
        };
    });

    useEffect(() => {
        if (submitted) {
            setActive(false);
        }
    }, [submitted]);

    useEffect(() => {
        optionHandler(search);
    }, [option]);

    const clickInputOutside = (event: any) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            //setActive(false);
            setSubmitted(true);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => {
            moveToResultPage(search);
        }, 200);
    };

    const handleReset = () => {
        setSeachResult([]);
        setSubmitted(false);
        setSearch("");
    };

    const optionHandler = (op: string) => {
        moveToResultPage(search);
        setSubmitted(true);
        // setSearch("");
    };

    const onDebouncedChangeListener = debounce(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("action", e.target.value);
            if (e.target.value !== "") setApiQuery(e.target.value);
        },
        300
    );

    const callApi = useCallback(onDebouncedChangeListener, []);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.value.length <= 0 && submitted) {
            return handleReset();
        }
        setSearch(e.target.value);
        callApi(e);
    };

    const moveToResultPage = (searchKeyword: string) => {
        console.log("move page", searchKeyword);
        setSearch(searchKeyword);

        if (searchKeyword !== "") {
            if (searchKeyword.includes("/"))
                navigator(
                    `/search?keyword=${encodeURIComponent(
                        searchKeyword.substring(
                            0,
                            searchKeyword.indexOf("/") - 1
                        )
                    )}&option=${option}`
                );
            else {
                navigator(
                    `/search?keyword=${encodeURIComponent(
                        searchKeyword
                    )}&option=${option}`
                );
            }
        }

        setSubmitted(true);
    };

    const getDataByStatus = () => {
        switch (status) {
            case "loading":
                return <div>Loading</div>;
            case "error":
                return <span>Error: {status}</span>;
            default: {
                return (
                    <>
                        {option !== "스택" &&
                        search.length !== 0 &&
                        !submitted ? (
                            <SearchResult
                                list={data.map(
                                    (d: any) =>
                                        `${
                                            d.name.length > 20
                                                ? d.name.substring(0, 19) +
                                                  "..."
                                                : d.name
                                        } /  ${d.professor}`
                                )}
                                keyword={search}
                                clickListener={moveToResultPage}
                                closeListener={() => {
                                    setSubmitted(true);
                                }}
                            />
                        ) : null}
                    </>
                );
            }
        }
    };

    return (
        <>
            <SearchKeyword
                active={active}
                onClick={() => {
                    setActive((prev) => !prev);
                }}
            >
                {option}
            </SearchKeyword>
            {active ? (
                <SearchKeywordOption>
                    {options.map((op, index) => {
                        return (
                            <li
                                key={op}
                                onClick={(e: any) => {
                                    setOption(e.target.innerText);
                                    setActive((prev) => !prev);
                                }}
                            >
                                {op}
                            </li>
                        );
                    })}{" "}
                </SearchKeywordOption>
            ) : null}

            <SearchWrap isFocused={!submitted} ref={inputRef}>
                {!submitted && search.length === 0 ? (
                    <RecomandKeywords
                        keywords={
                            option === "스택" ? keywordList : LecturekeywordList
                        }
                        clickListener={(keyword) => {
                            moveToResultPage(keyword);
                        }}
                        closeListener={() => {
                            setSubmitted(true);
                        }}
                    />
                ) : null}
                {data ? getDataByStatus() : null}

                <form
                    style={{ width: "100%", position: "relative" }}
                    onSubmit={(event) => handleSubmit(event)}
                    onReset={() => handleReset()}
                >
                    <SearchInput
                        placeholder="Search"
                        value={search ? search : ""}
                        onChange={inputHandler}
                        onFocus={(e) => {
                            setSubmitted(false);
                        }}
                    />
                </form>

                <img
                    alt="검색"
                    className="header-search"
                    src={SearchIcon}
                    onClick={() => (search ? moveToResultPage(search) : null)}
                />
            </SearchWrap>
        </>
    );
};

export default SearchBar;
