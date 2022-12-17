import Comment from "@/components/Comment";
import ScoreProgress from "@/components/ScoreProgress";
import StarScoreProgres from "@/components/StarScoreProgress";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IComment } from "../../../types/comment.types";

const ScoreLayoutContainer = styled.div`
    display: flex;
    background-color: white;
    margin-top: 2rem;
    padding: 3rem;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    .empty {
        width: 100%;
        text-align: center;
        font-size: 1.3rem;
        font-weight: 500;
    }
`;

export const ScoreWrapper = styled.div`
    display: flex;
    width: 8vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: black;
    gap: 1rem;

    h1 {
        font-size: 1.2rem;
    }
    .progress-star-score {
        font-size: 4rem;
        font-weight: 700;
    }
`;

const CommentLayout = styled.div`
    width: 22vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 1rem;
    .title {
        font-size: 2rem;
        font-weight: 700;
    }
    .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 15rem;
        overflow-y: auto;
    }
`;

const ScoreLayout = ({ coments }: { coments: IComment[] | [] }) => {
    const [mylevel, setMylevel] = useState<any[]>([]);
    const [max, setMax] = useState(-1);
    let [avg, setAvg] = useState(-1);
    useEffect(() => {
        if (coments.length > 0) {
            const init = [-1, 0, 0, 0, 0, 0];
            coments.forEach((com) => {
                init[com.score] += 1;
            });

            const avg =
                coments
                    .map((c) => c.score)
                    .reduce(
                        (sum: number, currValue: number) => (sum += currValue),
                        0
                    ) / coments.length;
            setAvg(avg);
            setMax(Math.max(...init));
            setMylevel(init);
        }
    }, []);

    return (
        <ScoreLayoutContainer>
            {coments.length !== 0 ? (
                <>
                    <ScoreWrapper>
                        <h1>팀원들의 평점</h1>
                        <p className="progress-star-score">{avg}</p>
                        <StarScoreProgres rating={(avg / 5) * 100} />
                    </ScoreWrapper>

                    <div
                        style={{ display: "flex", gap: "10px", width: "10vw" }}
                    >
                        <ScoreProgress
                            label="1점"
                            percent={(mylevel[1] / coments.length) * 100}
                            active={mylevel[1] === max}
                        />

                        <ScoreProgress
                            label="2점"
                            percent={(mylevel[2] / coments.length) * 100}
                            active={mylevel[2] === max}
                        />
                        <ScoreProgress
                            label="3점"
                            percent={(mylevel[3] / coments.length) * 100}
                            active={mylevel[3] === max}
                        />
                        <ScoreProgress
                            label="4점"
                            percent={(mylevel[4] / coments.length) * 100}
                            active={mylevel[4] === max}
                        />
                        <ScoreProgress
                            label="5점"
                            percent={(mylevel[5] / coments.length) * 100}
                            active={mylevel[5] === max}
                        />
                    </div>

                    <CommentLayout>
                        <h1 className="title">Comment</h1>
                        <div className="content">
                            {coments.map((comment, i) => {
                                return <Comment {...comment} />;
                            })}
                        </div>
                    </CommentLayout>
                </>
            ) : (
                <p className="empty">아직 받은 Comment가 없습니다.</p>
            )}
        </ScoreLayoutContainer>
    );
};

export default ScoreLayout;
