import { updateProfile } from "@/apis/profile";
import CloseIcon from "@/assets/close.svg";
import DefaultIcon from "@/assets/member_default.svg";
import { modalState } from "@/storage/recoil/modalState";
import { userState } from "@/storage/recoil/userState";
import themes from "@/styles/themes";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import MainButton from "../Button";
import InputFiled from "../InputBox/InputFiled";

const ProfileContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    height: 25vw;
    justify-content: center;

    .modal-close-btn {
        position: absolute;
        width: 1rem;
        height: 1rem;
        top: 0;
        right: 0;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .input-wrapper {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

const MyProfileImgWrapper = styled.div<{ img?: any }>`
    position: relative;
    width: 12rem;
    display: flex;
    margin-left: 2rem;
    margin-bottom: 2rem;
    height: 12rem;
    .circle {
        width: 10rem;
        height: 10rem;
    }
    .main-circle {
        position: absolute;
        left: 0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 80px;
        ${({ img }) =>
            img
                ? `background-image : url(${img});`
                : `background-image : url( ${DefaultIcon});`}
        background-color : ${themes.colors.gray_100};
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .sub-circle {
        position: absolute;
        left: 2rem;
        background: rgba(198, 231, 250, 0.6);
        border-radius: 80px;
    }
`;

const ProfileModal = ({
    nickname,
    profileImg,
}: {
    nickname: string;
    profileImg?: string;
}) => {
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const [btnLoading, setBtnLoading] = useState(false);
    const [image, setImage] = useState<any | null>(null);
    const [input, setNickname] = useState(
        userInfo?.nickname ? userInfo?.nickname : ""
    );
    const [form, setProfileForm] = useState<File | null>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    const [pathFile, setPathFile] = useState<string[]>([]);

    useEffect(() => {
        console.log("userinfo", userInfo);
    }, [userInfo]);

    const changeInfo = (nickname: string, newImg: string | null) => {
        const newInfo = {
            ...userInfo!!,
            nickname: nickname,
        };
        if (newImg) newInfo.profileImg = newImg;
        setUserInfo({ ...newInfo });
    };

    const onClickSubmit = () => {
        setBtnLoading(true);
        const request = new FormData();
        if (form) {
            request.append("image", form);
        }
        updateProfile(request, input)
            .then((res) => {
                setBtnLoading(false);
                changeInfo(res.data.data.nickname, res.data.data.profileImg);
                alert("프로필 변경 완료!");
                setModalVisible(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onClickUplod = () => {
        if (fileRef) fileRef.current!!.click();
    };

    useEffect(() => {}, [pathFile]);
    const fileHandleChange = (e: any) => {
        const file = e.target.files[0];

        setProfileForm(file);
        setImage(URL.createObjectURL(file));
    };
    return (
        <ProfileContainer>
            <button
                className="modal-close-btn"
                style={{ backgroundImage: `url(${CloseIcon})` }}
                onClick={() => {
                    setModalVisible(false);
                }}
            ></button>

            <MyProfileImgWrapper img={image ? image : userInfo?.profileImg}>
                <div className="circle sub-circle"></div>
                <button
                    className="circle main-circle"
                    onClick={() => {
                        onClickUplod();
                    }}
                ></button>
                <input
                    ref={fileRef}
                    name="image"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={fileHandleChange}
                />
            </MyProfileImgWrapper>
            <div className="input-wrapper">
                <InputFiled text={input} handler={setNickname} />
                <MainButton
                    width="100%"
                    clickListener={onClickSubmit}
                    disabled={btnLoading}
                >
                    {btnLoading ? "수정 중" : "저장하기"}
                </MainButton>
            </div>
        </ProfileContainer>
    );
};

export default ProfileModal;
