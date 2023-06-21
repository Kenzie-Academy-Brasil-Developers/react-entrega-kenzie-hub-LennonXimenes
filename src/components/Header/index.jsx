import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

import Logo from "../../assets/Logo.png"
import { StyledContainer, StyledHeader } from "./style";

function Header() {
    const location = useLocation();
    const { useReturn, userLogout } = useContext(UserContext);

    function loginPage() {
        return location.pathname === "/";
    }

    function dashboardPage() {
        return location.pathname === "/dashboardpage";
    }

    return (
        <StyledHeader>
            <StyledContainer>
                <img src={Logo} alt="Logo escrito Kenzie Hub" />

                {!loginPage() && !dashboardPage() && (
                    <button onClick={() => useReturn()}>Voltar</button>
                )}

                {dashboardPage() && (
                    <button onClick={() => userLogout()}>Sair</button>
                )}
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header;