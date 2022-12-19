import IconMenu from "@/assets/menu.svg";
import IconList from "@/assets/profile_my_work.png";
import IconReview from "@/assets/recruit_icon.svg";
import themes from "@/styles/themes";
import styled from "@emotion/styled";

const SidebarLayoutContainer = styled.div`
    z-index: 0;
    position: sticky;
    top: 7rem;
    left: 10%;
    background: ${themes.colors.black_500};
    height: 80vh;
    width: 23rem;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    padding: 6rem 0rem;

    .sub-label {
        width: 100%;

        padding-right: 3rem;
        background: none;
        display: flex;
        justify-content: right;
        color: white;
        gap: 0.5rem;
        margin-top: 1.5rem;
        font-size: 1.1rem;
        font-weight: 600;
        :hover {
            transition-duration: 0.3s;
            transform: scale(1.2) translate(-30px, 0);
        }
    }
`;

const LectureWrpper = styled.div`
    position: relative;
    padding: 3rem;
    display: flex;
    width: 16rem;
    flex-direction: column;
    gap: 1rem;
    color: white;
    padding: 1rem;
    margin-top: 1rem;
    margin-right: 2rem;

    p {
        padding-left: 2rem;
        font-size: 1.3rem;
    }
    .lecture-title {
        font-size: 1.8rem;
        font-weight: 500;
    }

    .lecture-bar {
        position: absolute;
        left: 0;
        top: 0;
        width: 0.8rem;
        height: 100%;
        background: rgba(230, 230, 238, 0.1);
        border-radius: 12px;
    }
`;

const SidebarLabel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 1.2rem;
    margin-top: 8rem;
    margin-bottom: 1rem;
    background: rgba(230, 230, 238, 0.1);
    width: 100%;
    padding: 1.5rem;
    color: white;
`;

interface Props {
    lecture?: any;
    tabController: (tab: string) => void;
}

const SidebarLayout = ({ lecture, tabController }: Props) => {
    return (
        <SidebarLayoutContainer>
            <LectureWrpper>
                <p className="lecture-title">
                    {lecture.name.substring(0, lecture.name.indexOf("("))}
                </p>
                <p>
                    {lecture.name.substring(
                        lecture.name.indexOf("("),
                        lecture.name.length
                    )}
                </p>
                {lecture.professor.map((p: any) => (
                    <p>{p}</p>
                ))}
                <div className="lecture-bar"></div>
            </LectureWrpper>
            <SidebarLabel>
                팀플모집
                <img src={IconMenu} alt="메뉴아이콘" />
            </SidebarLabel>
            <button
                className="sub-label"
                onClick={() => {
                    tabController("main");
                }}
            >
                <img src={IconReview} alt="모집글조회"></img>모집글 조회
            </button>

            <SidebarLabel>
                팀플후기
                <img src={IconMenu} alt="메뉴아이콘" />
            </SidebarLabel>

            <button
                className="sub-label"
                onClick={() => {
                    tabController("review");
                }}
            >
                <img src={IconList} alt="리뷰아이콘"></img>팀플리뷰
            </button>
        </SidebarLayoutContainer>
    );
};

export default SidebarLayout;
