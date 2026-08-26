import { z } from 'zod';

export const createUserSchema = z.object({
    firstName: z.string({ error: "Nome é obrigatório" }).min(1, "Nome é obrigatório"),
    lastName: z.string({ error: "Sobrenome é obrigatório" }).min(1, "Sobrenome é obrigatório"),
    email: z.string({ error: "Email é obrigatório" }).email("Email inválido"),
    password: z.string({ error: "Senha é obrigatória" }).min(6, "Senha deve ter no mínimo 6 caracteres"),
    phone: z.string({ error: "Telefone é obrigatório" }).min(1, "Telefone é obrigatório"),
    dateOfBirth: z.coerce.date({ error: "Data de nascimento inválida" }),
    gender: z.string({ error: "Gênero é obrigatório" }).min(1, "Gênero é obrigatório"),
});

export const loginSchema = z.object({
    email: z.string({ error: "Email é obrigatório" }).email("Email inválido"),
    password: z.string({ error: "Senha é obrigatória" }).min(1, "Senha é obrigatória"),
});

export const updateUserSchema = createUserSchema.partial().omit({ password: true });