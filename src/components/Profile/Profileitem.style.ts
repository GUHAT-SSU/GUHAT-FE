import DefaultIcon from "@/assets/member_default2.svg";
import themes from "@/styles/themes";
import styled from "@emotion/styled";
export const ProfileItemWrap = styled.button<{ hide?: boolean }>`
    position: relative;
    width: 100%;
    max-width: 30%;
    min-height: 23vw;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: ${themes.colors.gray_100};
    .default-view {
        ${({ hide }) => (hide ? `dispaly: hide; ` : null)};
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 4rem 0rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: black;
        :active {
            filter: brightness(0.9);
        }
        :hover {
            button {
                background-image: none;
                background-color: white;
                color: black;
            }
            p {
                color: white;
            }
        }
    }
    .keyword-preview {
        gap: 1rem;
        display: flex;
        overflow-x: auto;
    }

    .intro {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
`;
export const ProfileImageWrapper = styled.div<{ image?: string }>`
    z-index: 5;
    width: 6rem;
    height: 6rem;
    border-radius: 8rem;
    background-color: white;
    ${({ image }) =>
        image
            ? `background-image : url(${image});`
            : `background-image : url( ${DefaultIcon});`}
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
`;
export const ProfileItemTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    width: 100%;
`;

export const ProfileItemSubTitle = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    margin: 2rem;
    margin-bottom: 0;
    :hover {
        color: white;
    }
`;
export const ProfileItemDetail = styled.p`
    color: black;
    font-size: 1rem;
    text-align: left;
    font-weight: 500;
`;

export const ProfileItemSubDetail = styled.p`
    color: black;
    font-size: 0.9rem;
    text-align: left;
    color: gray;
`;
export const ProfileMoreButton = styled.button`
    position: absolute;
    bottom: 2rem;
    right: 50%;
    transform: translate(50%, 0%);
    width: 40%;
    border-radius: 3rem;
    background-color: white !important;
    padding: 1rem 0.1rem !important;

    margin-top: 1rem;
    align-self: flex-end;
`;
export const ProfileKeywordWrapper = styled.div`
    position: absolute;
    z-index: 20;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const ProfileKeyword = styled.div`
    color: white;
    padding: 0.7rem 1.5rem;
    border-radius: 2rem;
    align-self: center;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: ${themes.colors.black_500};
`;
