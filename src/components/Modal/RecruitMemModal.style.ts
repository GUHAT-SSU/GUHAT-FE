import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const RecruitMemModalContainer = styled.div`
    position: relative;
    width: 50vw;
    height: 55vh;
    display: flex;
    border-radius: 2rem;
    padding-left: 1rem;
    padding-top: 3rem;
    padding-bottom: 1.5rem;
    gap: 2rem;

    .modal-close-btn {
        position: absolute;
        width: 1rem;
        height: 1rem;
        top: 0;
        right: 0;
        background-repeat: no-repeat;
        background-size: contain;
    }
    .list-label {
        font-weight: 700;
        font-size: 1.1rem;
    }
    .reset-btn {
        font-weight: 700;
        font-size: 1.1rem;

        :hover,
        :active {
            text-decoration: underline;
        }
        :active {
            font-size: 0.9rem;
        }
    }

    .modal-recuit-content {
        display: flex;
        min-width: 50%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
    }

    .modal-recuit-group-button {
        width: 35%;
        padding: 0.7rem;
        text-align: center;
        align-items: center;
        border-radius: 3rem;
        border: 1px solid black;
        background-color: ${themes.colors.gray_300};
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
            rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        :hover,
        :active {
            background-color: ${themes.colors.black_500};
            color: white;
        }
    }
`;

export const RecruitMemModalList = styled.ul`
    overflow-y: auto;
    gap: 1rem;
    min-width: 43%;

    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    padding: 2rem;
    background-color: ${themes.colors.gray_300};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    .recruit-modal-empty-state {
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 2rem;
        font-size: 1.2rem;
    }
`;
export const RecruitMemModalGroups = styled.div`
    width: 100%;
    min-height: 80%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    gap: 2rem;
`;
export const RecruitMemCardList = styled.div`
    position: relative;
    height: 90%;
    display: flex;
    padding-top: 2rem;
    padding-left: 1rem;
    flex-wrap: wrap;
    gap: 1rem;

    .modal-recuit-group-label {
        position: absolute;
        top: 0;
        left: 0;
        font-weight: 700;
    }
`;

export const RecruitMemCardWrapper = styled.div<{
    checked?: boolean;
    mem?: any;
    isNew?: boolean;
}>`
    z-index: 140;
    width: 6.5rem;
    min-width: 5rem;
    padding: 0;
    transform: ${({ checked, isNew }) =>
        checked && isNew ? "scale(1.05)" : "default"};
    ${({ checked }) => (checked ? "opacity : 1" : "filter : brightness(0.8);")};
    /* ${({ mem, isNew }) =>
        isNew || (!isNew && !mem)
            ? "opacity : 1"
            : "opacity : 0.7; filter: brightness(0.6);"}; */
`;
