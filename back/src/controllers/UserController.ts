import { Request, Response } from 'express';
import { prisma } from '../config/prisma';
import auth from '../config/auth';

export class UserController {
    static async create(req: Request, res: Response) {
        try {
            const {firstName, lastName, password, phone, dateOfBirth, gender} = req.body;

            if(!password) {
                return res.status(400).json({ error: "A senha é obrigatória"});
            }

            const { hash, salt } = auth.generatePassword(password);
            const passwordStored = `${hash}:${salt}`;
            const newUser = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    password: passwordStored,
                    phone,
                    dateOfBirth: new Date(dateOfBirth),
                    gender
                }
            });

            const { password: _, ...userWithoutPassword } = newUser;
            return res.status(201).json(userWithoutPassword);
        }catch(error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao criar usuário"});
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: { id },
            });
            if (!user) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }
            const { password: _, ...userWithoutPassword } = user;
            return res.json(userWithoutPassword);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao buscar usuário"});
        }
    }
    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { firstName, lastName, phone, dateOfBirth, gender } = req.body;

            const updateUser = await prisma.user.update({
                where: { id },
                data: {
                    firstName,
                    lastName,
                    phone,
                    gender,
                    ...dateOfBirth && { dateOfBirth: new Date(dateOfBirth)}
                }
            });
            const { password: _, ...userWithoutPassword } = updateUser;
            return res.json(userWithoutPassword);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao atualizar o usuário"});
        }
    }
    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await prisma.user.delete({
                where: { id }
            });
            return res.status(204).send();
        }catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao deletar usuário"});
        }
    }
}