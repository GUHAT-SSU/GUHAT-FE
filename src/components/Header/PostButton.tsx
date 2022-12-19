import AddButton from "@assets/plus.svg";
import { useNavigate } from "react-router-dom";
import { PostBtnWrap } from "./PostButton.style";
const PostButton = () => {
    const navigator = useNavigate();
    return (
        <PostBtnWrap
            onClick={() => {
                navigator("/recruit/post");
            }}
        >
            <p>모집글 작성</p>
            <img src={AddButton} alt="모집글 plus" />
        </PostBtnWrap>
    );
};

export default PostButton;
