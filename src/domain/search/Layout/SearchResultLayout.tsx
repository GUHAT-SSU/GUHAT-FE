import { useKeywordResults } from "@/apis/search/keyword";
import LectureItem from "@/components/Lecture/LectureItem";
import ProfileSearchItem from "@/components/Profile/ProfileSearchItem";
import SearchResultTab from "@/components/Tab/SearchResultTab/SearchResultTab";
import { errorState, loadingState } from "@/storage/recoil/loadingState";
import SearchIcon from "@assets/Search.svg";
import lottie from "lottie-web";
import { useRef } from "react";
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
    const loadingRef = useRef(null);

    const { status, data } = useKeywordResults(keyword, option);
    lottie.loadAnimation({
        container: loadingRef.current!!,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../../assets/loading.json"),
    });
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

    setLoading(status !== "success");

    const getFetchData = () => {
        if (status === "loading") {
            return (
                <ResultContainer>
                    <div className="loading-img" ref={loadingRef}></div>
                </ResultContainer>
            );
        } else if (status === "error") {
            setError(status);
        } else {
            return (
                <ResultContainer>
                    <ResultTitleWrap>
                        <img src={SearchIcon} alt="??????" />
                        <p> {option} </p>
                        <p className="keyword"> "{keyword}"</p>
                        <p> ??? ?????? ?????? ??????</p>
                    </ResultTitleWrap>

                    {option !== "??????" ? (
                        <>
                            <SearchResultTab
                                title={"??????"}
                                count={data ? data.length : 0}
                            />
                            <ResultItemListWrapper>
                                {option !== "??????" && data
                                    ? data
                                          .map((item: any, index: number) => {
                                              return (
                                                  <LectureItem
                                                      {...lectureMapper(item)}
                                                      clickListener={() => {
                                                          navigator(
                                                              "/lecture/" +
                                                                  item.id
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
                                    ?????????
                                </ResultMoreButton>
                            </ResultItemListWrapper>{" "}
                        </>
                    ) : null}
                    <>
                        {option === "??????" ? (
                            <>
                                <SearchResultTab
                                    title={"?????????"}
                                    count={data ? data.length : 0}
                                />
                                <ResultItemListWrapper>
                                    {data.map((p: any) => {
                                        return (
                                            <>
                                                <ProfileSearchItem {...p} />
                                            </>
                                        );
                                    })}{" "}
                                </ResultItemListWrapper>
                            </>
                        ) : null}
                    </>
                </ResultContainer>
            );
        }
    };
    const moveToLectureDetail = () => {
        navigator(`/search/detail?keyword=${keyword}&option=${option}`);
    };

    return <>{getFetchData()}</>;
};

export default SearchResultLayout;
