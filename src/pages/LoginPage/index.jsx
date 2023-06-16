import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";

import { StyledContainer } from "./style";

function LoginPage({ user, setUser }) {

    return (
        <>
            <Header user={user} setUser={setUser}/>
            <StyledContainer>
                <LoginForm user={user} setUser={setUser}/>
            </StyledContainer>
        </>
    )
}

export default LoginPage;