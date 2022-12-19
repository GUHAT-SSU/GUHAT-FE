import { updateProfileMode } from "@/apis/profile";
import IconMenu from "@/assets/menu.svg";
import Toggle from "@/components/Toggle";
import themes from "@/styles/themes";
import { debounce } from "@/util/debounce";
import styled from "@emotion/styled";
import { useState } from "react";
import IconList from "../../../assets/profile_my_work.png";
import IconReview from "../../../assets/profile_review_icon.png";
import MyProfile from "./Myprofile";

const SidebarLayoutContainer = styled.div`
    z-index: 20;
    position: fixed;
    top: 6rem;
    left: 10%;
    background: ${themes.colors.black_500};
    min-height: 60vh;
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

const ToggleWrpper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    color: white;
    padding: 1rem;
    margin-top: 1rem;
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
    profile?: any;
    tabController: (tab: string) => void;
}

const SidebarLayout = ({ profile, tabController }: Props) => {
    const [isPublic, setPublic] = useState(profile.mode === "public");

    const toggleHandler = (_isPublic: boolean) => {
        debounce(updateProfileMode(_isPublic ? "public" : "private"), 500);
    };

    return (
        <SidebarLayoutContainer>
            <div style={{ padding: "0rem 2rem", width: "90%" }}>
                <MyProfile {...profile} />
            </div>
            <ToggleWrpper>
                <Toggle
                    listener={(mode) => {
                        setPublic(mode);
                        toggleHandler(mode);
                    }}
                    init={isPublic}
                />
            </ToggleWrpper>

            <SidebarLabel>
                참여이력
                <img src={IconMenu} alt="참여이력" />
            </SidebarLabel>
            <button
                className="sub-label"
                onClick={() => {
                    tabController("main");
                }}
            >
                <img src={IconReview} alt="홈"></img>메인
            </button>
            <button
                className="sub-label"
                onClick={() => {
                    tabController("recruit");
                }}
            >
                <img src={IconReview} alt="내팀플"></img>강의팀플
            </button>

            <button
                className="sub-label"
                onClick={() => {
                    tabController("review");
                }}
            >
                <img src={IconList} alt="리뷰아이콘"></img>팀플리뷰
            </button>
            <SidebarLabel>
                참여이력
                <img src={IconMenu} alt="참여이력" />
            </SidebarLabel>
        </SidebarLayoutContainer>
    );
};

export default SidebarLayout;
