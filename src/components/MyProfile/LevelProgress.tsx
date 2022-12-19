import {
    Progress,
    ProgressContainer,
    ProgressInfo,
    ProgressWrap,
} from "./LevelProgress.style";

interface Props {
    total?: number;
    current?: number;
    level?: number | string;
}

const LevelProgress = ({ total, current, level }: Props) => {
    return (
        <ProgressContainer>
            <ProgressWrap>
                {total && current ? (
                    <Progress
                        progress={
                            current < total ? (current / total) * 100 : 100
                        }
                    />
                ) : null}
            </ProgressWrap>
            <ProgressInfo>
                <p>{level}</p>
                <div style={{ display: "flex" }}>
                    <p className="profile-point">{current} </p>
                    <p> Points</p>
                </div>
            </ProgressInfo>
        </ProgressContainer>
    );
};

export default LevelProgress;
