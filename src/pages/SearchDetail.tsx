import { useKeywordResults } from "@/apis/search/keyword";
import BackArrowBtn from "@/components/Button/BackArrow";
import MainLayout from "@/components/Layout/MainLayout";
import { StickBackBtn } from "@/domain/recruitView/RecruitViewLayout.style";
import SearchLectureLayout from "@/domain/search/Layout/SearchLectureLayout";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchDetail = () => {
    const location = useLocation();
    const [keyword, setKeyword] = useState("");
    const [option, setOption] = useState("");

    const { status, data } = useKeywordResults(keyword, option);

    useEffect(() => {
        const queryData = QueryString.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        if (queryData.keyword) setKeyword(queryData.keyword.toString());
        else setKeyword("");
        if (queryData.option) setOption(queryData.option.toString());
    }, [keyword, location]);
    useEffect(() => {}, [keyword]);
    return (
        <>
            <StickBackBtn>
                <BackArrowBtn
                    clickListener={() => {
                        window.history.back();
                    }}
                />
            </StickBackBtn>
            <MainLayout>
                <>
                    {status === "success" ? (
                        <SearchLectureLayout
                            lectureName={keyword ? keyword : "검색결과 없음"}
                        />
                    ) : null}
                </>
            </MainLayout>
        </>
    );
};

export default SearchDetail;
