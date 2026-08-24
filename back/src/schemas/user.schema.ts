import passport from 'passport';
import { z } from 'zod';

export const createUserSchema = z.object({
    firstName: z.string().min(1, "Nome é obrigatório"),
    lastName: z.string().min(1, "Sobrenome é obrigatório"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 carateres"),
    phone: z.string().min(1, "Telefone é obrigatório"),
    dateOfBirth: z.coerce.date({ error: "Data de nascimento inválida" }),
    gender: z.string().min(1, "Gênero é obrigatório"),
    });

    export const loginSchema = z.object({
        email: z.string().email("Email inválido"),
        password: z.string().min(1, "Senha é obrigatória"),
    });

    export const updateUserSchema = createUserSchema.partial().omit({ password: true });