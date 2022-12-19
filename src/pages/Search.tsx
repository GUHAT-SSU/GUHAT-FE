import MainLayout from "@/components/Layout/MainLayout";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResultLayout from "../domain/search/Layout/SearchResultLayout";

const Search = () => {
    const location = useLocation();

    const [keyword, setKeyword] = useState<string>("");
    const [option, setOptoin] = useState("");

    useEffect(() => {
        const queryData = QueryString.parse(location.search, {
            ignoreQueryPrefix: true,
        });

        if (queryData.keyword) setKeyword(queryData.keyword.toString());

        if (queryData.option) setOptoin(queryData.option.toString());
    }, [keyword, location]);

    return (
        <>
            <MainLayout>
                <SearchResultLayout
                    option={option}
                    keyword={keyword ? keyword : ""}
                ></SearchResultLayout>
            </MainLayout>
        </>
    );
};

export default Search;
