import { z } from "zod";

const registerUserSchema = 
    z.object({
        name:
            z.string()
            .nonempty("O nome é obrigatório")
            .min(3, "O nome precisa conter pelo menos 3 caracteres"),
        email:
            z.string()
            .nonempty("O e-mail é obrigatório")
            .email("O e-mail fornecido é inválido"),
        password: 
            z.string()
            .nonempty("A senha é obrigatória")
            .min(8, "Deve ter no mínimo 8 caracteres")
            .regex(/(?=.*?[A-Z])/, "Deve ter pelo menos uma letra maiúscula")
            .regex(/(?=.*?[a-z])/, "Deve ter pelo menos uma letra minúscula")
            .regex(/(?=.*?[0-9])/, "Deve ter pelo menos um número")
            .regex(/(?=.*?[#?!@$%^&*-])/, "Deve ter pelo menos um caractere especial"),
        confirmPassword:
            z.string()
            .nonempty("A senha é obrigatória"),
        bio:
            z.string()
            .nonempty("A bio é obrigatória")
            .min(10, "A bio precisa conter pelo menos 10 carácteres"),
        contact: 
            z.string()
            .nonempty("Deve conter o número de telefone, ou as redes sociais"),
        course_module: 
            z.string()
            .nonempty("Precisa selecionar o seu módulo"),
    }).refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não correspondem",
        path: ["confirmPassword"]
    });

export default registerUserSchema;