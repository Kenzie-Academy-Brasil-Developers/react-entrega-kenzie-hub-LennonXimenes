import styled from "styled-components"

export const StyledSection = styled.div`
    height: 7.5rem;
    width: 100%;

    border-top: 1px solid var(--color--grey-3);
`

export const StyledContainer = styled.div`
    height: 7.5rem;
    width: 100%;
    
    max-width: 1440px;

    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`
export const StyledContainerTitleBtn = styled.div`
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
                
    button {
        width: 32px;
        height: 32px;
        
        background-color: var(--color--grey-2);
        border-radius: 4px;
    }
        
    img{
        height: 10.5px;
        width: 10.5px;
        background-color: transparent;
    }
            
`

export const StyledBox = styled.div`
    
`