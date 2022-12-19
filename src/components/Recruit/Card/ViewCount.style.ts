import styled from "@emotion/styled";

export const ViewCountWrap = styled.div<{ type?: string }>`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    color: ${({ type }) => (type === "major" ? `white` : ` black`)};
    font-weight: 500;
    margin-top: 0.5rem;
    font-size: 0.9rem;

    img {
        height: 70%;
        filter: ${({ type }) =>
            type === "major" ? `` : `brightness(0) saturate(100%)`};
    }
`;
