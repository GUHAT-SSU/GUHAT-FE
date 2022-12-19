import EditIcon from "@/assets/edit.svg";
import DefaultIcon from "@/assets/member_default2.svg";
import { modalState } from "@/storage/recoil/modalState";
import { userState } from "@/storage/recoil/userState";
import themes from "@/styles/themes";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";

const MyProfileWrapper = styled.div`
    padding: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    // background: ${themes.colors.black_500};
    background: rgba(230, 230, 238, 0.1);
    border-radius: 20px;
    min-height: 6rem;
    color: white;

    .nickname-content {
        display: flex;
        width: 100%;

        align-items: center;
        font-size: 1.2rem;
        margin: 1rem 0;
        margin-top: 2rem;
        .edit-btn {
            background: none;
            margin-left: 1.5em;
            padding: 0.5rem 0;
            border-radius: 1rem;
            align-self: flex-end;
            img {
                filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
                    saturate(0%) hue-rotate(131deg) brightness(105%)
                    contrast(102%);
            }
        }
    }
    .sub-content {
        color: ${themes.colors.gray_500};
    }
`;

const MyProfileImgWrapper = styled.div`
    position: relative;
    height: 5rem;

    .circle {
        width: 5rem;
        height: 5rem;
    }
    .main-circle {
        position: absolute;
        left: 0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 80px;
        background-image: ${`url(${DefaultIcon})`};
        background-color: ${themes.colors.gray_100};
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .sub-circle {
        position: absolute;
        left: 1.5rem;
        background: rgba(198, 231, 250, 0.6);
        border-radius: 80px;
    }

    .level-content {
        position: absolute;
        bottom: 0;
        left: 7rem;
        color: white;
    }
`;

interface Props {
    profileImg?: string;
    level: string | number;
    nickname: string;
    year: string;
    semester: string;
    major: string;
}

const Myprofile = ({ ...props }: Props) => {
    const onClickUpdateProfile = () => {
        setModalVisible(true);
    };

    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const userInfo = useRecoilValue(userState);
    return (
        <>
            {userInfo ? (
                <MyProfileWrapper>
                    <MyProfileImgWrapper>
                        <div className="circle sub-circle"></div>
                        <div
                            className="circle main-circle"
                            style={{
                                backgroundImage: `${
                                    userInfo.profileImg
                                        ? `url(${userInfo.profileImg})`
                                        : DefaultIcon
                                }`,
                                backgroundSize: "cover",
                            }}
                        ></div>
                        <p className="level-content">{userInfo!!.level!!}</p>
                    </MyProfileImgWrapper>
                    <p className="nickname-content">
                        {userInfo.nickname}
                        <button
                            className="edit-btn"
                            onClick={onClickUpdateProfile}
                        >
                            <img src={EditIcon} alt="수정하기" />
                        </button>
                    </p>
                    <p className="sub-content">
                        {userInfo.grade!!}학년 {userInfo.semester}학기
                    </p>
                    <p className="sub-content">{userInfo.major}</p>
                </MyProfileWrapper>
            ) : null}
        </>
    );
};

export default Myprofile;
