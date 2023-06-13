import Logo from "../../assets/Logo.png"
import { StyledHeader } from "./style";

function Header() {
    return (
        <StyledHeader>
            <img src={Logo} alt="Logo escrito Kenzie Hub"/>
        </StyledHeader>
    )
}

export default Header;