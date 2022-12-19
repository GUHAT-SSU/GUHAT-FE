import { updateApply } from "@/apis/recruit/apply";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import CloseIcon from "@assets/close.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import MemberCard from "../Member/MemberCard";
import RecruitApplyItem from "./RecruitApplyItem";
import {
    RecruitMemCardList,
    RecruitMemCardWrapper,
    RecruitMemModalContainer,
    RecruitMemModalGroups,
    RecruitMemModalList,
} from "./RecruitMemModal.style";
interface IGroup {
    id: number;
    name: string;
    max: number;
    RoleAppliers?: [];
}

interface IMember {
    user?: any | null;
    status?: string;
    group_id: number;
}

const RecruitMemberModal = ({ members }: { members: IGroup[] }) => {
    const { id } = useParams();

    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);

    const [checkedMem, setCheckedMem] = useState<IMember | null>(null);
    const [checkIndex, setCheckIndex] = useState<number | null>(null);

    const [origin, setOrigin] = useState(members);
    const [applicantList, setApplicantList] = useState<any>([]); //보여지는 리스트
    const [selecteMember, setSelectedMember] = useState<any>([]); // 카드 정보 리스트

    useEffect(() => {
        const data: any[] = [];
        const onlyApplierData: any[] = [];
        members.forEach((applier, index) => {
            console.log("applier", applier);
            const onlyApplier: any[] = [];
            const init = Array.from({ length: applier.max }, () => null);
            applier.RoleAppliers?.forEach((i: any, idx: number) => {
                init[idx] = i.status === "success" ? i : null;
                if (i.status === "apply") onlyApplier.push(i);
            });
            const item = { ...members[index], RoleAppliers: init };
            onlyApplierData.push({
                ...members[index],
                RoleAppliers: onlyApplier.length === 0 ? [] : onlyApplier,
            });
            data.push(item);
        });
        setApplicantList(onlyApplierData);
        setSelectedMember(data);
    }, []);

    useEffect(() => {
        //TODO 지원자 받기
        console.log("applicant", applicantList);
    }, [applicantList]);

    useEffect(() => {
        console.log("check", checkedMem);
        console.log("checkindex", checkIndex);
    }, [checkedMem]);

    useEffect(() => {
        console.log("selected", selecteMember);
    }, [selecteMember]);

    const onClickSubmit = () => {
        setLoading(true);
        const submit = selecteMember.map((group: any, idx: number) => {
            let member = group.RoleAppliers.map((m: any) => {
                return m ? m.user.id : null;
            });
            return {
                roleId: group?.id,
                postId: id!!,
                member: member,
            };
        });
        console.log("submit", submit);
        updateApply(submit)
            .then((res) => {
                console.log(res);
                setLoading(false);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const addMember = (mem: any) => {
        console.log("please..add", mem);
        const group = [
            ...selecteMember.filter(
                (members: IMember) => members.group_id === mem.group_id
            ).RoleAppliers,
        ];
        const addIndex = group.indexOf(null);
        if (addIndex !== -1) {
            group[addIndex] = mem;
        } else {
        }
        const newState = [...selecteMember];
        const index = newState.findIndex(
            (member) => member.id === mem.group_id
        );
        newState[index].RoleAppliers = group;

        setCheckedMem({ ...mem });
        setSelectedMember(newState);
    };

    const setMember = (mem: any) => {
        const index = selecteMember.findIndex(
            (member: any) => member.id === mem.group_id
        );

        if (index !== -1) {
            const group = [...selecteMember[index].RoleAppliers];
            const deleteIndex = group.findIndex(
                (g) => g === null || g.user.id === checkedMem?.user.id
            );
            group[deleteIndex] = { ...mem };

            const newState = [...selecteMember];
            newState[index].RoleAppliers = group;
            setSelectedMember(newState);
        }
    };

    const deleteApplicant = (mem: any) => {
        const reGroup = [...applicantList];
        const index = reGroup.findIndex((role) => role.id === mem.group_id);

        const deleteIndex = reGroup[index].RoleAppliers.findIndex(
            (g: any) => g && g.id === mem?.id
        );
        console.log("index", deleteIndex);
        if (deleteIndex !== -1)
            reGroup[index].RoleAppliers.splice(deleteIndex, 1);
        // reGroup[index].RoleAppliers.push(mem);
        setApplicantList(reGroup);
    };

    const onClickApplyItem = (clickedApplicant: any) => {
        if (checkIndex === null) return;
        const index = selecteMember.findIndex(
            (role: any) => role.id === clickedApplicant.group_id
        );

        if (
            selecteMember[index].RoleAppliers.length ===
            selecteMember[index].max
        ) {
            //남는 자리가 없음
            console.log("leak");
            //지원리스트 재추가
            deleteApplicant(clickedApplicant); // 지원리스트에서 제거하고
            setMember(clickedApplicant); // 이전에 클릭했던 자리에 재배치함
            setCheckedMem(clickedApplicant); //클릭된 걸 변경함
            return;
        }

        const curApplyGroup = [...applicantList[checkIndex!!].RoleAppliers];
        console.log(
            applicantList[checkIndex].RoleAppliers.findIndex(
                (v: any) => clickedApplicant.user.id === v.user.id
            )
        );
        curApplyGroup.splice(
            applicantList[checkIndex].RoleAppliers.findIndex(
                (v: any) => clickedApplicant.user.id === v.user.id
            ),
            1
        );

        const newState = [...applicantList];
        newState[clickedApplicant.titleIndex].RoleAppliers = [...curApplyGroup];
        setApplicantList(newState);
        addMember(clickedApplicant);
    };

    const onClickReset = () => {
        if (checkIndex === null) return;

        const applier = members[checkIndex];
        const onlyApplier: any[] = [];
        const init = Array.from({ length: applier.max }, () => null);
        applier.RoleAppliers?.forEach((i: any, idx: number) => {
            init[idx] = i.status === "success" ? i : null;
            if (i.status === "apply") onlyApplier.push(i);
        });
        const item = { ...members[checkIndex], RoleAppliers: init };

        const prevApplicant = [...applicantList];
        prevApplicant[checkIndex] = {
            ...members[checkIndex],
            RoleAppliers: onlyApplier.length === 0 ? [] : onlyApplier,
        };

        const prevSelectedMember = [...selecteMember];
        prevSelectedMember[checkIndex] = item;
        console.log("prevselect", prevSelectedMember);
        console.log("prevAppli", prevApplicant);

        setApplicantList(prevApplicant);
        setSelectedMember(prevSelectedMember);
    };

    const originValidation = (groupIndex: number, m: any) => {
        console.log("origin", origin);
        if (m === null) return false;
        let flag = false;
        origin[groupIndex].RoleAppliers?.forEach((applier: any) => {
            if (applier.user.id === m.user.id && applier.status === "success")
                flag = true;
        });
        return flag;
    };

    return (
        <RecruitMemModalContainer>
            <button
                className="modal-close-btn"
                style={{ backgroundImage: `url(${CloseIcon})` }}
                onClick={() => {
                    setModalVisible(false);
                }}
            ></button>
            <RecruitMemModalList>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {" "}
                    <h1 className="list-label">
                        {checkedMem?.group_id && checkIndex !== null
                            ? selecteMember[checkIndex].name + " "
                            : ""}
                        지원자 목록
                    </h1>
                    <button className="reset-btn" onClick={onClickReset}>
                        Reset
                    </button>
                </div>

                {applicantList && checkIndex !== null ? (
                    applicantList[checkIndex].RoleAppliers.length > 0 ? (
                        applicantList[checkIndex].RoleAppliers.map(
                            (a: any, idx: number) => {
                                return (
                                    <RecruitApplyItem
                                        key={
                                            "recruit-modal-apply-item" +
                                            a.title +
                                            idx
                                        }
                                        profileImg={a.user.profileImg}
                                        nickname={a.user.nickname}
                                        id={a.user.id}
                                        level={a.user.level}
                                        clickListener={() => {
                                            onClickApplyItem({
                                                ...a,
                                            });
                                        }}
                                    />
                                );
                            }
                        )
                    ) : (
                        <div className="recruit-modal-empty-state">
                            <h2 className="recruit-modal-empty-state">
                                지원자가 없습니다
                            </h2>
                        </div>
                    )
                ) : (
                    <div className="recruit-modal-empty-state">
                        <h2>오른쪽 팀 현황 박스에서 추가하고 </h2>
                        <h2>싶은 빈자리를 선택해주세요.</h2>
                    </div>
                )}
            </RecruitMemModalList>
            <div className="modal-recuit-content">
                <RecruitMemModalGroups>
                    {selecteMember?.map((mem: any, idx: number) => {
                        return (
                            <RecruitMemCardList
                                key={idx + "modal-recruit-list"}
                            >
                                <h1 className="modal-recuit-group-label">
                                    {mem.name}
                                </h1>
                                {mem.RoleAppliers
                                    ? mem.RoleAppliers?.map(
                                          (m: any, index: number) => {
                                              return (
                                                  <RecruitMemCardWrapper
                                                      key={
                                                          "mem-card" +
                                                          mem.name +
                                                          index
                                                      }
                                                      checked={
                                                          m == null ||
                                                          (checkedMem &&
                                                              m &&
                                                              checkedMem.user
                                                                  ?.id ===
                                                                  m.user.id)
                                                      }
                                                      mem={m}
                                                      isNew={originValidation(
                                                          idx,
                                                          m
                                                      )}
                                                  >
                                                      <MemberCard
                                                          profileImg={
                                                              m
                                                                  ? m.user
                                                                        .profileImg
                                                                  : null
                                                          }
                                                          member={
                                                              m
                                                                  ? m.user
                                                                        .nickname
                                                                  : null
                                                          }
                                                          id={m ? m.id : null}
                                                          disabled={originValidation(
                                                              idx,
                                                              m
                                                          )}
                                                          clickListener={() => {
                                                              console.log(
                                                                  "role",
                                                                  mem
                                                              );
                                                              console.log(
                                                                  "click memember",
                                                                  m
                                                              );
                                                              setCheckIndex(
                                                                  idx
                                                              );
                                                              if (m === null)
                                                                  setCheckedMem(
                                                                      {
                                                                          user: null,
                                                                          group_id:
                                                                              mem.id,
                                                                      }
                                                                  );
                                                              else
                                                                  setCheckedMem(
                                                                      m
                                                                  );
                                                          }}
                                                      />
                                                  </RecruitMemCardWrapper>
                                              );
                                          }
                                      )
                                    : null}
                            </RecruitMemCardList>
                        );
                    })}
                </RecruitMemModalGroups>
                <button
                    className="modal-recuit-group-button"
                    onClick={onClickSubmit}
                >
                    모집현황 저장
                </button>
            </div>
        </RecruitMemModalContainer>
    );
};

export default RecruitMemberModal;
