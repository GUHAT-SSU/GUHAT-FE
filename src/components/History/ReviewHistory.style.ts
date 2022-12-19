import themes from "@/styles/themes";
import ReviewThumb from "@assets/review_thumb.svg";
import styled from "@emotion/styled";
export const ReviewHistoryContainer = styled.button`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    color: black;
    padding: 3rem;
    padding-bottom: 5rem;
    border-radius: 1rem;
    background-color: white;
    gap: 1rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;

    .recruit-title {
        font-weight: 600;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        .edit-img {
            width: 1.2rem;
        }
    }

    .recruit-sub-title {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
        h1 {
            font-weight: 600;
        }
    }
    .recruit-day {
        position: absolute;
        font-weight: 600;
        bottom: 1rem;
        right: 2rem;
    }

    .recruit-content {
        width: 80%;
        max-height: 4.5rem;
        overflow: hidden;
        line-height: 1.5rem;
        text-align: left;
    }
`;
export const ReviewTagThumb = styled.div`
    z-index: 10;
    position: absolute;
    top: 2.5rem;
    right: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    background-image: ${`url(${ReviewThumb})`};
    background-size: contain;
    background-repeat: no-repeat;
`;

export const ReviewLikeCount = styled.p`
    z-index: 10;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: white;
`;

export const ReviewLikeTagWrap = styled.div`
    position: absolute;
    width: 6rem;
    height: 6rem;
    top: 0px;
    right: 0px;
    border-radius: 0 1rem;
    border-top: 5.5rem solid ${themes.colors.black_500};
    border-bottom: 5.5rem solid transparent;
    border-right: 5.5rem solid ${themes.colors.black_500};
    border-left: 5.5rem solid transparent;
    filter: drop-shadow(5px 5px 3px #333);
    z-index: 0;
    overflow: hidden;
    /* box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3); */
    //transform: rotate(-180deg);
`;
