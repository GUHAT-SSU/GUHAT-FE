import themes from "@/styles/themes";
import DefaultIcon from "@assets/member_default.svg";
import styled from "@emotion/styled";
export const ProfileWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 0.5rem;
    align-items: flex-end;
    justify-content: center;
    text-align: right;

    #recruit-profile-level {
        font-weight: 300;
        font-size: 10px;
    }
    #recruit-profile-nickname {
        font-weight: 700;
        font-size: 12px;
    }
`;

export const ProfileImgWrap = styled.div`
    position: relative;
    min-width: 4rem;
    height: 4rem;
`;

export const ProfileImgBgCircle = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #c6e7fa;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 3.5rem;
`;

export const ProfileImg = styled.div<{ img?: string | null }>`
    position: absolute;
    background-color: ${themes.colors.gray_100};
    width: 3.5rem;
    height: 3.5rem;
    left: 0;
    top: 0;
    border-radius: 3.5rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    ${({ img }) =>
        img
            ? `background-image : url(${img});`
            : `background-image : url( ${DefaultIcon});`}
`;
