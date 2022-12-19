import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

import UploadImg from "@/assets/upload.svg";
import MainButton from "@/components/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import InputFiled from "@/components/InputBox/InputFiled";

import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";

import { createReview, createReviewFile, postValidation } from "@/apis/review";
import FileItem from "@/components/FileItem";
import {
    RecruitContentLayout,
    RecruitContentProgress,
    RecruitDrowdownWrapper,
    RecruitPostLayoutContainer,
    RecruitPostTitle,
} from "@/domain/recruitPost/Layout/RecruitPostLayout.style";
import { StickRecruitkBtn } from "@/domain/recruitView/RecruitViewLayout.style";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
    ReviewFileContainer,
    ReviewFileWrapper,
    ReviewLevelButton,
    ReviewLevelWrapper,
} from "./ReviewPostLayout.style";

const ReviewPostLayout = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const { id } = useParams();
    const { status, data } = useQuery(
        ["validation-review", id],
        () => postValidation(id!!),
        {
            onError: (res: AxiosError | any) => {
                console.log(res.response?.data);
                if (
                    res.response.data.message === "시간표 업로드가 필요합니다"
                ) {
                    setLoading(false);
                    setModalVisible(true);
                } else if (res.response?.status === 400) {
                    alert("수강 과목이 아닙니다!");
                    window.history.back();
                }
            },
            onSuccess: () => {
                setLoading(false);
            },
            retry: 0,
        }
    );

    const navigator = useNavigate();

    const [postTitle, setPostTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [detail, setDetail] = useState("");
    const [member, setMember] = useState("");
    const [level, setLevel] = useState("중");
    const [start, setStart] = useState("1월");
    const [end, setEnd] = useState("1월");
    const [files, setFiles] = useState<File[]>([]);

    const fileRef = useRef<HTMLInputElement>(null);
    const [fileList, setFileList] = useState(files ? files : []);
    const [sendFile, setSendFile] = useState<FormData>();

    useEffect(() => {
        setModalVisible(false);
    }, []);

    const onChangeDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        if (detail.length < 499) setDetail(e.target.value);
    };

    const onChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (subject.length < 99) setSubject(e.target.value);
    };

    const onClickUplod = () => {
        if (fileRef) fileRef.current!!.click();
    };

    const fileHandleChange = (e: any) => {
        console.log(e.target.files);
        const newFiles = [...fileList];
        const files = [...e.target.files];
        files.forEach((element: File) => {
            newFiles.push(element);
        });

        setFileList(newFiles);
    };

    const submitClick = () => {
        console.log("submit");
        setLoading(true);
        const formData = new FormData();
        fileList.forEach((element: File) => {
            formData.append("file", element);
        });
        const body = {
            title: postTitle,
            peopleNum: member,
            level: level,
            topic: subject,
            period: [start.replace("월", ""), end.replace("월", "")],
            detail: detail,
            lecture_id: id!!,
        };

        createReview(id!!, body)
            .then((res) => {
                console.log(res);
                const reviewId = res.data.reviewId;
                createReviewFile(id!!, reviewId, formData).then((res) => {
                    console.log(res);
                    alert("리뷰 작성 완료!");
                    setLoading(false);
                    navigator(`/review/${reviewId}/${id}`);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
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
                    <RecruitContentProgress isFilled={member.length !== 0} />
                    <RecruitDrowdownWrapper>
                        <p className="label-dropdown">필요 인원</p>
                        <div style={{ width: "6rem" }}>
                            <InputFiled
                                text={member}
                                handler={setMember}
                                type="number"
                            />
                        </div>
                        <p style={{ textAlign: "end" }}>명</p>
                    </RecruitDrowdownWrapper>
                    <RecruitDrowdownWrapper>
                        <p className="label-dropdown">예상 기간</p>
                        <Dropdown
                            width="7rem"
                            selectValue={start}
                            list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                                (m) => m + "월"
                            )}
                            handler={(e: any) => {
                                setStart(e.item);
                            }}
                        />
                        <p style={{ fontWeight: 700, fontSize: "1.3rem" }}>~</p>
                        <Dropdown
                            width="7rem"
                            selectValue={end}
                            list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                                (m) => m + "월"
                            )}
                            handler={(e: any) => {
                                setEnd(e.item);
                            }}
                        />
                    </RecruitDrowdownWrapper>
                    <RecruitDrowdownWrapper>
                        <p> </p>
                        <p className="label-dropdown"> 난이도</p>
                        <ReviewLevelWrapper>
                            <ReviewLevelButton
                                onClick={() => setLevel("상")}
                                checked={level === "상"}
                            >
                                상
                            </ReviewLevelButton>
                            <ReviewLevelButton
                                onClick={() => setLevel("중")}
                                checked={level === "중"}
                            >
                                중
                            </ReviewLevelButton>
                            <ReviewLevelButton
                                onClick={() => setLevel("하")}
                                checked={level === "하"}
                            >
                                하
                            </ReviewLevelButton>
                        </ReviewLevelWrapper>
                    </RecruitDrowdownWrapper>
                </RecruitContentLayout>
                <RecruitContentLayout>
                    <RecruitContentProgress isFilled={subject.length !== 0} />
                    <div className="content-label">주제</div>
                    <input
                        className="content-inputbox"
                        onChange={onChangeSubject}
                    />
                    <p className="content-input-count">{subject.length}/100</p>
                </RecruitContentLayout>
                <RecruitContentLayout isFilled={detail.length !== 0}>
                    <RecruitContentProgress isFilled={detail.length !== 0} />
                    <div className="content-label">상세설명</div>
                    <textarea
                        className="content-inputbox"
                        onChange={onChangeDetail}
                    />
                    <p className="content-input-count">{detail.length}/500</p>
                </RecruitContentLayout>
                <RecruitContentLayout isFilled={true}>
                    <div className="content-label">팀플자료</div>
                    <>
                        <ReviewFileContainer>
                            <div className="upload-button">
                                <MainButton
                                    width="100%"
                                    clickListener={onClickUplod}
                                >
                                    파일 업로드
                                    <img
                                        src={UploadImg}
                                        alt="업로드이미지"
                                        style={{
                                            width: "1.3rem",
                                            marginLeft: "1rem",
                                        }}
                                    />
                                </MainButton>
                                <input
                                    multiple
                                    ref={fileRef}
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={fileHandleChange}
                                />
                            </div>

                            <ReviewFileWrapper>
                                {fileList?.map((file) => (
                                    <FileItem file={file} mode={"view"} />
                                ))}
                            </ReviewFileWrapper>
                        </ReviewFileContainer>
                    </>
                </RecruitContentLayout>
            </RecruitPostLayoutContainer>
            <StickRecruitkBtn
                onClick={submitClick}
                disabled={
                    !(
                        postTitle.length !== 0 &&
                        detail.length !== 0 &&
                        subject.length !== 0 &&
                        member !== ""
                    )
                }
            >
                작성완료
            </StickRecruitkBtn>
        </>
    );
};

export default ReviewPostLayout;
