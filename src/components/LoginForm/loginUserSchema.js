import { z } from "zod";

const loginUserSchema = 
    z.object({
        email:
            z.string()
            .nonempty("O e-mail é obrigatório")
            .email("O e-mail fornecido é inválido"),
        password:
            z.string()
            .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/),
    })

export default loginUserSchema;