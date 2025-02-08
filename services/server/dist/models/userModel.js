"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient(); // Assuming PrismaClient is correctly set up in the db file
async function getAllUsers() {
    return prisma.user.findMany();
}
async function createUser(data) {
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
