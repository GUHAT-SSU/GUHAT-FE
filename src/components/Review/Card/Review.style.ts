import themes from "@/styles/themes";
import styled from "@emotion/styled";

import ReviewThumb from "@assets/review_thumb.svg";

export const ReviewContainer = styled.button`
    z-index: 20;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% / 3);
    border-radius: 1rem;
    background-color: white;
    padding: 2.54rem;
    overflow: hidden;
    /* box-shadow: 12px 12px 0px #999999; */

    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    :active {
        filter: brightness(0.8);
        box-shadow: none;
    }
    :hover {
        transition-duration: 0.4s;
        transform: translate(0, -20px) scale(1.01);
    }
`;

export const ReviewTitleWrap = styled.div`
    min-height: 12rem;
    padding-top: 4rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: radial-gradient(
        24.49% 24.49% at 34.48% 50%,
        #c6e7fa 0%,
        rgba(198, 231, 250, 0) 100%
    );
`;

export const ReviewTitle = styled.p`
    font-weight: 600;
    font-size: 1.6rem;
    text-align: left;
    width: 90%;
    color: ${themes.colors.black_500};
    text-align: left;
`;

export const ReviewContent = styled.p`
    font-weight: 400;
    font-size: 1.2rem;
    align-items: center;
    height: 10rem;
    overflow: hidden;
    line-height: 1.8rem;
    padding-bottom: 4rem;
    color: #9a9a9a;
    text-align: left;
`;
export const ReviewProfileInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    .lecture-info {
        color: ${themes.colors.gray_700};
    }
`;

export const ReviewLecturenWrap = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align: left;
    gap: 0.3rem;
    margin: 1rem 0;
    font-size: 1.2rem;
    color: ${themes.colors.gray_700};
`;

export const ReviewTagThumb = styled.div`
    z-index: 10;
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
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
    width: 5rem;
    height: 5rem;
    top: 0px;
    right: 0px;
    border-radius: 0 1rem;
    border-top: 6rem solid ${themes.colors.black_500};
    border-bottom: 6rem solid transparent;
    border-right: 6rem solid ${themes.colors.black_500};
    border-left: 6rem solid transparent;
    filter: drop-shadow(5px 5px 3px #333);
    z-index: 0;
    overflow: hidden;
    /* box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3); */
    //transform: rotate(-180deg);
`;
