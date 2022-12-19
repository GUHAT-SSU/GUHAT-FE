import FilledBox from "@/components/InputBox/FilledBox";
import LabelFilledBox from "@/components/InputBox/LabelFilledBox";
import { RecruitViewResponse } from "@/types/recruitLecture.types";
import { calculateData } from "../../util/calculateData";
import {
    RecruitViewInfoContainer,
    RecruitViewInfoGroup,
} from "./RecruitViewInfo.style";
interface Props {
    res?: RecruitViewResponse | any;
}
type Group = {
    title: string;
    member: string[] | null[];
};

const RecruitViewInfo = ({ res }: Props) => {
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

    return (
        <>
            <RecruitViewInfoContainer>
                <div className="recruit-info-content">
                    <LabelFilledBox
                        label={"수업 이름"}
                        text={`${res?.lecture.name} / ${res?.lecture.professor}`}
                    />
                </div>
                <div className="recruit-info-content">
                    <LabelFilledBox
                        label={"수업 시간"}
                        text={`${
                            res.lecture.schedule
                                ? res.lecture.schedule.map(
                                      (s: any) => `${s.day} ${s.time}`
                                  )
                                : []
                        }`}
                    />
                </div>
                <div className="recruit-info-content">
                    <LabelFilledBox
                        label={"모집 마감"}
                        text={`${res.endDate}`}
                    />

                    <FilledBox
                        text={
                            parseInt(calculateData(res.endDate)) > 0
                                ? `D-${calculateData(res.endDate)} `
                                : "모집마감"
                        }
                        mode="dark"
                    />
                </div>
                <div className="recruit-info-content">
                    <LabelFilledBox
                        label={"예상 기간"}
                        text={`${res.period}`}
                    />
                </div>
                <RecruitViewInfoGroup>
                    <p>모집 인원</p>
                    <div className="recruit-info-group">
                        {res.Roles
                            ? res.Roles.map((g: any, i: number) => {
                                  return (
                                      <div className="recruit-info-item">
                                          <FilledBox
                                              text={g.name}
                                              key={
                                                  "recruit-info-item" +
                                                  i +
                                                  g.name
                                              }
                                          />
                                          <h1>{g.max}명</h1>
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </RecruitViewInfoGroup>
            </RecruitViewInfoContainer>
        </>
    );
};

export default RecruitViewInfo;
