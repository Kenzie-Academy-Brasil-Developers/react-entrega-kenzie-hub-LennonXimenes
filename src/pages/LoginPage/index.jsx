import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";

import { StyledContainer } from "./style";

function LoginPage() {

    return (
        <>
            <Header />
            <StyledContainer>
                <LoginForm />
            </StyledContainer>
        </>
    )
}

export default LoginPage;