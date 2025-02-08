"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = getAllTasks;
exports.createTask = createTask;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient(); // Assuming PrismaClient is correctly set up in the db file
async function getAllTasks() {
    return prisma.task.findMany();
}
async function createTask(data) {
    const { title, description, examples, difficulty, tags, materials } = data;
    return prisma.task.create({
        data: {
            title,
            description,
            examples,
            difficulty,
            tags,
            materials,
        }
    });
}
