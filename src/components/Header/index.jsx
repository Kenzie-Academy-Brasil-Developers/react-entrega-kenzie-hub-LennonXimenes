import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import { StyledContainer, StyledHeader } from "./style";

function Header({ user, setUser }) {
    const location = useLocation();

    const navigate = useNavigate()

    function loginPage() {
        return location.pathname === "/";
    }

    function dashboardPage() {
        return location.pathname === "/dashboardpage";
    }

    function exit() {
        localStorage.clear();
        navigate("/")
        setUser(null);
    }

    return (
        <StyledHeader>
            <StyledContainer>
                <img src={Logo} alt="Logo escrito Kenzie Hub" />

                {!loginPage() && !dashboardPage() && (
                    <button><Link to="/" className="noStyle">Voltar</Link></button>
                )}

                {dashboardPage() && (
                    <button onClick={() => exit()}>Sair</button>
                )}
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header;