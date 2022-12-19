import {
    Progress,
    ProgressContainer,
    ProgressText,
    ProgressWrap,
} from "./ProgressBar.style";

interface Props {
    total?: number;
    current?: number;
}

const ProgressBar = ({ total, current }: Props) => {
    console.log("current", current);
    return (
        <ProgressContainer>
            <ProgressWrap>
                {total && current ? (
                    <Progress progress={(current / total) * 100} />
                ) : null}
            </ProgressWrap>
            {total !== undefined && current !== undefined ? (
                <ProgressText>{total - current}명 남았어요!</ProgressText>
            ) : null}
        </ProgressContainer>
    );
};

export default ProgressBar;
