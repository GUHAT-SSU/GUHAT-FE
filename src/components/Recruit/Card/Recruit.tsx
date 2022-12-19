import { IRecruitItem } from "@/types/recruitLecture.types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import ProgressBar from "./ProgressBar";
import {
    RecruitBgPogress,
    RecruitLectureTitle,
    RecruitSubTitle,
    RecruitWrap,
} from "./Recruit.style";
import RecruitContent from "./RecruitContent";
import { RecruitContentChip } from "./RecruitContent.style";
import ViewCount from "./ViewCount";

const Recruit = ({ recruit }: { recruit: IRecruitItem }) => {
    const navigator = useNavigate();

    const onClickRecruitCard = () => {
        navigator("/recruit/" + recruit.id);
    };
    const calculateDate = useCallback<(endDate: string) => string>(
        (endDate) => {
            const endTime: any = new Date(endDate);
            const nowTime: any = new Date();
            const diff = endTime - nowTime;
            const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
            return diffDay;
        },
        []
    );
    const day = calculateDate(recruit.endDate);
    return (
        <RecruitWrap lectureType={recruit.type} onClick={onClickRecruitCard}>
            <RecruitBgPogress progress={recruit.current / recruit.total} />
            <RecruitContentChip type={recruit.type} />
            <RecruitLectureTitle>{recruit.lecture.name}</RecruitLectureTitle>
            <RecruitSubTitle type={recruit.type}>
                {recruit.lecture.schedule?.map((s, i) => {
                    if (i === 0) return s.day + " " + s.time;
                    else return ` / ${s.day + " " + s.time}`;
                })}
            </RecruitSubTitle>
            <RecruitSubTitle type={recruit.type}>
                {recruit.lecture.professors?.map((s, i) => {
                    if (i === 0) return s;
                    else return ` / ${s}`;
                })}
            </RecruitSubTitle>
            <ViewCount count={recruit.viewCount} type={recruit.type} />
            <ProgressBar total={recruit.total} current={recruit.current} />
            <RecruitContent
                title={recruit.title}
                detail={recruit.detail}
                endDate={parseInt(day) < 0 ? "모집마감" : `D-${day}`}
            >
                <Profile
                    profileImg={recruit.writer.profileImg}
                    level={recruit.writer.level}
                    nickname={recruit.writer.nickname}
                />
            </RecruitContent>
        </RecruitWrap>
    );
};

export default Recruit;
