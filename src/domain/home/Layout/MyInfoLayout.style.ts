import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const MyInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 6rem;

    .myinfo {
        font-weight: 700;
        font-size: 1.6rem;
        color: darkgray;
    }
    #myinfo-nickname {
        color: black;
    }
`;

export const EmptyHistory = styled.div`
    width: calc(100% - 20vw - 2rem);
    margin-left: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    gap: 2rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    p {
        font-size: 1.5rem;
    }

    img {
        width: 20%;
    }

    .post-btn {
        padding: 1rem 2rem;
        color: white;
        background-color: ${themes.colors.black_500};
        border-radius: 2rem;
    }
`;
