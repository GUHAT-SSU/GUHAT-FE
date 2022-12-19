import { loadSchedule } from "@/apis/recruit/post";
import { postValidation } from "@/apis/review";
import { modalState } from "@/storage/recoil/modalState";
import themes from "@/styles/themes";
import CloseIcon from "@assets/close.svg";
import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 15vw;
    font-size: 1.2rem;

    .load-schedule {
        margin-top: 3rem;
        align-self: center;
        border-radius: 2rem;
        background-color: ${themes.colors.blue};
        width: 20rem;
        color: white;
        padding: 1.3rem 2rem;

        :active {
            background-color: ${themes.colors.black_500};
        }
    }
    h1 {
        width: 80%;
        text-align: center;
        font-weight: 600;
    }

    h2 {
        font-weight: 400;
        color: gray;
        font-size: 1rem;
        padding: 1rem;
    }
    .modal-close-btn {
        position: absolute;
        width: 1rem;
        height: 1rem;
        top: 0;
        right: 0;
        background-repeat: no-repeat;
        background-size: contain;
    }
`;

const ScheduleLoadModal = () => {
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const { id } = useParams();
    const navigator = useNavigate();
    const onClickUpload = () => {
        setLoading(true);
        loadSchedule()
            .then((res) => {
                console.log(res);
                postValidation(id!!).then((res) => {
                    console.log(res);
                    setLoading(false);
                });
            })
            .catch((err) => {
                alert("유저 세션 만료 재로그인 해주세요");
                navigator("/login");
            });
    };

    return (
        <Container>
            <button
                className="modal-close-btn"
                style={{ backgroundImage: `url(${CloseIcon})` }}
                onClick={() => {
                    setModalVisible(false);
                    navigator("/lecture/" + id);
                }}
            ></button>

            <h1>최초 시간표 업로드시 </h1>
            <h1>요청 시간이 길어질 수 있습니다</h1>
            <h2>휴학중인 경우 리뷰 등록이 불가능합니다</h2>
            <button
                className="load-schedule"
                onClick={onClickUpload}
                disabled={loading}
            >
                시간표 불러오기
            </button>
        </Container>
    );
};

export default ScheduleLoadModal;
