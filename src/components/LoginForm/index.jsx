import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { FontParagraph } from "../../styles/typograph";
import { StyledButton, StyledForm } from "../../pages/LoginPage/style";

import { zodResolver } from "@hookform/resolvers/zod";
import loginUserSchema from "./loginUserSchema";
import Input from "../Input";

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginUserSchema)
    });

    function submit(formData) {
        console.log(formData)
    }

    return (
            <StyledForm onSubmit={handleSubmit(submit)}>
            <Input 
                label="Email"
                type="text"
                placeholder="Seu e-mail"
                {...register("email")}
                error={errors.email}
            />

            <Input
                label="Senha"
                type="text"
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