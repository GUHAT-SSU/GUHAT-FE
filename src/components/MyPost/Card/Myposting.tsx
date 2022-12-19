import { displayLevel } from "@/util/displayLevel";
import { useNavigate } from "react-router-dom";
import commentIcon from "../../../assets/comment.svg";
import thumbIcon from "../../../assets/thumbUp.svg";
import {
    MyPostContent,
    MyPostIconContainer,
    MyPostingBgImg,
    MyPosTitle,
    MyPostLecturenWrap,
    MyPostWrap,
} from "./Myposting.style";
import Profile from "./Profile";

const Myposting = ({ ...props }) => {
    console.log(props);
    const navigator = useNavigate();
    const onClickItem = (type: string) => {
        if (type === "lectureReview") {
            const lectureId = props.data.lecture.lectureId;
            const id = props.data.id;
            navigator(`/review/${id}/${lectureId}/`);
        } else {
            const id = props.data.id;
            navigator(`/recruit/${id}`);
        }
    };
    return (
        <>
            <MyPostWrap onClick={() => onClickItem(props.type)}>
                <MyPosTitle>{props.data.title}</MyPosTitle>
                <MyPostLecturenWrap>
                    <p>{props.data.lecture?.name}/ </p>
                    <p className="professor">
                        {" "}
                        {props.data.lecture?.professors?.join()}
                    </p>
                </MyPostLecturenWrap>
                <MyPostContent>{props.data.detail}</MyPostContent>
                {props.type === "lectureReview" ? (
                    <MyPostIconContainer>
                        <MyPostLecturenWrap>
                            <img src={thumbIcon} alt="좋아요" />
                            <p>
                                {props.data.likeCount
                                    ? props.data.likeCount
                                    : 0}
                            </p>
                        </MyPostLecturenWrap>
                        <MyPostLecturenWrap>
                            <img src={commentIcon} alt="댓글" />
                            <p>
                                {props.data?.commentCount
                                    ? props.data.commentCount
                                    : 0}
                            </p>
                        </MyPostLecturenWrap>
                    </MyPostIconContainer>
                ) : null}

                <Profile
                    profileImg={props.data?.writer?.profileImg}
                    level={displayLevel(props.data?.writer?.level)}
                    nickname={props.data?.writer?.nickname}
                />
                <MyPostingBgImg type={props.type} />
            </MyPostWrap>
        </>
    );
};

export default Myposting;
