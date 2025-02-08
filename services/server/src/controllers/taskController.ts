import { FastifyReply, FastifyRequest } from 'fastify';
// import prisma from '../plugins/db';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Типизация параметров и тела запроса
interface TaskParams {
  id: string;
}

interface TaskBody {
  title: string;
  description: string;
  examples: string;
  difficulty: string;
  tags: string;
  materials: string;
}

const getTasks = async (request: FastifyRequest, reply: FastifyReply) => {
  const tasks = await prisma.task.findMany();
  reply.send(tasks);
};

const getTaskById = async (request: FastifyRequest<{ Params: TaskParams }>, reply: FastifyReply) => {
  const { id } = request.params;
  const task = await prisma.task.findUnique({ where: { id: parseInt(id) } });
  if (task) {
    reply.send(task);
  } else {
    reply.status(404).send({ message: 'Task not found' });
  }
};

const createTask = async (request: FastifyRequest<{ Body: TaskBody }>, reply: FastifyReply) => {
  const { title, description, examples, difficulty, tags, materials } = request.body;
  const newTask = await prisma.task.create({
    data: { title, description, examples, difficulty, tags, materials }
  });
  reply.status(201).send(newTask);
};

const updateTask = async (request: FastifyRequest<{ Params: TaskParams; Body: TaskBody }>, reply: FastifyReply) => {
  const { id } = request.params;
  const { title, description, examples, difficulty, tags, materials } = request.body;
  const updatedTask = await prisma.task.update({
    where: { id: parseInt(id) },
    data: { title, description, examples, difficulty, tags, materials }
  });
  reply.send(updatedTask);
};

const deleteTask = async (request: FastifyRequest<{ Params: TaskParams }>, reply: FastifyReply) => {
  const { id } = request.params;
  await prisma.task.delete({ where: { id: parseInt(id) } });
  reply.status(204).send();
};

export default {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
