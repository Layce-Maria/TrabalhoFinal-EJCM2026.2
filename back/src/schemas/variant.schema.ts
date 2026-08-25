import { z } from 'zod';

export const createVariantSchema = z.object({
    size: z.string({ error: "Tamanho é obrigatório" }).min(1, "Tamanho é obrigatório"),
    color: z.string({ error: "Cor é obrigatória" }).min(1, "Cor é obrigatória"),
    stockQuantity: z.number({ error: "Estoque é obrigatório" }).int().min(0, "Estoque não pode ser negativo"),
    productId: z.string({ error: "Produto é obrigatório" }).min(1, "Produto é obrigatório"),
});

export const updateVariantSchema = createVariantSchema.omit({ productId: true }).partial();

export const updateStockSchema = z.object({
    quantityToAdd: z.number({ error: "Quantidade é obrigatória" }).int("Quantidade deve ser um número inteiro"),
});