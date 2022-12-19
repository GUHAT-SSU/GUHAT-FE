import { getMemberProfile } from "@/apis/profile";
import MainButton from "@/components/Button";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import { userState } from "@/storage/recoil/userState";
import { useEffect, useState } from "react";
import { useQueries } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import AboutMeLayout from "./Layout/AboutMeLayout";
import ScoreLayout from "./Layout/ScoreLayout";
import SubContentLayout from "./Layout/SubContentLayout";
import {
    MypageContentLayout,
    MypageLayoutContainer,
} from "./ProfilepageLayout.style";
const ProfilePageLayout = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const [myProfile, setProfile] = useState(null);

    const { id } = useParams();

    const result = useQueries([
        {
            queryKey: ["member-portfolio", id],
            queryFn: () => getMemberProfile(id!!),
            onSuccess: (data: any) => {
                console.log("남의 프로필조회", data);
            },
        },
    ]);
    useEffect(() => {
        setLoading(result.some((result) => result.isLoading));
    }, [result]);
    useEffect(() => {
        setModalVisible(false);
    }, []);

    return (
        <>
            {!loading ? (
                <MypageLayoutContainer>
                    <MypageContentLayout>
                        <AboutMeLayout {...result[0].data} />
                        <ScoreLayout coments={result[0].data.commentList} />
                        <SubContentLayout {...result[0].data} />
                        <div className="review-btn">
                            {result[0].data.isWritten === false ? (
                                <MainButton
                                    width="100%"
                                    clickListener={() => {
                                        setModalVisible(true);
                                    }}
                                >
                                    리뷰 남기기
                                </MainButton>
                            ) : null}
                        </div>
                        {/* <CommentLayout {...comment} reviewId={0} /> */}
                    </MypageContentLayout>
                </MypageLayoutContainer>
            ) : null}
        </>
    );
};

export default ProfilePageLayout;
