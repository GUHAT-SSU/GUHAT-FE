import { calculateData } from "@/util/calculateData";
import Edit from "@assets/edit.svg";
import {
    LectureHistoryContainer,
    LectureProgressContainer,
    Progress,
    ProgressWrapper,
    StatusChip,
} from "./LectureHistory.style";

interface Props {
    isOwner: boolean;
    id: number | string;
    title: string;
    nickname?: string;
    level?: string | number;
    endDate: string;
    lectureName: string;
    time?: string | string[] | null;
    type: string | "major" | "elective";
    professor: string | string[];
    detail: string;
    createdAt: string;
    total: number;
    current: number;
    status?: string;

    clickListener?: () => void;
}

const LectureHistory = ({ ...props }: Props) => {
    console.log(props);
    const statusMapper = (status: string) => {
        if (props.total === props.current) return "모집마감";
        if (status === "success") return "매칭완료";
        else if (status === "apply") return "지원완료";
        return "";
    };
    return (
        <LectureHistoryContainer onClick={props.clickListener}>
            <div className="recruit-title">
                <p> {props.title}</p>
                {props.isOwner ? (
                    <img className="edit-img" src={Edit} alt="편집 아이콘" />
                ) : null}
                {props.status && !props.isOwner ? (
                    <>
                        <StatusChip>{statusMapper(props.status)}</StatusChip>
                    </>
                ) : null}
            </div>
            <div className="recruit-sub-title">
                <h1>
                    {parseInt(calculateData(props.endDate)) < 0
                        ? "모집마감"
                        : `D-${calculateData(props.endDate)}`}
                </h1>
                <p className="recruit-class">{props.lectureName}</p>
                <p>/</p>
                <p>{props.professor}</p>
            </div>

            <div className="recruit-content">{props.detail}</div>
            <LectureProgressContainer major={props.type === "major"}>
                <p className="recruit-day">
                    작성일 : {props.createdAt.slice(0, 10)}
                </p>
                <ProgressWrapper major={props.type === "major"}>
                    <div className="progress-label">
                        <p>{props.current}</p>
                        <p className="total">/</p>
                        <p className="total">{props.total}</p>
                    </div>
                    <Progress percent={props.current / props.total} />
                </ProgressWrapper>
            </LectureProgressContainer>
        </LectureHistoryContainer>
    );
};

export default LectureHistory;
