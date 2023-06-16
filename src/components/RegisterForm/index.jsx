import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../Toast";

import { StyledButton, StyledForm, StyledSelect } from "../../pages/RegisterPage/styled";
import { FontLabel, FontParagraph, FontTitle } from "../../styles/typograph";

import { api } from "../../services/api";

import { zodResolver } from "@hookform/resolvers/zod";
import registerUserSchema from "./registerUserSchema";
import Input from "../Input";

function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(registerUserSchema)
    });

    const navigate = useNavigate();

    async function createUser(formData) {
        try {
            const {data} = await api.post("/users", formData);
            toastSuccess()
            navigate("/")
        } catch (error) {
            console.error(error);
            toastError()
        }
    }

    async function submit(formData) {
        await createUser(formData);
        reset();
    }

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <FontTitle>Crie sua conta</FontTitle>
            <FontParagraph>Rapido e grátis, vamos nessa</FontParagraph>

            <Input 
                label="Nome"
                type="text"
                placeholder="Seu nome"
                {...register("name")}
                error={errors.name}
            />

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

            <Input 
                label="Confirmar senha"
                type="text"
                placeholder="Sua senha novamente"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
            />

            <Input 
                label="Bio"
                type="text"
                placeholder="Fale sobre você"
                {...register("bio")}
                error={errors.bio}
            />

            <Input 
                label="Contato"
                type="text"
                placeholder="Seu contato"
                {...register("contact")}
                error={errors.contact}
            />


            <FontLabel>Selecionar módulo</FontLabel>
            <StyledSelect {...register("course_module")}>
                <option value="M1">M1</option>
                <option value="M2">M2</option>
                <option value="M3">M3</option>
                <option value="M4">M4</option>
                <option value="M5">M5</option>
                <option value="M6">M6</option>
            </StyledSelect>

            <StyledButton color="pink">Cadastrar</StyledButton>
        </StyledForm>
    )
}

export default RegisterForm;