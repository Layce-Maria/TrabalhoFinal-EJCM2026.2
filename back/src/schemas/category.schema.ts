import { z } from 'zod';

export const createCategorySchema = z.object({
    name: z.string({ error: "Nome é obrigatório" }).min(1, "Nome é obrigatório"),
});

export const updateCategorySchema = createCategorySchema.partial();