import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    width: 2rem;
    position: relative;
    p {
        color: #999999;
        width: 10rem;
    }
`;

const PrgoressWrapper = styled.div`
    position: relative;
    width: 1.2rem;
    height: 8rem;
    border-radius: 0.7rem;
    background-color: #e6e6ee;
    display: flex;
    flex-direction: column;
`;

const Progress = styled.div<{ progress?: string | number; active?: boolean }>`
    position: absolute;
    width: 1.2rem;
    border-radius: 0.7rem;
    ${({ active }) =>
        active ? `background: #6cc9ff;  ` : `background:#999999;`};
    ${({ progress }) =>
        progress ? `height : ${progress}% ; bottom : 0;` : ``};
`;

interface Props {
    label?: string;
    percent: number;
    active?: boolean;
}
const ScoreProgress = ({ ...props }: Props) => {
    return (
        <Container>
            <PrgoressWrapper>
                <Progress progress={props.percent} active={props.active} />
            </PrgoressWrapper>
            <p>{props.label}</p>
        </Container>
    );
};

export default ScoreProgress;
