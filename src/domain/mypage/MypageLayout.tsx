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
        //setLoading(false);
        setModalVisible(false);
    }, []);
    setLoading(result.some((result) => result.isLoading));
    useEffect(() => {
        console.log("재로딩", loading);
    }, [loading]);

    const UnsmileEmoji = "../../assets/unsmile_emoji.png";
    const coments: any[] = [
        {
            day: "8일",
            score: 5,
            content: "최고에요",
            emoji: UnsmileEmoji,
        },
        {
            day: "8일",
            score: 5,
            content: "최고에요",
            emoji: UnsmileEmoji,
        },
        {
            day: "8일",
            score: 2,
            content: "최고에요",
            emoji: UnsmileEmoji,
        },
        {
            day: "8일",
            score: 3,
            content: "최고에요",
            emoji: UnsmileEmoji,
        },
    ];

    const [tab, setTab] = useState("main");

    const getTabPage = () => {
        switch (tab) {
            case "main":
                return (
                    <>
                        <MypageContentLayout>
                            <AboutMeLayout
                                {...result[0].data}
                                nickname={userInfo?.nickname}
                            />
                            <ScoreLayout coments={coments} />
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
        <MypageLayoutContainer>
            <SidebarLayout profile={profile} tabController={setTab} />
            {getTabPage()}
        </MypageLayoutContainer>
    );
};

export default MypageLayout;
