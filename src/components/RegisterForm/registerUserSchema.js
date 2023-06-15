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
            .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, 
            `- Deve ter pelo menos uma letra maiúscula;
            - Deve ter pelo menos uma letra minúscula;
            - Deve ter pelo menos um caractere especial;
            - Deve ter pelo menos um número;
            - Deve ter no mínimo 8 caracteres.`),
        confirmPassword: 
            z.string()
            .nonempty("A senha é obrigatória")
            .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, 
            `- Deve ter pelo menos uma letra maiúscula;
            - Deve ter pelo menos uma letra minúscula;
            - Deve ter pelo menos um caractere especial;
            - Deve ter pelo menos um número;
            - Deve ter no mínimo 8 caracteres.`),
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
    })

export default registerUserSchema;