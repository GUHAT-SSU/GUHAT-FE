import ProfileModal from "@/components/Modal/ProfileModal";
import MypageLayout from "@/domain/mypage/MypageLayout";
import { userState } from "@/storage/recoil/userState";
import { useEffect } from "react";

import { useRecoilState } from "recoil";
import APILayout from "../components/Layout/APILayout";
const MyPage = () => {
    const [userInfo, setUserInfo] = useRecoilState(userState);

    useEffect(() => {
        console.log("userinfo", userInfo);
    }, [userInfo]);

    return (
        <APILayout
            modal={
                <ProfileModal
                    nickname={userInfo?.nickname ? userInfo.nickname : "익명"}
                />
            }
        >
            <MypageLayout />
        </APILayout>
    );
};

export default MyPage;
