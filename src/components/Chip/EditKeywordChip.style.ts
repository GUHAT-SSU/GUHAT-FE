import themes from "@/styles/themes";
import styled from "@emotion/styled";

const setStatusStyle = (status: string) => {
    switch (status) {
        case "active":
            return `background-color: white; border : 1px solid gray `;
        default:
            return `background-color:  ${themes.colors.gray_500} ; border: none;`;
    }
};

export const EditChipContainer = styled.div<{ status: string }>`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 2.6rem;
    border-radius: 2rem;
    border: 0px solid gray;
    color: ${themes.colors.black_500};
    ${({ status }) => setStatusStyle(status)};

    input {
        width: 5rem;
        padding: 0;
    }

    button {
        display: flex;
        align-items: center;
        text-align: center;
    }

    .close-icon {
        width: 0.5rem;
        margin-left: 0.4rem;
    }
`;
