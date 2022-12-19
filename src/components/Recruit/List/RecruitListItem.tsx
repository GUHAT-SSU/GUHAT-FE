import {
    LectureProgressContainer,
    Progress,
    ProgressWrapper,
} from "@/components/History/LectureHistory.style";
import { useNavigate } from "react-router-dom";
import { calculateData } from "../../../util/calculateData";
import { RecruitItemContainer } from "./RecruitListItem.style";

interface Props {
    isOwner?: boolean;
    id: number | string;
    title: string;
    writer: any;
    lectureName: string;
    year: string;
    semester?: string;
    time?: any[];
    type: string | "major" | "elective";
    professor: string | string[];
    detail: string;
    createdAt: string;
    endDate: string;
    total: number;
    current: number;
}

const RecruitListItem = ({ ...props }: Props) => {
    const navigator = useNavigate();
    const onClickItem = () => {
        navigator("/recruit/" + props.id);
    };

    return (
        <RecruitItemContainer onClick={onClickItem}>
            <div className="title-wrapper content-wrapper">
                <p className="lecture-title bold">{props.title}</p>
                <p>
                    {props.year}년도 {props.semester}
                </p>
            </div>
            <div className="content-wrapper bold">
                {props.time
                    ? props.time.map((s: any) => `${s.day} ${s.time}`)
                    : []}
            </div>
            <div className="text-wrapper">{props.detail}</div>

            <div className="content-wrapper">
                <p className="bold">D-{calculateData(props.endDate)}</p>
                <p className="bold">{props.writer.nickname}</p>
                <p className="level">{props.writer.level}</p>
            </div>
            <p
                className="day-wrapper"
                style={
                    props.type === "major"
                        ? { color: "white" }
                        : { color: "gray" }
                }
            >
                작성일 : {props.createdAt.slice(0, 10)}
            </p>

            <LectureProgressContainer major={props.type === "major"}>
                <ProgressWrapper major={props.type === "major"}>
                    <div className="progress-label">
                        <p>{props.current}</p>
                        <p className="total">/</p>
                        <p className="total">{props.total}</p>
                    </div>
                    <Progress percent={props.current / props.total} />
                </ProgressWrapper>
            </LectureProgressContainer>
        </RecruitItemContainer>
    );
};

export default RecruitListItem;
