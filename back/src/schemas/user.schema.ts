import { z } from 'zod';

export const createUserSchema = z.object({
    firstName: z.string({ error: "Nome é obrigatório" }).min(1, "Nome é obrigatório"),
    lastName: z.string({ error: "Sobrenome é obrigatório" }).min(1, "Sobrenome é obrigatório"),
    email: z.string({ error: "Email é obrigatório" }).email("Email inválido"),
    password: z.string({ error: "Senha é obrigatória" }).min(8, "Senha deve ter no mínimo 8 caracteres"),
    phone: z.string().min(1, "Telefone é obrigatório").optional(),
    dateOfBirth: z.coerce.date({ error: "Data de nascimento inválida" }).optional(),
    gender: z.string().min(1, "Gênero é obrigatório").optional(),
});

export const loginSchema = z.object({
    email: z.string({ error: "Email é obrigatório" }).email("Email inválido"),
    password: z.string({ error: "Senha é obrigatória" }).min(1, "Senha é obrigatória"),
});

export const updateUserSchema = createUserSchema.partial().omit({ password: true });