import { useForm } from "react-hook-form";

import { StyledButton, StyledForm, StyledInput, StyledSelect } from "../../pages/RegisterPage/styled";
import { FontLabel, FontParagraph, FontTitle } from "../../styles/typograph";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const { register, handleSubmit, reset } = useForm();

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

            <FontLabel>Email</FontLabel>
            <StyledInput type="text" {...register("email")}/>
            
            <FontLabel>Senha</FontLabel>
            <StyledInput type="text" {...register("password")}/>

            <FontLabel>Confirmar senha</FontLabel>
            <StyledInput type="text" {...register("password")}/>

            <FontLabel>Bio</FontLabel>
            <StyledInput type="text" {...register("bio")}/>

            <FontLabel>Contato</FontLabel>
            <StyledInput type="text" {...register("contact")}/>

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