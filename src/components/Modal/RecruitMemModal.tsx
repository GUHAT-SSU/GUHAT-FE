import {
    RecruitMemCardList,
    RecruitMemCardWrapper,
    RecruitMemModalContainer,
    RecruitMemModalGroups,
    RecruitMemModalList,
} from "./RecruitMemModal.style";

import { updateApply } from "@/apis/recruit/apply";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import CloseIcon from "@assets/close.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import MemberCard from "../Member/MemberCard";
import RecruitApplyItem from "./RecruitApplyItem";

interface checkedMem {
    title: string;
    titleIndex: number;
    index: number;
    id?: string;
    nickname?: string;
    level?: string;
    isNew?: boolean;
    profileImg?: string | null;
}

const RecruitMemModal = ({ members }: { members: any[] }) => {
    const { id } = useParams();

    console.log("member", members);
    const [loading, setLoading] = useRecoilState(loadingState);

    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [checkedMem, setCheckedMem] = useState<checkedMem | null>(null);
    const [applicantList, setApplicantList] = useState<any[]>(members); //보여지는 리스트
    const [selecteMember, setSelectedMember] = useState<any[]>([]);

    useEffect(() => {
        const data: any[] = [];
        const onlyApplierData: any[] = [];
        members.forEach((applier, index) => {
            console.log("applier", applier);
            const onlyApplier: any[] = [];
            const init = Array.from({ length: applier.max }, () => null);
            applier.member.forEach((i: any, idx: number) => {
                init[idx] = i.status === "success" ? i : null;
                if (i.status === "apply") onlyApplier.push(i);
            });
            const item = { ...members[index], member: init };
            onlyApplierData.push(onlyApplier);
            data.push(item);
        });
        setApplicantList([...onlyApplierData]);
        setSelectedMember(data);
    }, []);

    useEffect(() => {
        //TODO 지원자 받기
        console.log("applicant", applicantList);
    }, [applicantList]);

    useEffect(() => {
        console.log("check", checkedMem);
    }, [checkedMem]);

    useEffect(() => {
        console.log("selected", selecteMember);
    }, [selecteMember]);

    const onClickSubmit = () => {
        setLoading(true);
        const submit = selecteMember.map(
            (
                group: { roleId: number | string; title: string; member: any },
                idx
            ) => {
                let member = group.member.map((m: any) => {
                    return m ? m.id : null;
                });
                return {
                    roleId: group?.roleId,
                    postId: id!!,
                    member: member,
                };
            }
        );
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
        const group = [...selecteMember[mem.titleIndex].member];
        const addIndex = group.indexOf(null);
        if (addIndex !== -1) {
            group[addIndex] = {
                id: mem.id,
                nickname: mem.nickname,
                level: mem.level,
                profileImg: mem.profileImg,
                isNew: true,
            };
        } else {
        }
        const newState = [...selecteMember];
        newState[mem.titleIndex].member = group;

        setCheckedMem({ ...mem });
        setSelectedMember(newState);
    };

    const setMember = (mem: any) => {
        const group = [...selecteMember[mem.titleIndex].member];
        const deleteIndex = group.findIndex((g) => g.id === checkedMem?.id);
        group[deleteIndex] = { ...mem, isNew: true };
        const newState = [...selecteMember];
        newState[mem.titleIndex].member = group;
        setSelectedMember(newState);
    };

    const deleteApplicant = (mem: any) => {
        if (checkedMem?.id) {
            const reGroup = [...applicantList];
            const newItem = {
                id: checkedMem.id,
                nickname: checkedMem.nickname,
                level: checkedMem.level,
                profileImg: checkedMem.profileImg,
            };

            const deleteIndex = reGroup[
                checkedMem?.titleIndex
            ].applicant.findIndex((g: any) => g && g.id === mem?.id);

            if (deleteIndex !== -1)
                reGroup[checkedMem?.titleIndex].applicant.splice(
                    deleteIndex,
                    1
                );
            reGroup[checkedMem?.titleIndex].applicant.push(newItem);
            setApplicantList(reGroup);
        }
    };

    const onClickApplyItem = (clickedApplicant: any) => {
        if (
            applicantList[clickedApplicant.titleIndex].member.length > 0 &&
            checkedMem?.id
        ) {
            //남는 자리가 없음
            console.log("leak");
            //지원리스트 재추가
            deleteApplicant(clickedApplicant);

            const changeInfo = { ...checkedMem };
            changeInfo.id = clickedApplicant.id;
            changeInfo.nickname = clickedApplicant.nickname;
            changeInfo.level = clickedApplicant.level;
            changeInfo.profileImg = clickedApplicant.profileImg;
            setCheckedMem(changeInfo);
            setMember(changeInfo);

            return;
        }

        const curApplyGroup = [
            ...applicantList[clickedApplicant.titleIndex].member,
        ];

        curApplyGroup.splice(clickedApplicant.index, 1);

        const newState = [...applicantList];
        newState[clickedApplicant.titleIndex].member = [...curApplyGroup];
        setApplicantList(newState);
        addMember(clickedApplicant);
    };

    const checkValidation = (
        member: any,
        title: string,
        id: string | number
    ): boolean => {
        console.log("checkMem", checkedMem);

        if (checkedMem === null || checkedMem.title === title) return true;
        if (member?.isNew !== undefined && member?.isNew) return false;
        else {
            if (checkedMem.id === undefined) {
                return false;
            }
            return checkedMem?.id === member?.id;
        }
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
                <h1 className="list-label">
                    {checkedMem?.id
                        ? selecteMember[checkedMem.titleIndex].title + " "
                        : ""}
                    지원자 목록
                </h1>

                {checkedMem && checkedMem.titleIndex && applicantList ? (
                    applicantList[checkedMem.titleIndex].length > 0 &&
                    applicantList[checkedMem.titleIndex].member.length !== 0 ? (
                        applicantList[checkedMem.titleIndex].member.map(
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
                                                titleIndex:
                                                    checkedMem.titleIndex,
                                                index: idx,
                                                id: a.user.id,
                                                nickname: a.user.nickname,
                                                profileImg: a.user.profileImg,
                                                level: a.user.level,

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
                    {selecteMember?.map((mem, idx) => {
                        return (
                            <RecruitMemCardList
                                key={idx + "modal-recruit-list"}
                            >
                                <h1 className="modal-recuit-group-label">
                                    {mem.title}
                                </h1>
                                {mem.member
                                    ? mem.member?.map(
                                          (m: any, index: number) => {
                                              return (
                                                  <RecruitMemCardWrapper
                                                      key={
                                                          "mem-card" +
                                                          mem.title +
                                                          index
                                                      }
                                                      checked={checkValidation(
                                                          m,
                                                          mem.title,
                                                          mem.roleId
                                                      )}
                                                      mem={m}
                                                      isNew={
                                                          m === null || m.isNew
                                                      }
                                                  >
                                                      <MemberCard
                                                          profileImg={
                                                              m
                                                                  ? m.profileImg
                                                                  : null
                                                          }
                                                          member={
                                                              m
                                                                  ? m.nickname
                                                                  : null
                                                          }
                                                          id={m ? m.id : null}
                                                          disabled={
                                                              m !== null &&
                                                              !m.isNew
                                                          }
                                                          clickListener={() => {
                                                              console.log(m);
                                                              console.log(mem);
                                                              m === null
                                                                  ? setCheckedMem(
                                                                        {
                                                                            title: mem.title,
                                                                            titleIndex:
                                                                                idx,
                                                                            index: index,
                                                                        }
                                                                    )
                                                                  : setCheckedMem(
                                                                        {
                                                                            title: mem.title,
                                                                            titleIndex:
                                                                                idx,
                                                                            index: index,
                                                                            nickname:
                                                                                m.nickname,
                                                                            id: m.id,
                                                                            profileImg:
                                                                                m.profileImg,
                                                                            level: m.level,
                                                                        }
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
                <button className="modal-recuit-group-button">
                    모집 마감하기
                </button>
            </div>
        </RecruitMemModalContainer>
    );
};

export default RecruitMemModal;
