import DisLikeIcon from "@/assets/round_dislike.svg";
import LikeIcon from "@/assets/round_like.svg";
import MainButton from "@/components/Button";
import InputFiled from "@/components/InputBox/InputFiled";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const CommentLayoutcontainer = styled.div`
    width: 100%;
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 6rem;
    padding-top: 3rem;
    margin-bottom: 6rem;
    margin-top: 2rem;
    gap: 3rem;
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

interface Props {
    reviewId: number | string;
    canWrite: boolean;
    comments: any[];
}

const CommentLayout = ({ ...props }: Props) => {
    const [input, setInput] = useState("");
    const [likeCheck, setLikeCheck] = useState<null | string>(null);
    const [comments, setComment] = useState(props.comments);
    const [percent, setPercent] = useState(
        (comments.filter((i) => i.isLike).length / comments.length) * 100
    );

    const [canWrite, setCanWrite] = useState(props.canWrite);

    useEffect(() => {
        console.log(likeCheck);
    }, [likeCheck]);
    const onClickSubmit = () => {
        const comment = {
            reviewId: parseInt(props.reviewId.toString()),
            isLike: likeCheck === "like",
            comment: input,
        };
        console.log(comment);
        setCanWrite(false);
        alert(comment);
    };

    return (
        <CommentLayoutcontainer>
            {canWrite ? (
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
                                opacity: `${likeCheck === "like" ? 1 : 0.3}`,
                            }}
                        ></button>
                        <button
                            onClick={() => setLikeCheck("dislike")}
                            className="like-btn"
                            style={{
                                backgroundImage: `url(${DisLikeIcon})`,
                                opacity: `${likeCheck === "dislike" ? 1 : 0.3}`,
                            }}
                        ></button>
                        <MainButton
                            clickListener={onClickSubmit}
                            disabled={
                                !(likeCheck !== null && input.length !== 0)
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

export default CommentLayout;
