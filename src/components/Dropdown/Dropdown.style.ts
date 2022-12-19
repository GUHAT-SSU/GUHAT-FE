import themes from "@/styles/themes";
import moreIcon from "@assets/dropdown.svg";
import styled from "@emotion/styled";
export const DropdownContainer = styled.div<{
    width?: string;
    active?: boolean;
}>`
    width: ${({ width }) => (width ? width : null)};
    min-width: 4rem;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    background-color: ${themes.colors.gray_300};
    border-radius: 1rem;

    ${({ active }) =>
        active ? `box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;` : null};
    button {
        ${({ active }) =>
            active
                ? `background-color:white; border:1px solid black; color:black; border-radius : 1rem 1rem 0 0  !important; `
                : null}
    }
`;

export const DropDownMenu = styled.div`
    position: absolute;
    width: 100%;
    top: 3rem;
    z-index: 51;
    max-height: 8rem;
    overflow-y: scroll;
    border: 1px solid black;
    background-color: white;
`;

export const DrowdownList = styled.ul`
    /* max-height: 6rem; */
    z-index: 50;
    border-top: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.5rem 0;
    color: black;
    padding: 0.5rem 0;
    background-color: white;
`;

export const DropdownItem = styled.li`
    z-index: 50;
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    background-color: white;
    :hover {
        background-color: #3870f230;
    }
`;

export const DropdownLabel = styled.button`
    font-size: 1rem;
    font-weight: 600;
    background-color: ${themes.colors.gray_300};
    padding: 1rem 1.5rem;
    padding-right: 3rem;
    background-image: url(${moreIcon});
    background-repeat: no-repeat;
    background-position: 90% 50%;
    background-size: 1.2rem;
    border-radius: 1rem;
    text-align: left;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
