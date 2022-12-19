import { closeRecruit } from "@/apis/recruit/post";
import { useGetRecruitPost } from "@/apis/recruit/view";
import BackArrowBtn from "@/components/Button/BackArrow";
import APILayout from "@/components/Layout/APILayout";
import RecruitApplyModal from "@/components/Modal/RecruitApplyModal";
import RecruitMemberModal from "@/components/Modal/RecruitMemberModal";
import RecruitViewLayout from "@/domain/recruitView/RecruitViewLayout";
import {
    StickBackBtn,
    StickRecruitkBtn,
} from "@/domain/recruitView/RecruitViewLayout.style";
import { modalState } from "@/storage/recoil/modalState";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loadingState } from "../storage/recoil/loadingState";

const RecruitView = () => {
    const { id } = useParams();
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const { status, data } = useGetRecruitPost(id ? id : 0);

    useEffect(() => {
        setModalVisible(false);
        setLoading(true);
    }, []);

    const [applyState, setApplyState] = useState(
        data ? (data.isOwner ? false : data.isApply !== "none") : true
    );

    useEffect(() => {
        if (status === "success") {
            setLoading(false);
            setApplyState(data.isOwner ? false : data.isApply !== "none");
        } else setLoading(true);
    }, [status]);

    const onClickBack = () => {
        window.history.back();
    };

    const onClickApply = () => {
        if (data?.isOwner) {
            setApplyState(false);
            closeRecruit(id!!)
                .catch((err) => {
                    alert(err.response.data.message);
                })
                .then((res) => {
                    console.log(res);
                    if (res?.data.status < 400) {
                        alert("모집을 마감했습니다!");
                    }
                });
        } else setModalVisible(true);
    };

    return (
        <>
            <StickBackBtn>
                <BackArrowBtn clickListener={onClickBack} />
            </StickBackBtn>
            {data ? (
                <>
                    {" "}
                    <APILayout
                        modal={
                            data.isOwner ? (
                                <RecruitMemberModal members={data.Roles} />
                            ) : (
                                <RecruitApplyModal
                                    list={data.Roles.map(
                                        (g: any, i: number) => {
                                            return {
                                                roleId: g.id,
                                                title: g.name,
                                            };
                                        }
                                    )}
                                />
                            )
                        }
                    >
                        <RecruitViewLayout recruit={data} />
                        <div style={{ height: "6rem" }}></div>
                    </APILayout>
                    <StickRecruitkBtn
                        onClick={onClickApply}
                        disabled={data.status === "close" || applyState}
                    >
                        {!data.isOwner
                            ? applyState
                                ? "지원완료"
                                : "지원하기"
                            : "모집마감"}
                    </StickRecruitkBtn>{" "}
                </>
            ) : null}
        </>
    );
};

export default RecruitView;
