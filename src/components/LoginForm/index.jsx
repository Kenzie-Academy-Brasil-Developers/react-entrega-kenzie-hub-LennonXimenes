import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { FontLabel, FontParagraph, FontTitle } from "../../styles/typograph";
import { StyledButton, StyledForm, StyledInput } from "../../pages/LoginPage/style";

function LoginForm() {
    const { register, handleSubmit } = useForm();

    function submit(formData) {
        console.log(formData)
    }

    return (
            <StyledForm onSubmit={handleSubmit(submit)}>
                <FontTitle>Login</FontTitle>
                <FontLabel>Email</FontLabel>
                <StyledInput type="email" {...register("email")} />

                <FontLabel>Senha</FontLabel>
                <StyledInput type="password" {...register("password")} />

                <StyledButton color="pink">Entrar</StyledButton>

                <FontParagraph>Ainda não possui uma conta?</FontParagraph>

                <StyledButton><Link to="/registerpage" className="noStyle">Cadastre-se</Link></StyledButton>
            </StyledForm>
    )
}

export default LoginForm;