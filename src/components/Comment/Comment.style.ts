import styled from "@emotion/styled";

export const CommentContainer = styled.div`
    position: relative;
    min-height: 6rem;
    background: #ffffff;
    border: 2px solid #e6e6ee;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    padding-left: 5rem;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
    .day-label {
        color: gray;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export const EmojiContainer = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);

    width: 5rem;
    height: 5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .emoji-img {
        width: 2rem;
        height: 2rem;
    }
    .like-img {
        height: 60%;
    }
    .star-img {
        width: 1rem;
        height: 1rem;
    }
    .star-wrapper {
        margin-top: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
