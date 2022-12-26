import { modalState } from "@/storage/recoil/modalState";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import styled from "@emotion/styled";

import MainButton from "../Button";
import InputTextArea from "../InputBox/InputTextArea";

import { writeMemberComment } from "@/apis/profile";
import AngryIcon from "@/assets/Angry.png";
import CloseIcon from "@/assets/close.svg";
import MessageIcon from "@/assets/comment_review.png";
import CryingIcon from "@/assets/Crying.png";
import HappyIcon from "@/assets/Happy.png";
import LoveIcon from "@/assets/Love.png";
import SmileIcon from "@/assets/Smiling.png";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const CommentLayoutcontainer = styled.div`
    position: relative;
    width: 40vw;
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    gap: 3rem;
    background-color: white;
    .modal-close-btn {
        position: absolute;
        width: 1rem;
        height: 1rem;
        top: 0;
        right: 0;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .comment-input {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 3rem;
        input {
            padding: 2rem;
        }

        h1 {
            text-align: center;
            font-size: 1.3rem;
            font-weight: 600;
            padding-bottom: 1rem;
        }
    }

    .message-image {
        width: 20%;
        height: 20%;
        align-self: center;
        margin-bottom: 2rem;
    }

    .rating-btn {
        align-self: center;
        text-align: center;
        margin-bottom: 2rem;
    }
`;

const EmojiContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    .like-btn {
        width: 3rem;
        height: 3rem;
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

const ProfileCommentModal = ({
    _canWrite,
    comment,
}: {
    _canWrite?: boolean;
    comment?: any;
}) => {
    const [input, setInput] = useState("");
    const [likeCheck, setLikeCheck] = useState<null | string>(null);
    const [canWrite, setCanWrite] = useState(true);
    const [rating, setRating] = useState(-1);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);

    const { id } = useParams();
    useEffect(() => {
        console.log(likeCheck);
    }, [likeCheck]);
    const onClickSubmit = () => {
        console.log(comment);
        const body = {
            emojiType: likeCheck ? parseInt(likeCheck) : 1,
            score: rating,
            comment: input,
        };
        writeMemberComment(body, id!!).then((res) => {
            console.log(res);
            setModalVisible(false);
            alert("작성 성공");
            window.location.reload();
        });
    };
    const handleRating = (rate: number) => {
        setRating(rate);

        // other logic
    };

    return (
        <CommentLayoutcontainer>
            <button
                className="modal-close-btn"
                style={{ backgroundImage: `url(${CloseIcon})` }}
                onClick={() => {
                    setModalVisible(false);
                }}
            ></button>
            {canWrite ? (
                <div className="comment-input">
                    <h1>어떤 팀플에 대한 리뷰를 남겨보세요</h1>
                    <img
                        className="message-image"
                        src={MessageIcon}
                        alt="message"
                    ></img>
                    <div className="rating-btn">
                        <Rating onClick={handleRating} size={30} />
                    </div>

                    <InputTextArea
                        text={input}
                        handler={setInput}
                        hint="댓글 작성"
                    />
                    <EmojiContainer>
                        <button
                            onClick={() => setLikeCheck("1")}
                            className="like-btn"
                            style={{
                                backgroundImage: `url(${LoveIcon})`,
                                opacity: `${likeCheck === "1" ? 1 : 0.3}`,
                                transform: `scale(${
                                    likeCheck === "1" ? 1.2 : 1
                                })`,
                            }}
                        ></button>

                        <button
                            onClick={() => setLikeCheck("2")}
                            className="like-btn"
                            style={{
                                backgroundImage: `url(${SmileIcon})`,
                                opacity: `${likeCheck === "2" ? 1 : 0.3}`,
                                transform: `scale(${
                                    likeCheck === "2" ? 1.2 : 1
                                })`,
                            }}
                        ></button>
                        <button
                            onClick={() => setLikeCheck("3")}
                            className="like-btn"
                            style={{
                                backgroundImage: `url(${HappyIcon})`,
                                opacity: `${likeCheck === "3" ? 1 : 0.3}`,
                                transform: `scale(${
                                    likeCheck === "3" ? 1.2 : 1
                                })`,
                            }}
                        ></button>
                        <button
                            onClick={() => setLikeCheck("4")}
                            className="like-btn"
                            style={{
                                backgroundImage: `url(${CryingIcon})`,
                                opacity: `${likeCheck === "4" ? 1 : 0.3}`,
                                transform: `scale(${
                                    likeCheck === "4" ? 1.2 : 1
                                })`,
                            }}
                        ></button>
                        <button
                            onClick={() => setLikeCheck("5")}
                            className="like-btn"
                            style={{
                                backgroundImage: `url(${AngryIcon})`,
                                opacity: `${likeCheck === "5" ? 1 : 0.3}`,
                                transform: `scale(${
                                    likeCheck === "5" ? 1.2 : 1
                                })`,
                            }}
                        ></button>
                        <MainButton
                            width="10rem"
                            clickListener={onClickSubmit}
                            disabled={
                                !(
                                    likeCheck !== null &&
                                    input.length !== 0 &&
                                    rating !== -1
                                )
                            }
                        >
                            작성완료
                        </MainButton>
                    </EmojiContainer>
                </div>
            ) : null}
        </CommentLayoutcontainer>
    );
};

export default ProfileCommentModal;
