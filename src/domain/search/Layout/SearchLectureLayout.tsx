import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { errorState, loadingState } from "@/storage/recoil/loadingState";
import SearchIcon from "@assets/Search.svg";
import LectureItem from "@components/Lecture/LectureItem";

import { useKeywordResults } from "@/apis/search/keyword";
import QueryString from "qs";
import {
    ResultItemContentWrapper,
    ResultItemListWrapper,
    ResultTitleWrap,
} from "./SeachResultLayout.style";

interface Props {
    lectureName: string;
}

const SearchLectureLayout = ({ lectureName }: Props) => {
    const location = useLocation();
    const [loading, setLoading] = useRecoilState(loadingState);
    const [error, setError] = useRecoilState(errorState);

    const [keyword, setKeyword] = useState<string>("");
    const [option, setOptoin] = useState("");
    const { status, data } = useKeywordResults(keyword, option);

    useEffect(() => {
        const queryData = QueryString.parse(location.search, {
            ignoreQueryPrefix: true,
        });

        if (queryData.keyword) setKeyword(queryData.keyword.toString());

        if (queryData.option) setOptoin(queryData.option.toString());
        console.log(keyword);
    }, [keyword, location]);

    const lectureMapper = (data: any) => {
        return {
            id: data.id,
            title:
                data.name +
                `${
                    data.group
                        ? data.name.includes(data.group)
                            ? ""
                            : data.group.slice(0, data.group.length)
                        : ""
                }`,
            professor: data.professor?.join(),
            year: data.year,
            semester: data.semester,
            time: data.schedule
                ? data.schedule.map((s: any) => `${s.day} ${s.time}`)
                : [],
            place: data.schedule ? data.schedule[0].place : "",
        };
    };

    const navigator = useNavigate();

    useEffect(() => {
        getFetchData();
    }, []);
    console.log(data);
    const getFetchData = () => {
        if (status === "loading") {
            setLoading(true);
        } else if (status === "error") {
            setError(status);
        } else {
            setLoading(false);
            return (
                <>
                    {data ? (
                        <ResultItemListWrapper>
                            <ResultTitleWrap>
                                <img src={SearchIcon} alt="검색" />
                                <p className="keyword"> "{lectureName}"</p>
                                <p>에 대한 검색 결과</p>
                            </ResultTitleWrap>
                            <ResultItemContentWrapper>
                                {data.map((item: any, idx: number) => {
                                    return (
                                        <LectureItem
                                            {...lectureMapper(item)}
                                            clickListener={() => {
                                                navigator(
                                                    "/lecture/" + item.id
                                                );
                                            }}
                                        />
                                    );
                                })}
                            </ResultItemContentWrapper>
                        </ResultItemListWrapper>
                    ) : null}{" "}
                </>
            );
        }
    };

    return <>{getFetchData()}</>;
};

export default SearchLectureLayout;
