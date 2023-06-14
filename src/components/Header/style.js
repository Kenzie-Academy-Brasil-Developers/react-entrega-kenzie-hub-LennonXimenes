import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 70px;
    width: 100%;
`

export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 70px;
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;
    padding: 1rem;

    img {
        height: 20px;
        width: 144px;
    }

    button {
        height: 32px;
        width: 80px;

        background-color: var(--color--grey-2);    

        border-radius: 3px;
        padding: 8px 13px;
        
        color: var(--color--grey-0);

        background-color: ${({color}) => color === "pink" ? "var(--color-primary)" : "var(--color--grey-2)"};

        :hover {
            background-color: ${({color}) => color === "pink" ? "var(--color--primary-hover)" : "var(--color--grey-2)"};
        }

        :focus {
            background-color: ${({color}) => color === "pink" ? "var(--color--primary-focus)" : "var(--color--grey-2)"};
        }        
    }
`


