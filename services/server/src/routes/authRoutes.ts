import { FastifyInstance, FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';

// Определение интерфейса для тела запроса
interface AuthRequestBody {
  username: string;
  password: string;
}

// Определение интерфейса для пользователя
interface User {
  id: number;
  username: string;
  password: string;
}

// Определение интерфейса для ответа
interface AuthResponse {
  token?: string;
  error?: string;
}

// Плагин маршрутов аутентификации
const authRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  const users: User[] = [];

  fastify.post<{ Body: AuthRequestBody, Reply: AuthResponse }>('/signup', async (request: FastifyRequest<{ Body: AuthRequestBody }>, reply: FastifyReply) => {
    const { username, password } = request.body;
    const userExists = users.find(user => user.username === username);
    if (userExists) {
      return reply.status(400).send({ error: 'User already exists' });
    }

    const user: User = { id: users.length + 1, username, password }; // Пароль нужно захешировать
    users.push(user);
    const token = fastify.jwt.sign({ id: user.id, username: user.username });
    return reply.send({ token });
  });

  fastify.post<{ Body: AuthRequestBody, Reply: AuthResponse }>('/login', async (request: FastifyRequest<{ Body: AuthRequestBody }>, reply: FastifyReply) => {
    const { username, password } = request.body;
    const user = users.find(user => user.username === username && user.password === password); // Сравнивать захешированный пароль
    if (!user) {
      return reply.status(401).send({ error: 'Invalid credentials' });
    }

    const token = fastify.jwt.sign({ id: user.id, username: user.username });
    return reply.send({ token });
  });
};

export default authRoutes;
