
import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()// Assuming PrismaClient is correctly set up in the db file

// Определение типов для параметров пользователя
interface CreateUserData {
  username: string;
  email: string;
  password: string; // Пароль должен быть захеширован в production
  role?: string;  // По умолчанию 'user'
}

async function getAllUsers(): Promise<User[]> {
  return prisma.user.findMany();
}

async function createUser(data: CreateUserData): Promise<User> {
  const { username, email, password, role = 'user' } = data;
  return prisma.user.create({
    data: {
      username,
      email,
      password, // Don't forget to hash the password in production
      role
    }
  });
}

export { getAllUsers, createUser };
