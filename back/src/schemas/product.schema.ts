import { z } from 'zod';

export const createProductSchema = z.object({
    name: z.string({ error: "Nome é obrigatório" }).min(1, "Nome é obrigatório"),
    description: z.string({ error: "Descrição é obrigatória" }).min(1, "Descrição é obrigatória"),
    price: z.number({ error: "Preço é obrigatório" }).positive("Preço deve ser maior que zero"),
    rating: z.number().min(0, "Avaliação mínima é 0").max(5, "Avaliação máxima é 5").optional(),
    categoryId: z.string({ error: "Categoria é obrigatória" }).min(1, "Categoria é obrigatória"),
});

export const updateProductSchema = createProductSchema.partial();