import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { FontParagraph, FontTitle } from "../../styles/typograph";
import { StyledButton, StyledForm } from "../../pages/LoginPage/style";

import { zodResolver } from "@hookform/resolvers/zod";
import loginUserSchema from "./loginUserSchema";
import Input from "../Input";

import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

function LoginForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(loginUserSchema)
    });

    const navigate = useNavigate();
    const { userLogin } = useContext(UserContext);

    async function submit(formData) {
        await userLogin(formData);
        reset();
    }

    function redirect() {
        navigate("/registerpage")
    }

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>

            <FontTitle>Login</FontTitle>

            <Input
                label="Email"
                type="text"
                placeholder="Seu e-mail"
                {...register("email")}
                error={errors.email}
            />

            <Input
                label="Senha"
                type="password"
                placeholder="Sua senha"
                {...register("password")}
                error={errors.password}
            />

            <StyledButton color="pink">Entrar</StyledButton>

            <FontParagraph>Ainda não possui uma conta?</FontParagraph>

            <StyledButton onClick={() => redirect()}>Cadastre-se</StyledButton>
        </StyledForm>
    )
}

export default LoginForm;