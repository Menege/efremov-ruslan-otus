
import { PrismaClient, Task } from '@prisma/client'
const prisma = new PrismaClient()// Assuming PrismaClient is correctly set up in the db file

// Определение типов для параметров задачи
interface CreateTaskData {
  title: string;
  description: string;
  examples: string;
  difficulty: string;
  tags: string;
  materials: string;
}

async function getAllTasks(): Promise<Task[]> {
  return prisma.task.findMany();
}

async function createTask(data: CreateTaskData): Promise<Task> {
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

export { getAllTasks, createTask };
