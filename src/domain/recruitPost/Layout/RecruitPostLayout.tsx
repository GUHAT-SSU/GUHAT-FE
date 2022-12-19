import {
    loadSchedule,
    requestSchedule,
    submitPosting,
} from "@/apis/recruit/post";
import MainButton from "@/components/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import InputFiled from "@/components/InputBox/InputFiled";
import { StickRecruitkBtn } from "@/domain/recruitView/RecruitViewLayout.style";
import { loadingMessage, loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import { requestPosting } from "@/types/posting.type";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
    RecruitAddbtn,
    RecruitContentLayout,
    RecruitContentProgress,
    RecruitDrowdownWrapper,
    RecruitGroupFlexWrapper,
    RecruitGroupWrapper,
    RecruitPostLayoutContainer,
    RecruitPostTitle,
} from "./RecruitPostLayout.style";

const RecruitPostLayout = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [loadingMsg, setLoadingMsg] = useRecoilState(loadingMessage);
    const navigator = useNavigate();
    const scheduleParseer = (data: any[]) => {
        const result = data.reduce((acc: any, v: any) => {
            return acc.find((x: any) => x.name === v.name) ? acc : [...acc, v];
        }, []);
        if (result.length !== 0) {
            let code: any[] = [];
            let lectures: any[] = [];
            result.map((lec: any, i: number) => {
                if (lec.lecture_id !== null) {
                    code.push(lec.lecture_id);
                    lectures.push(`${lec.name} / ${lec.professor}`);
                }
            });

            setLectureCode(code);
            setMyLectureList(lectures);
        } else {
            setLecture({ index: -1, item: "수강 중인 강의가 없습니다" });
        }
    };

    useEffect(() => {
        loadSchedule().then((res) => {
            setLoading(false);
            console.log(res.data.data);
            const data = res.data.data;

            if (data.length > 0) scheduleParseer(data);
        });

        setModalVisible(false);
    }, []);

    const [myLectureList, setMyLectureList] = useState<any[]>([]);
    const [lectureCode, setLectureCode] = useState<any[]>([]);

    const [postTitle, setPostTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [priority, setPrioirty] = useState("");
    const [link, setLink] = useState("");

    const today = new Date();
    const [lecture, setLecture] = useState<any>({ index: -1, item: "" });
    const [year, setYear] = useState(today.getUTCFullYear().toString());
    const [month, setMonth] = useState((today.getUTCMonth() + 1).toString());
    const [day, setDay] = useState(today.getDate().toString());
    const [duration, setDuration] = useState("1주");

    const [title, setTitle] = useState("공통");
    const [max, setMax] = useState("1");
    const [group, setGroup] = useState<any[]>([{ name: "공통", max: "1" }]);

    const scheduleload = () => {
        setLoadingMsg(
            "최초 시간표 업로드 시 요청 시간이 길어질 수 있습니다..."
        );
        setLoading(true);

        requestSchedule()
            .then((res) => {
                const data = res.data.data;
                if (data.length === 0) {
                    alert("휴학 중인 경우 모집글 작성이 불가능 합니다!");
                    window.history.back();
                }
                setLecture({ index: -1, item: "--선택해주세요--" });
                console.log(res.data.data);
                scheduleParseer(data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const submitClick = () => {
        console.log("submit");
        console.log();
        setLoading(true);
        const body: requestPosting = {
            title: postTitle,
            lecture_id: lectureCode[lecture.index],
            endDate: `${year}-${month}-${day.length < 2 ? "0" + day : day}`,
            period: duration,
            detail: detail,
            priority: priority,
            role: group.filter((g) => g.name !== ""),
            chatLink: link,
        };

        submitPosting({ ...body })
            .then((res) => {
                console.log(res);

                setLoadingMsg("작성완료!");
                setTimeout(() => {
                    setLoading(false);
                    const postId = res.data.postId;
                    console.log("postId", postId);
                    navigator("/recruit/" + postId);
                }, 1000);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const onChangeDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        if (detail.length < 499) setDetail(e.target.value);
    };

    const onChangePrioirty = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        if (priority.length < 99) setPrioirty(e.target.value);
    };

    const onChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (link.length < 99) setLink(e.target.value);
    };

    const onChangeGroup = (_title: string, _max: string, idx: number) => {
        setTitle(_title);
        setMax(max);
        const prev = [...group];
        if (idx < group.length) prev[idx] = { name: _title, max: _max };
        console.log(prev);
        setGroup(prev);
    };

    const onClickAddBtn = () => {
        const prev = [...group].filter((v) => v.name !== "");
        prev.push({ name: "", max: 0 });
        setGroup(prev);
    };

    return (
        <>
            {" "}
            <RecruitPostLayoutContainer>
                <RecruitContentLayout>
                    <RecruitContentProgress isFilled={postTitle.length !== 0} />
                    <RecruitPostTitle
                        placeholder="제목을 입력해주세요"
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                    />
                </RecruitContentLayout>
                <RecruitContentLayout>
                    <RecruitContentProgress
                        isFilled={
                            lecture.item !== "수강 중인 강의가 없습니다" &&
                            lecture.index !== -1
                        }
                    />
                    <RecruitDrowdownWrapper>
                        <p className="label-dropdown">강의 선택</p>
                        {myLectureList.length > 0 ? (
                            <Dropdown
                                width="20rem"
                                selectValue={lecture.item}
                                list={myLectureList}
                                handler={(e) => {
                                    if (e.index === 0) {
                                        console.log(e);
                                    }
                                    setLecture(e);
                                }}
                            />
                        ) : (
                            <MainButton
                                clickListener={() => {
                                    scheduleload();
                                }}
                            >
                                시간표 불러오기
                            </MainButton>
                        )}
                    </RecruitDrowdownWrapper>
                    <RecruitDrowdownWrapper>
                        <p className="label-dropdown">모집 마감</p>
                        <Dropdown
                            width="10rem"
                            selectValue={year}
                            list={[2022, 2023, 2024]}
                            handler={(e) => {
                                setYear(e.item);
                            }}
                        />
                        <p className="label-dropdown"> 년</p>
                        <Dropdown
                            width="8rem"
                            selectValue={month}
                            list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                            handler={(e) => {
                                setMonth(e.item);
                            }}
                        />
                        <p className="label-dropdown"> 월</p>
                        <Dropdown
                            width="8rem"
                            selectValue={day}
                            list={Array.from({ length: 31 }, () => 0).map(
                                (i, index) => index + 1
                            )}
                            handler={(e: any) => {
                                setDay(e.item);
                            }}
                        />
                        <p className="label-dropdown"> 일</p>
                    </RecruitDrowdownWrapper>
                    <RecruitDrowdownWrapper>
                        <p className="label-dropdown">예상 기간</p>
                        <Dropdown
                            width="10rem"
                            selectValue={duration}
                            list={[
                                "1주",
                                "2주",
                                "1개월",
                                "3개월",
                                "6개월",
                                "6개월 이상",
                            ]}
                            handler={(e: any) => {
                                setDuration(e.item);
                            }}
                        />
                    </RecruitDrowdownWrapper>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <p
                            className="label-dropdown"
                            style={{ marginTop: "2rem" }}
                        >
                            모집 인원
                        </p>
                        <RecruitGroupWrapper>
                            {group?.map((g, i) => {
                                return (
                                    <RecruitGroupFlexWrapper>
                                        <div style={{ width: "10rem" }}>
                                            <InputFiled
                                                text={group[i].name}
                                                handler={(e: any) =>
                                                    onChangeGroup(e, g.max, i)
                                                }
                                            />
                                        </div>
                                        <p className="label-group">파트</p>
                                        <div style={{ width: "5rem" }}>
                                            <InputFiled
                                                text={group[i].max}
                                                handler={(e: any) =>
                                                    onChangeGroup(g.name, e, i)
                                                }
                                            />
                                        </div>
                                        <p className="label-group">명</p>
                                    </RecruitGroupFlexWrapper>
                                );
                            })}

                            <RecruitAddbtn
                                width="5rem"
                                onClick={() => {
                                    onClickAddBtn();
                                }}
                            >
                                +
                            </RecruitAddbtn>
                        </RecruitGroupWrapper>
                    </div>
                </RecruitContentLayout>
                <RecruitContentLayout isFilled={detail.length !== 0}>
                    <RecruitContentProgress isFilled={detail.length !== 0} />
                    <div className="content-label">상세설명</div>

                    <textarea
                        className="content-inputbox"
                        onChange={onChangeDetail}
                    ></textarea>
                    <p className="content-input-count">{detail.length}/500</p>
                </RecruitContentLayout>
                <RecruitContentLayout>
                    <RecruitContentProgress isFilled={priority.length !== 0} />
                    <div className="content-label">우대사항</div>
                    <textarea
                        className="content-inputbox"
                        onChange={onChangePrioirty}
                    ></textarea>

                    <p className="content-input-count">{priority.length}/100</p>
                </RecruitContentLayout>
                <RecruitContentLayout>
                    <RecruitContentProgress isFilled={link.length !== 0} />
                    <div className="content-label">소통 링크 </div>
                    <input
                        className="content-inputbox"
                        onChange={onChangeLink}
                    />
                    <p className="content-input-count">{link.length}/100</p>
                </RecruitContentLayout>
            </RecruitPostLayoutContainer>
            <StickRecruitkBtn
                onClick={submitClick}
                disabled={
                    !(
                        postTitle.length !== 0 &&
                        lecture.item !== "수강 중인 강의가 없습니다" &&
                        lecture.index !== -1 &&
                        title !== "" &&
                        detail.length !== 0
                    )
                }
            >
                작성완료
            </StickRecruitkBtn>
        </>
    );
};

export default RecruitPostLayout;
