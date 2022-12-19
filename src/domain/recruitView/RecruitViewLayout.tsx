import { modalState } from "@/storage/recoil/modalState";
import { RecruitViewResponse } from "@/types/recruitLecture.types";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import MemberList from "./List/MemberList";
import ProfileLayout from "./ProfileLayout";
import RecruitViewInfo from "./RecruitViewInfo";
import { RecruitViewNowInfo } from "./RecruitViewInfo.style";
import {
    CloseRecruitBtn,
    RecruitViewContainer,
} from "./RecruitViewLayout.style";

interface Props {
    recruit?: RecruitViewResponse;
}

const RecruitViewLayout = ({ recruit }: Props) => {
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const res = { ...recruit };
    const { id } = useParams();

    return (
        <RecruitViewContainer>
            <h1 className="title">{res.title}</h1>
            <div className="content">
                <ProfileLayout
                    {...res.writer}
                    endDate={
                        res.createdAt
                            ? res.createdAt.slice(0, 10)
                            : "기간제한 없음"
                    }
                    isOwner={res.isOwner ? true : false}
                ></ProfileLayout>
            </div>
            <hr />
            <div className="content">
                <RecruitViewInfo res={res} />
            </div>
            <hr />
            <div className="title-wrapper">
                <h2 className="subtitle">팀원리스트</h2>
                {res.isOwner ? (
                    <CloseRecruitBtn
                        onClick={() => {
                            setModalVisible(true);
                        }}
                        disabled={res.status === "close"}
                    >
                        {" "}
                        지원받기
                    </CloseRecruitBtn>
                ) : null}
            </div>

            <div className="content">
                <RecruitViewNowInfo>
                    {res?.Roles
                        ? res.Roles.map((g, i) => {
                              return (
                                  <MemberList
                                      canAccess={res.isApply === "success"}
                                      list={g.RoleAppliers}
                                      name={g.name}
                                      max={g.max}
                                      key={g.name}
                                  />
                              );
                          })
                        : null}
                </RecruitViewNowInfo>
            </div>
            <hr />
            <h2 className="subtitle">상세 설명</h2>
            <div className="text-content">{recruit?.detail}</div>
            <hr />
            <h2 className="subtitle">우대 사항</h2>
            <div className="text-content">{recruit?.priority}</div>
        </RecruitViewContainer>
    );
};

export default RecruitViewLayout;
