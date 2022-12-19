import { getHomeRecruitList } from "@/apis/recruit/list";
import { getRecentReviews as getHomeReviewList } from "@/apis/review";
import APILayout from "@/components/Layout/APILayout";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import { userState } from "@/storage/recoil/userState";
import Banner from "@domain/home/Banner/Banner";
import MyInfoLayout from "@domain/home/Layout/MyInfoLayout";
import { useEffect } from "react";
import { useQueries } from "react-query";
import { useRecoilState } from "recoil";
import { getMyAllPost } from "../apis/home/index";
import { getProfile } from "../apis/profile/index";
import RecruitingLayout from "../domain/home/Layout/RecruitingLayout";
import ReviewLayout from "../domain/home/Layout/ReviewLayout";

const Home = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const result = useQueries([
        {
            queryKey: ["getRecruits", userInfo?.id],
            queryFn: () => getHomeRecruitList(),
        },

        {
            queryKey: ["getUserinfo", userInfo?.id],
            queryFn: () => getProfile(),
            onSuccess: (data: any) => {
                setUserInfo(data);
            },
        },
        {
            queryKey: ["getReviews", userInfo?.id],
            queryFn: () => getHomeReviewList(),
        },
        {
            queryKey: ["getMyAllPost", userInfo?.id],
            queryFn: () => getMyAllPost(),
            onSuccess: (data: any) => {
                console.log("all", data);
            },
        },
    ]);
    console.log(result[0].data);

    useEffect(() => {
        setModalVisible(false);
        console.log(process.env.REACT_APP_BASE_URL);
    }, []);

    setLoading(result.some((result) => result.isLoading));

    return (
        <>
            <APILayout>
                <Banner />
                {!loading ? (
                    <>
                        {" "}
                        <MyInfoLayout list={[...result[3].data?.data.data]} />
                        <div style={{ width: "100%", height: "7vh" }}></div>
                        {result[0].data ? (
                            <RecruitingLayout
                                list={result[0].data?.data.data}
                            />
                        ) : null}
                        <div style={{ width: "100%", height: "5vh" }}></div>
                        <ReviewLayout list={result[2].data?.data.data} />
                        <div style={{ width: "100%", height: "10vh" }}></div>
                    </>
                ) : null}
            </APILayout>
        </>
    );
};

export default Home;
