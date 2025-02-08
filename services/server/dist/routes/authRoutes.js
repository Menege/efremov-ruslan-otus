"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Плагин маршрутов аутентификации
const authRoutes = async (fastify) => {
    const users = [];
    fastify.post('/signup', async (request, reply) => {
        const { username, password } = request.body;
        const userExists = users.find(user => user.username === username);
        if (userExists) {
            return reply.status(400).send({ error: 'User already exists' });
        }
        const user = { id: users.length + 1, username, password }; // Пароль нужно захешировать
        users.push(user);
        const token = fastify.jwt.sign({ id: user.id, username: user.username });
        return reply.send({ token });
    });
    fastify.post('/login', async (request, reply) => {
        const { username, password } = request.body;
        const user = users.find(user => user.username === username && user.password === password); // Сравнивать захешированный пароль
        if (!user) {
            return reply.status(401).send({ error: 'Invalid credentials' });
        }
        const token = fastify.jwt.sign({ id: user.id, username: user.username });
        return reply.send({ token });
    });
};
exports.default = authRoutes;
