import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import { StyledContainer, StyledHeader } from "./style";

function Header() {
    const location = useLocation();

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
                    <button><Link to="/" className="noStyle">Voltar</Link></button>
                )}

                {dashboardPage() && (
                    <button><Link to="/" className="noStyle">Sair</Link></button>
                )}
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header;