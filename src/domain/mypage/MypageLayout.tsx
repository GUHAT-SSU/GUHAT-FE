import { getProfile } from "@/apis/profile";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import { userState } from "@/storage/recoil/userState";
import { useEffect, useState } from "react";
import { useQueries } from "react-query";
import { useRecoilState } from "recoil";
import { getPortfolio } from "../../apis/profile/index";
import AboutMeLayout from "./Layout/AboutMeLayout";
import LectureHistoryLayout from "./Layout/LectureHistoryLayout";
import ReviewHistoryLayout from "./Layout/ReviewHistoryLayout";
import ScoreLayout from "./Layout/ScoreLayout";
import SidebarLayout from "./Layout/SidebarLayout";
import SubContentLayout from "./Layout/SubContentLayout";
import {
    MypageContentLayout,
    MypageLayoutContainer,
} from "./MypageLayout.style";
const MypageLayout = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const [myProfile, setProfile] = useState(null);

    const result = useQueries([
        {
            queryKey: ["my-portfolio"],
            queryFn: () => getPortfolio(),
            onSuccess: (data: any) => {
                setProfile(data);
            },
        },

        {
            queryKey: ["getUserinfo"],
            queryFn: () => getProfile(),
            onSuccess: (data: any) => {
                setUserInfo(data);
            },
        },
    ]);
    useEffect(() => {
        setLoading(result.some((result) => result.isLoading));
    }, [result]);
    useEffect(() => {
        setModalVisible(false);
    }, []);

    const [tab, setTab] = useState("main");

    const getTabPage = () => {
        switch (tab) {
            case "main":
                return (
                    <>
                        <MypageContentLayout>
                            <AboutMeLayout
                                {...result[0].data}
                                profileImg={userInfo?.profileImg}
                                nickname={userInfo?.nickname}
                            />
                            <ScoreLayout comments={result[0].data.comments} />
                            <SubContentLayout {...result[0].data} />
                        </MypageContentLayout>
                    </>
                );
            case "review":
                return <ReviewHistoryLayout />;

            case "recruit":
                return <LectureHistoryLayout />;
        }
    };

    return (
        <>
            {userInfo !== null && myProfile !== null ? (
                <MypageLayoutContainer>
                    <SidebarLayout profile={myProfile} tabController={setTab} />
                    {getTabPage()}
                </MypageLayoutContainer>
            ) : null}
        </>
    );
};

export default MypageLayout;
