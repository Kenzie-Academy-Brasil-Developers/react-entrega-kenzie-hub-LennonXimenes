import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toastErrorLogin, toastSuccessLogin } from "../Toast";


import { FontParagraph, FontTitle } from "../../styles/typograph";
import { StyledButton, StyledForm } from "../../pages/LoginPage/style";

import { zodResolver } from "@hookform/resolvers/zod";
import loginUserSchema from "./loginUserSchema";
import Input from "../Input";

import { api } from "../../services/api";
import { useState } from "react";

function LoginForm({ user, setUser }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(loginUserSchema)
    });

    const navigate = useNavigate();

    async function login(formData) {
        try {
            const { data } = await api.post("/sessions", formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);
            setUser(data.user)
            toastSuccessLogin()
            navigate("/loadingpage")
        } catch (error) {
            console.error(error);
            toastErrorLogin()
        }
    }

    async function submit(formData) {
        await login(formData);
        reset();
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

            <StyledButton><Link to="/registerpage" className="noStyle">Cadastre-se</Link></StyledButton>
        </StyledForm>
    )
}

export default LoginForm;