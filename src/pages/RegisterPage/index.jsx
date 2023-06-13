import RegisterForm from "../../components/RegisterForm";
import { FontTitle } from "../../styles/typograph";

function RegisterPage() {
    return (
        <div>
            <FontTitle>Crie sua conta</FontTitle>
            <p>Rapido e grátis, vamos nessa</p>
            <RegisterForm/>
        </div>
    )
}

export default RegisterPage;