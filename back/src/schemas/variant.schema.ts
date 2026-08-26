import { z } from 'zod';

export const createVariantSchema = z.object({
    size: z.string().min(1, "Tamanho é obrigatório"),
    color: z.string().min(1, "Cor é obrigatória"),
    stockQuantity: z.number().int().min(0, "Estoque não pode ser negativo"),
    productId: z.string().min(1, "Produto é obrigatório"),
});

export const updateVariantSchema = createVariantSchema.omit({ productId: true }).partial();

export const updateStockSchema = z.object({
    quantityToAdd: z.number().int("Quantidade deve ser um número inteiro"),
});