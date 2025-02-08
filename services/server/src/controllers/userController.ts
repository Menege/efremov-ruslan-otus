import { FastifyRequest, FastifyReply } from 'fastify';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// Получение всех пользователей
 const getUsers = async (request: FastifyRequest, reply: FastifyReply) => {
  const users = await prisma.user.findMany();
  reply.send(users);
};

// Получение пользователя по ID
 const getUserById = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string };
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  if (user) {
    reply.send(user);
  } else {
    reply.status(404).send({ message: 'User not found' });
  }
};

// Создание пользователя
 const createUser = async (request: FastifyRequest, reply: FastifyReply) => {
  const { username, email, password, role } = request.body as {
    username: string;
    email: string;
    password: string;
    role?: string;
  };
  const newUser = await prisma.user.create({
    data: { username, email, password, role }
  });
  reply.status(201).send(newUser);
};

// Обновление пользователя
 const updateUser = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string };
  const { username, email, password, role } = request.body as {
    username: string;
    email: string;
    password: string;
    role?: string;
  };
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: { username, email, password, role }
  });
  reply.send(updatedUser);
};

// Удаление пользователя
 const deleteUser = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string };
  await prisma.user.delete({ where: { id: parseInt(id) } });
  reply.status(204).send();
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};