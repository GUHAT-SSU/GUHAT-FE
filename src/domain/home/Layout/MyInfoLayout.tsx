import PostImg from "@/assets/post.png";
import { userState } from "@/storage/recoil/userState";
import MyProfile from "@components/MyProfile/MyProfile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import MyPostingList from "../List/MyPostingList";
import { EmptyHistory, MyInfoWrapper } from "./MyInfoLayout.style";

const MyInfoLayout = ({ ...props }) => {
    const [myPosts, setPosts] = useState(props.list);
    const list: any[] = [];
    const userInfo = useRecoilValue(userState);
    const navigator = useNavigate();
    return (
        <>
            {userInfo ? (
                <MyInfoWrapper>
                    <MyProfile
                        nickName={userInfo?.nickname}
                        name={userInfo?.name!!}
                        semester={`${userInfo.grade}학년 ${userInfo.semester}학기 수강자`}
                        major={`${userInfo.major}`}
                        univ={`${userInfo.univ}`}
                        {...userInfo}
                    />
                    {myPosts && myPosts.length > 0 ? (
                        <MyPostingList
                            postList={myPosts}
                            nickName={userInfo?.nickname}
                        />
                    ) : (
                        <EmptyHistory>
                            <p>참여 이력이 없습니다</p>
                            <img src={PostImg} alt="emptypost" />
                            <button
                                className="post-btn"
                                onClick={() => {
                                    navigator("/recruit/post");
                                }}
                            >
                                팀원 모집하기
                            </button>
                        </EmptyHistory>
                    )}
                </MyInfoWrapper>
            ) : null}
        </>
    );
};

export default MyInfoLayout;
