import styled from "styled-components";

export const StyledContainer = styled.div`
    height: fit-content;
    width: 100%;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    padding: 30px 15px;

    height: auto;
    width: 18.75rem;

    background-color: var(--color--grey-3);
    border-radius: 3px;

    h1, p {
        align-self: center;
        background-color: transparent;
    }

    p {
        margin-top: 27px;
    }

    label {
        background-color: transparent;
        margin-top: 20px;
    }
`

export const StyledInput = styled.input`
    height: 38.5px;
    width: 100%;

    background-color: var(--color--grey-2);    

    border-radius: 3px;

    margin-top: 15px;
    padding: 8px 13px;
    
    color: var(--color--grey-0);
`

export const StyledButton = styled.button`
    height: 38.5px;
    width: 100%;

    background-color: var(--color--grey-2);    

    border-radius: 3px;
    padding: 8px 13px;
    
    color: var(--color--grey-0);

    margin-top: 19px;

    background-color: ${({color}) => color === "pink" ? "var(--color-primary)" : "var(--color--grey-1)"};

    :hover {
        background-color: ${({color}) => color === "pink" ? "var(--color--primary-hover)" : "var(--color--grey-2)"};
    }

    :focus {
        background-color: ${({color}) => color === "pink" ? "var(--color--primary-focus)" : "var(--color--grey-2)"};
    }
`