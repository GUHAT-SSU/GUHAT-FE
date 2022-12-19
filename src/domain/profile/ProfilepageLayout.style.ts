import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const MypageLayoutContainer = styled.div`
    position: relative;
    width: calc(100% - 10rem);
    margin: 0 5rem;
`;

export const MypageContentLayout = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    max-height: 200vh;
    flex-direction: column;
    width: 100%;
    z-index: 1;

    .review-btn {
        width: 25%;
        height: 5rem;
        padding: 2rem;
        padding-top: 3rem;
        align-items: center;
        align-self: center;
        margin-bottom: 6rem;
        button {
            font-size: 1.3rem;
            font-weight: 500;
            border-radius: 2rem;
            :active,
            :hover {
                background-color: ${themes.colors.blue};
            }
        }
    }
`;
