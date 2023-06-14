import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";

import { StyledContainer } from "./styled";

function RegisterPage() {
    
    return (
        <>
        <Header/>
        <StyledContainer>
            <RegisterForm/>
        </StyledContainer>
        </>
    )
}

export default RegisterPage;