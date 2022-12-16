import { useKeywordResults } from "@/apis/search/keyword";
import LectureItem from "@/components/Lecture/LectureItem";
import SearchResultTab from "@/components/Tab/SearchResultTab/SearchResultTab";
import { errorState, loadingState } from "@/storage/recoil/loadingState";
import SearchIcon from "@assets/Search.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
    ResultContainer,
    ResultItemListWrapper,
    ResultMoreButton,
    ResultTitleWrap,
} from "./SeachResultLayout.style";

interface Props {
    keyword: string;
    option: string;
}

const SearchResultLayout = ({ keyword, option }: Props) => {
    const navigator = useNavigate();
    const [loading, setLoading] = useRecoilState(loadingState);
    const [error, setError] = useRecoilState(errorState);

    const { status, data } = useKeywordResults(keyword, option);

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
            professor: data.professor.join(),
            year: data.year,
            semester: data.semester,
            time: data.schedule
                ? data.schedule.map((s: any) => `${s.day} ${s.time}`)
                : [],
            place: data.schedule ? data.schedule[0].place : "",
        };
    };

    useEffect(() => {
        getFetchData();
    }, []);

    const getFetchData = () => {
        if (status === "loading") {
            setLoading(true);
        } else if (status === "error") {
            setError(status);
        } else {
            setLoading(false);
            return (
                <ResultContainer>
                    <ResultTitleWrap>
                        <img src={SearchIcon} alt="검색" />
                        <p> {option} </p>
                        <p className="keyword"> "{keyword}"</p>
                        <p> 에 대한 검색 결과</p>
                    </ResultTitleWrap>

                    <SearchResultTab
                        title={"강의"}
                        count={data ? data.length : 0}
                    />

                    <ResultItemListWrapper>
                        {data
                            ? data
                                  .map((item: any, index: number) => {
                                      return (
                                          <LectureItem
                                              {...lectureMapper(item)}
                                              clickListener={() => {
                                                  alert("click");
                                                  navigator(
                                                      "/lecture/" + item.id
                                                  );
                                              }}
                                          />
                                      );
                                  })
                                  .slice(0, 6)
                            : null}
                        <ResultMoreButton
                            onClick={() => {
                                moveToLectureDetail();
                            }}
                        >
                            더보기
                        </ResultMoreButton>
                    </ResultItemListWrapper>
                    <SearchResultTab title={"프로필"} count={2} />
                </ResultContainer>
            );
        }
    };
    const moveToLectureDetail = () => {
        console.log("moving here");
        navigator(`/search/detail?keyword=${keyword}&option=${option}`);
    };

    return <>{getFetchData()}</>;
};

export default SearchResultLayout;
