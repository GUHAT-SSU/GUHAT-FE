import FileItem from "@/components/FileItem";
import ProfileLayout from "@/domain/recruitView/ProfileLayout";
import { displayLevel } from "@/util/displayLevel";
import {
    ReviewViewinfoWrapper,
    ReviewViewLayoutContainer,
} from "./ReviewViewLayout.style";

interface Props {
    isOwner: boolean;
    title: string;
    year: string | number;
    semester: string | number;
    createdAt: string;

    profileImg?: string;
    writerId: string;
    nickname: string;
    writerLevel: number;

    memberNum: number;
    startDate: string;
    endDate: string;
    reviewLevel: string;

    subject: string;
    detail: string;
    files?: any[];
}

const ReviewViewLayout = ({ ...props }: Props) => {
    console.log(props);
    return (
        <ReviewViewLayoutContainer>
            <h1 className="title">{props.title}</h1>
            <p className="lecture-info">
                {props.year}년 {props.semester} 수강자
            </p>
            <div className="content">
                <ProfileLayout
                    profileImg={props.profileImg}
                    nickname={props.nickname}
                    id={props.writerId}
                    level={displayLevel(props.writerLevel)}
                    endDate={props.createdAt.slice(0, 10)}
                    isOwner={props.isOwner ? true : false}
                ></ProfileLayout>
            </div>
            <hr />
            <div className="content">
                <ReviewViewinfoWrapper>
                    <div className="info-wrapper">
                        <p className="label-content">필요인원</p>
                        <p>{props.memberNum}명</p>
                    </div>
                    <div className="info-wrapper">
                        <p className="label-content">팀플기간</p>
                        <p>{props.startDate}</p>
                        <p>~</p>
                        <p>{props.endDate}</p>
                    </div>
                    <div className="info-wrapper">
                        <p> </p>
                        <p className="label-content">난이도</p>
                        <p
                            className={`${
                                props.reviewLevel === "상" ? "check" : ""
                            }`}
                        >
                            상
                        </p>
                        <p
                            className={`${
                                props.reviewLevel === "중" ? "check" : ""
                            }`}
                        >
                            중
                        </p>
                        <p
                            className={`${
                                props.reviewLevel === "하" ? "check" : ""
                            }`}
                        >
                            하
                        </p>
                    </div>
                </ReviewViewinfoWrapper>
            </div>
            <hr />
            <h2 className="subtitle">주제</h2>
            <div className="text-content">{props.subject}</div>
            <hr />
            <h2 className="subtitle">상세 설명</h2>
            <div className="text-content">{props.detail}</div>
            <hr />
            <h2 className="subtitle">팀플 자료</h2>
            <div className="file-content-wrapper">
                {" "}
                {props.files &&
                    props.files.length > 0 &&
                    props.files?.map((file) => (
                        <FileItem file={file} mode={"view"} />
                    ))}
            </div>
        </ReviewViewLayoutContainer>
    );
};

export default ReviewViewLayout;
