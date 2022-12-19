import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const CommentProgressContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 12rem;
    width: 100%;
`;

export const LikeProgressWraper = styled.div`
    position: absolute;
    top: 11rem;
    height: 1rem;
    margin-left: 3rem;
    width: calc(100%);
    border-radius: 1rem;
    background-color: ${themes.colors.gray_100};
`;

export const LikeProgess = styled.div<{ percent: string }>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percent }) => percent};
    height: 1rem;
    border-radius: 1rem;

    background-color: ${themes.colors.black_500};
`;

export const LikeShadow = styled.div<{ percent: string }>`
    position: absolute;
    width: ${({ percent }) => percent};
    height: 10rem;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        360deg,
        #c6e7fa -3.25%,
        rgba(198, 231, 250, 0) 33.56%
    );
`;

export const LikePoint = styled.div<{ percent: string }>`
    z-index: 10;
    position: absolute;
    left: ${({ percent }) => percent};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    .like-wrapper {
        height: 2rem;
        display: flex;
        gap: 0.5rem;
        font-size: 2rem;
        p {
            color: ${themes.colors.gray_900};
        }
        h1 {
            color: ${themes.colors.black_500};
        }
    }

    .like-point-img {
        width: 6rem;
        height: 6rem;
    }
`;
