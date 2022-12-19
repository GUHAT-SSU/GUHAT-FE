import Review from "@/components/MyPost/Card/Myposting";
import { MyPostingContainer, MyPostingListWrapper } from "./MyPosting.style";

interface Props {
    nickName?: string;
    postList?: any[];
}
const MyPostingList = ({ postList, nickName }: Props) => {
    return (
        <MyPostingContainer>
            <div style={{ display: "flex", paddingLeft: "1rem" }}>
                <p className="myinfo" id="myinfo-nickname">
                    {nickName}님
                </p>
                <p className="myinfo">이 올린 글</p>
            </div>

            <MyPostingListWrapper>
                {postList
                    ? postList.map((post, idx) => {
                          return <Review {...post} />;
                      })
                    : null}
            </MyPostingListWrapper>
        </MyPostingContainer>
    );
};

export default MyPostingList;
