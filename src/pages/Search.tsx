import MainLayout from "@/components/Layout/MainLayout";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResultLayout from "../domain/search/Layout/SearchResultLayout";

const Search = () => {
    const location = useLocation();

    const [keyword, setKeyword] = useState<string | null>("");

    useEffect(() => {
        const queryData = QueryString.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        if (queryData.keyword) setKeyword(queryData.keyword.toString());
        else setKeyword("");
    }, [keyword, location]);

    return (
        <>
            <MainLayout>
                <SearchResultLayout
                    keyword={keyword ? keyword : ""}
                ></SearchResultLayout>
            </MainLayout>
        </>
    );
};

export default Search;
