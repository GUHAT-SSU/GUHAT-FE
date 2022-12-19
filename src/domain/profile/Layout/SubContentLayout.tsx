import { updateDetail } from "@/apis/profile";
import { loadingState } from "@/storage/recoil/loadingState";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";
import PersonalityList from "../List/PersonalityList";
import ChipList from "../List/SkilChipList";
import TeamHistoryList from "../List/TeamHistoryList";
import PortFolioLayout from "./PortFolioLayout";
const SubContentLayoutContainer = styled.div<{ mode: number }>`
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem 1rem;
    padding: 3rem;
    margin-top: 2rem;
    background-color: white;
    ${({ mode }) =>
        mode
            ? `background: #E6E6EE;
border: 2px solid #999999; `
            : ``}
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    .content-label {
        font-weight: 700;
        margin-bottom: 2rem;
        font-size: 1.3rem;
        margin-top: 2rem;
    }
    .content-wrapper {
        width: calc(50% - 1rem);
        max-width: 40%;
    }

    .prevent-click {
        button {
            cursor: ${({ mode }) =>
                (mode ? "not-allowed" : "click") + "!important"};
        }
    }
`;

const EditWrapper = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 2.4rem !important;
`;

const SubContentLayout = ({ ...props }) => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [personality, setPersonality] = useState(props.personality);
    const [skill, setSkill] = useState(props.skill);
    const MODE_VIEW = 0;
    const MODE_EDIT = 1;
    const [mode, setMode] = useState(MODE_VIEW);

    const onClickPersonality = (progress: number, index: number) => {
        const newArray = [...personality];
        newArray[index] = progress;
        setPersonality(newArray);
    };

    const onClickSubmit = () => {
        setMode((prev) => (prev ? MODE_VIEW : MODE_EDIT));
        updateDetail(skill, personality).then((res) => {
            console.log(res);
        });
    };

    return (
        <SubContentLayoutContainer mode={mode}>
            <div className="content-wrapper">
                <h1 className="content-label">PORTFOLIO</h1>
                <PortFolioLayout mode={mode} files={props.files} />
            </div>
            <div className="content-wrapper">
                <h1 className="content-label">SKILL</h1>
                <ChipList
                    mode={mode}
                    list={skill}
                    handler={(list) => {
                        setSkill(list);
                    }}
                />
            </div>
            <div className="content-wrapper">
                <h1 className="content-label">TEAM HISTORY</h1>
                <TeamHistoryList list={props.history} />
            </div>
            <div className="content-wrapper ">
                <h1 className="content-label">PERSONALITY</h1>
                <PersonalityList
                    mode={mode}
                    progress={personality[0]}
                    option={["안전추구형", "모험추구형"]}
                    clickListener={(p) => {
                        onClickPersonality(p, 0);
                    }}
                />
                <PersonalityList
                    mode={mode}
                    progress={personality[1]}
                    option={["업무중심형", "관계중심형"]}
                    clickListener={(p) => {
                        onClickPersonality(p, 1);
                    }}
                />
                <PersonalityList
                    mode={mode}
                    progress={personality[2]}
                    option={["리더형", "팔로워형"]}
                    clickListener={(p) => {
                        onClickPersonality(p, 2);
                    }}
                />
            </div>
        </SubContentLayoutContainer>
    );
};

export default SubContentLayout;
