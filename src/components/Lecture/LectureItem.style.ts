import styled from "@emotion/styled";

export const LectureItemWrap = styled.button`
    position: relative;
    width: 100%;
    max-width: 30%;
    min-height: 23vw;
    padding: 4rem 3rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: black;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    :active {
        filter: brightness(0.9);
    }
    :hover {
        background-image: linear-gradient(to top, #09203f 0%, #537895 100%);

        p {
            color: white;
        }
        button {
            background-image: none;
            background-color: white;
            color: black;
        }
    }

    button {
        background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
        color: white;
    }
`;

export const LectureItemTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
`;

export const LectureItemSubTitle = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;
export const LectureItemDetail = styled.p`
    color: black;
    font-size: 1rem;
    text-align: left;
    font-weight: 500;
`;

export const LectureItemSubDetail = styled.p`
    color: black;
    font-size: 0.9rem;
    text-align: left;
    color: gray;
`;
export const LectureMoreButton = styled.button`
    position: absolute;
    bottom: 2rem;
    right: 50%;
    transform: translate(50%, 0%);
    width: 40%;
    border-radius: 3rem;
    background-color: white !important;
    padding: 1rem 0.1rem !important;
    background-image: none;
    margin-top: 1rem;
    align-self: flex-end;

    :active {
        background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
        color: white;
    }
`;
