import { useForm } from "react-hook-form";

function RegisterForm() {
    const { register, handleSubmit } = useForm();

    function submit(formData) {

        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Nome</label>
            <input type="text" {...register("name")}/>

            <label>Email</label>
            <input type="text" {...register("email")}/>
            
            <label>Senha</label>
            <input type="text" {...register("password")}/>

            <label>Confirmar senha</label>
            <input type="text" {...register("password")}/>

            <label>Bio</label>
            <input type="text" {...register("bio")}/>

            <label>Contato</label>
            <input type="text" {...register("contact")}/>

            <label>Selecionar módulo</label>
            <select {...register("course_module")}>
                <option value="M1">Primeiro módulo</option>
                <option value="M2">Segundo módulo</option>
                <option value="M3">Terceiro módulo</option>
                <option value="M4">Quarto módulo</option>
                <option value="M5">Quinto módulo</option>
                <option value="M6">Sexto módulo</option>
            </select>

            <button>Cadastrar</button>
        </form>
    )
}

export default RegisterForm;