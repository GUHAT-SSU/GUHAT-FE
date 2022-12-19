import { removeCookieToken } from "@/storage/cookie";
import { userState } from "@/storage/recoil/userState";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { displayLevel } from "../../util/displayLevel";
import LevelProgress from "./LevelProgress";
import {
    MyProfileBgProgress,
    MyProfileBtnWrap,
    MyProfileImg,
    MyProfileInfoBtn,
    MyProfileInfoContainer,
    MyprofileinfoWrap,
    MyProfileLogOutBtn,
    MyProfileMainText,
    MyProfileSubText,
    MyProfileWrap,
} from "./MyProfile.style";
interface Props {
    nickName: string;
    name: string;
    semester: string;
    univ: string;
    major: string;
    level?: string;
}

const MyProfile = ({ ...props }) => {
    const total = 100;

    const userInfo = useRecoilValue(userState);
    const navgator = useNavigate();

    console.log(userInfo);

    return (
        <MyProfileWrap>
            <MyProfileBgProgress
                progress={(userInfo?.score ? userInfo.score : 0) / 100}
            />

            <MyProfileInfoContainer>
                <MyProfileImg
                    img={userInfo?.profileImg ? userInfo?.profileImg : null}
                />
                <MyprofileinfoWrap>
                    <p className="profile-number">{userInfo?.currentProject}</p>
                    <p className="profile-label">진행중인 팀플</p>
                </MyprofileinfoWrap>
                <MyprofileinfoWrap>
                    <p className="profile-number">4.4</p>
                    <p className="profile-label">팀원들의 평가</p>
                </MyprofileinfoWrap>
            </MyProfileInfoContainer>

            <MyProfileMainText>{userInfo?.nickname}</MyProfileMainText>
            <div style={{ marginTop: "1rem" }}></div>
            <MyProfileSubText>{userInfo?.name}</MyProfileSubText>
            <div style={{ marginTop: "1.5rem" }}>
                <MyProfileSubText>
                    {userInfo?.grade}학년 {userInfo?.semester}학기
                </MyProfileSubText>
                <MyProfileSubText>
                    {userInfo?.univ} {userInfo?.major}
                </MyProfileSubText>
            </div>
            <div style={{ marginTop: "2rem" }}>
                <MyProfileSubText>{}</MyProfileSubText>
            </div>
            <LevelProgress
                total={total}
                current={userInfo?.score ? userInfo.score : 0}
                level={displayLevel(userInfo?.level!!)}
            />
            <MyProfileBtnWrap>
                <MyProfileInfoBtn
                    onClick={() => {
                        navgator("/mypage");
                    }}
                >
                    내정보
                </MyProfileInfoBtn>
                <MyProfileLogOutBtn
                    onClick={() => {
                        alert("로그아웃");
                        removeCookieToken();
                        navgator("/login");
                    }}
                >
                    로그아웃
                </MyProfileLogOutBtn>
            </MyProfileBtnWrap>
        </MyProfileWrap>
    );
};

export default MyProfile;
