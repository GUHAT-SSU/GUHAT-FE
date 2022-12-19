import Banner from "@/assets/banner_main.png";
import themes from "@/styles/themes";
import styled from "@emotion/styled";
export const BannerWrap = styled.div`
    position: relative;
    width: 100%;
    height: 40vh;
    overflow: hidden;
    /* padding: 5rem; */
    margin: 0rem;
    margin-top: 6rem;
    border-radius: 1rem;
    /* 
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */

    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -10%;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    .more-btn {
        position: absolute;
        bottom: 4rem;
        right: 5rem;
        padding: 0.8rem 3rem;
        background-color: ${themes.colors.black_500};
        color: white;
        border-radius: 2rem;
        background-image: none;
        font-size: 1rem;
    }
`;
