import { useForm } from "react-hook-form";

import { StyledButton, StyledForm, StyledInput, StyledSelect } from "../../pages/RegisterPage/styled";
import { FontLabel, FontParagraph, FontTitle } from "../../styles/typograph";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import registerUserSchema from "./registerUserSchema";

function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(registerUserSchema)
    });

    const navigate = useNavigate();

    async function createUser(formData) {
        try {
            const {data} = await api.post("/users", formData);
            console.log(data);
            navigate("/")
        } catch (error) {
            console.error(error);
        }
    }

    async function submit(formData) {
        console.log(formData);
        await createUser(formData);
        reset();

    }

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <FontTitle>Crie sua conta</FontTitle>
            <FontParagraph>Rapido e grátis, vamos nessa</FontParagraph>

            <FontLabel>Nome</FontLabel>
            <StyledInput type="text" {...register("name")}/>
            {errors.name?.message}

            <FontLabel>Email</FontLabel>
            <StyledInput type="text" {...register("email")}/>
            {errors.email?.message}
            
            <FontLabel>Senha</FontLabel>
            <StyledInput type="text" {...register("password")}/>
            {errors.password?.message}

            <FontLabel>Confirmar senha</FontLabel>
            <StyledInput type="text" {...register("confirmPassword")}/>
            {errors.confirmPassword?.message}

            <FontLabel>Bio</FontLabel>
            <StyledInput type="text" {...register("bio")}/>
            {errors.bio?.message}

            <FontLabel>Contato</FontLabel>
            <StyledInput type="text" {...register("contact")}/>
            {errors.contact?.message}

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