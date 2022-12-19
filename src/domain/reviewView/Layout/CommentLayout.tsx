import CommentProgress from "@/components/Comment/CommentProgress/CommentProgress";
import LikeComment from "@/components/Comment/LikeComment/LikeComment";
import InputFiled from "@/components/InputBox/InputFiled";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import { createReviewComment } from "@/apis/review";
import MessageIcon from "@/assets/comment_review.png";
import DisLikeIcon from "@/assets/round_dislike.svg";
import LikeIcon from "@/assets/round_like.svg";
import MainButton from "@/components/Button";
import { loadingState } from "@/storage/recoil/loadingState";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

const CommentLayoutcontainer = styled.div`
    width: 100%;
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    padding-top: 10rem;
    gap: 5rem;
    margin-top: 3rem;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    .comment-input {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 3rem;
        input {
            padding: 2rem;
        }
    }
`;

const ProgressContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`;
const CommentProgessWrapper = styled.div`
    width: 40%;
    padding: 3rem;
`;

const CommnetListContainer = styled.div`
    width: 46%;
    max-height: 20rem;
    margin-right: 3rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
    gap: 0.5rem;
    padding-bottom: 1rem;
    .empty-comment {
        width: 50% !important;
        align-self: center;
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
        align-items: center;
        gap: 2rem;
    }
    .empty-img {
        width: 10rem;
    }
    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        position: sticky;
        top: 0;
        z-index: 50;
        background-color: white;
        padding: 1rem 0;
    }
`;

const EmojiContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    .like-btn {
        width: 2.5rem;
        height: 2.5rem;
        background: no-repeat;
        background-size: contain;
    }
    .submit-btn {
        border: 1px solid black;
        padding: 0.7rem 1rem;
        font-size: 1.2rem;
        font-weight: 600;
        border-radius: 1rem;
    }
`;

const CommentLayout = ({ ...data }) => {
    console.log("in comment props", data);
    const { id, lectureId } = useParams();
    const [loading, setLoading] = useRecoilState(loadingState);

    const [input, setInput] = useState("");
    const [likeCheck, setLikeCheck] = useState<null | string>(null);
    const [comments, setComment] = useState(data.comments);
    const [percent, setPercent] = useState(data.percent);
    const [canWrite, setCanWrite] = useState(data.canWrite);
    // setLoading(status !== "success");
    useEffect(() => {}, [likeCheck]);

    const onClickSubmit = () => {
        setLoading(true);
        const comment = {
            like: likeCheck,
            comment: input,
        };
        if (id && lectureId)
            createReviewComment(id!!, lectureId!!, comment).then((res) => {
                console.log(res);
                setLoading(false);
                window.location.reload();
            });
        setCanWrite(false);
    };

    return (
        <>
            {data ? (
                <>
                    {" "}
                    <CommentLayoutcontainer>
                        <ProgressContainer>
                            <CommentProgessWrapper>
                                <CommentProgress
                                    percent={
                                        comments && comments.length > 0
                                            ? (comments.filter(
                                                  (i: any) =>
                                                      i.status === "like"
                                              ).length /
                                                  comments.length) *
                                              100
                                            : 0
                                    }
                                    likeCount={
                                        comments && comments.length > 0
                                            ? comments.filter(
                                                  (i: any) =>
                                                      i.status === "like"
                                              ).length
                                            : 0
                                    }
                                />
                            </CommentProgessWrapper>

                            <CommnetListContainer>
                                {comments && comments.length > 0 ? (
                                    <>
                                        <h1>Comment</h1>
                                        {comments.map((com: any) => (
                                            <>
                                                <LikeComment
                                                    {...data.lecture}
                                                    {...com}
                                                />
                                            </>
                                        ))}
                                    </>
                                ) : (
                                    <div className="empty-comment">
                                        <img
                                            alt="댓글"
                                            className="empty-img"
                                            src={MessageIcon}
                                        />
                                        아직 작성된 댓글이 없습니다.
                                    </div>
                                )}
                            </CommnetListContainer>
                        </ProgressContainer>
                        {canWrite && !data.isOwner ? (
                            <div className="comment-input">
                                <InputFiled
                                    text={input}
                                    handler={setInput}
                                    hint="댓글 작성"
                                />
                                <EmojiContainer>
                                    <button
                                        onClick={() => setLikeCheck("like")}
                                        className="like-btn"
                                        style={{
                                            backgroundImage: `url(${LikeIcon})`,
                                            opacity: `${
                                                likeCheck === "like" ? 1 : 0.3
                                            }`,
                                        }}
                                    ></button>
                                    <button
                                        onClick={() => setLikeCheck("dislike")}
                                        className="like-btn"
                                        style={{
                                            backgroundImage: `url(${DisLikeIcon})`,
                                            opacity: `${
                                                likeCheck === "dislike"
                                                    ? 1
                                                    : 0.3
                                            }`,
                                        }}
                                    ></button>
                                    <MainButton
                                        clickListener={onClickSubmit}
                                        disabled={
                                            !(
                                                likeCheck !== null &&
                                                input.length !== 0
                                            )
                                        }
                                    >
                                        작성완료
                                    </MainButton>
                                </EmojiContainer>
                            </div>
                        ) : null}
                    </CommentLayoutcontainer>
                </>
            ) : null}
        </>
    );
};

export default CommentLayout;
