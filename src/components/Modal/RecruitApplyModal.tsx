import { requestApply } from "@/apis/recruit/apply";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import CheckIcon from "@assets/check.svg";
import CloseIcon from "@assets/close.svg";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
    RecruitApplyButton,
    RecruitApplyGroupItem,
    RecuitApplyModalContainer,
} from "./RecruitApplyModal.styled";
const RecruitApplyModal = ({ list }: { list: any[] }) => {
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [loading, setLoading] = useRecoilState(loadingState);
    const { id } = useParams();
    const [checkedRoleId, setRoleId] = useState<null | string | number>(null);

    const onClickSubmit = () => {
        if (checkedRoleId) requestApply(checkedRoleId, id!!);
        setLoading(true);
        setTimeout(() => {
            alert("지원완료");
            setLoading(false);
            setModalVisible(false);
            window.location.reload();
        }, 2000);
    };

    return (
        <RecuitApplyModalContainer>
            <button
                className="modal-close-btn"
                style={{ backgroundImage: `url(${CloseIcon})` }}
                onClick={() => {
                    setModalVisible(false);
                }}
            ></button>
            <h1>지원 분야를 선택해주세요</h1>
            {list.map((item, index) => {
                return (
                    <RecruitApplyGroupItem
                        disabled={
                            checkedRoleId !== null &&
                            checkedRoleId === item.roleId
                        }
                        onClick={() => {
                            setRoleId(item.roleId);
                        }}
                    >
                        {item.title}
                        <div
                            className={`${
                                checkedRoleId !== null &&
                                checkedRoleId === item.roleId
                                    ? "modal-check-img"
                                    : ""
                            }`}
                            style={{ backgroundImage: `url(${CheckIcon})` }}
                        ></div>
                    </RecruitApplyGroupItem>
                );
            })}
            <RecruitApplyButton
                disabled={!loading && checkedRoleId === null}
                onClick={onClickSubmit}
            >
                지원하기
            </RecruitApplyButton>
        </RecuitApplyModalContainer>
    );
};

export default RecruitApplyModal;
