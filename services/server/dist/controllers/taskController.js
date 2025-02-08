"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import prisma from '../plugins/db';
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getTasks = async (request, reply) => {
    const tasks = await prisma.task.findMany();
    reply.send(tasks);
};
const getTaskById = async (request, reply) => {
    const { id } = request.params;
    const task = await prisma.task.findUnique({ where: { id: parseInt(id) } });
    if (task) {
        reply.send(task);
    }
    else {
        reply.status(404).send({ message: 'Task not found' });
    }
};
const createTask = async (request, reply) => {
    const { title, description, examples, difficulty, tags, materials } = request.body;
    const newTask = await prisma.task.create({
        data: { title, description, examples, difficulty, tags, materials }
    });
    reply.status(201).send(newTask);
};
const updateTask = async (request, reply) => {
    const { id } = request.params;
    const { title, description, examples, difficulty, tags, materials } = request.body;
    const updatedTask = await prisma.task.update({
        where: { id: parseInt(id) },
        data: { title, description, examples, difficulty, tags, materials }
    });
    reply.send(updatedTask);
};
const deleteTask = async (request, reply) => {
    const { id } = request.params;
    await prisma.task.delete({ where: { id: parseInt(id) } });
    reply.status(204).send();
};
exports.default = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
