import themes from "@/styles/themes";
import DefaultIcon from "@assets/member_default.svg";
import styled from "@emotion/styled";
export const MyProfileWrap = styled.div`
    position: relative;
    display: flex;
    min-width: 25rem;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 5rem 0rem;
    padding-bottom: 0;
    background: #303644;
    color: ${themes.colors.gray_100};
    box-shadow: 8px 8px 0px #999999;
    border-radius: 1rem;
`;

export const MyProfileBgProgress = styled.div<{ progress?: number }>`
    width: ${({ progress }) =>
        progress
            ? progress === 1
                ? `100%`
                : `calc((100% - 5rem) * ${progress} + 2.5rem)`
            : `0%`};
    max-width: 100%;
    position: absolute;
    z-index: 1;
    height: calc(100% - 4rem);
    top: 0;
    background: linear-gradient(
            269.66deg,
            rgba(255, 255, 255, 0.1) -48.44%,
            rgba(255, 255, 255, 0) 61.89%
        ),
        rgba(15, 52, 114, 0.05);

    box-shadow: none;
`;

export const MyProfileImg = styled.div<{ img?: any | null }>`
    width: 6rem;
    height: 6rem;
    padding: 1rem 0;
    border-radius: 6.25rem;
    background-color: white;
    ${({ img }) =>
        img
            ? `background-image : url(${img});`
            : `background-image : url( ${DefaultIcon});`}
    /* background-image: ${(img) => (img ? `url(${img})` : null)}; */
    background-size: cover;
    background-position: center;
`;
export const MyProfileInfoContainer = styled.div`
    z-index: 5;
    display: flex;
    flex-direction: row;
    padding: 0 2.5rem;
    margin-bottom: 2rem;
    justify-content: space-between;
    align-items: center;
`;
export const MyprofileinfoWrap = styled.div`
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: white;
    .profile-number {
        font-size: 24px;
        text-align: right;
        max-width: 4rem;
    }
    .profile-label {
        font-weight: 200;
        color: ${themes.colors.gray_100};
        text-align: right;
        max-width: 4rem;
    }
`;

export const MyProfileMainText = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-top: 1rem;
    padding: 0 2.5rem;
`;

export const MyProfileSubText = styled.p`
    font-size: 12px;
    font-weight: 200;
    text-align: left;
    padding: 0 2.5rem;
    color: ${themes.colors.gray_900};
`;

export const MyProfileBtnWrap = styled.div`
    z-index: 10;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MyProfileInfoBtn = styled.button`
    z-index: 10;
    width: 50%;
    padding: 0;
    text-align: center;
    line-height: 4rem;
    font-size: 16px;
    font-weight: 500;
    background-color: "#303644";
    background: rgba(230, 230, 238, 0.2);
    :active {
        filter: brightness(0.9);
        opacity: 0.5;
    }
    color: white;
`;

export const MyProfileLogOutBtn = styled(MyProfileInfoBtn)`
    z-index: 10;
    background-color: darkgray;
    background: rgba(20, 20, 20, 0.2);
`;
