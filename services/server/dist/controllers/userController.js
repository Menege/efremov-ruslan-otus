"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Получение всех пользователей
const getUsers = async (request, reply) => {
    const users = await prisma.user.findMany();
    reply.send(users);
};
// Получение пользователя по ID
const getUserById = async (request, reply) => {
    const { id } = request.params;
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (user) {
        reply.send(user);
    }
    else {
        reply.status(404).send({ message: 'User not found' });
    }
};
// Создание пользователя
const createUser = async (request, reply) => {
    const { username, email, password, role } = request.body;
    const newUser = await prisma.user.create({
        data: { username, email, password, role }
    });
    reply.status(201).send(newUser);
};
// Обновление пользователя
const updateUser = async (request, reply) => {
    const { id } = request.params;
    const { username, email, password, role } = request.body;
    const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: { username, email, password, role }
    });
    reply.send(updatedUser);
};
// Удаление пользователя
const deleteUser = async (request, reply) => {
    const { id } = request.params;
    await prisma.user.delete({ where: { id: parseInt(id) } });
    reply.status(204).send();
};
exports.default = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
