import Fastify, { FastifyInstance } from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import dbPlugin from './plugins/db';
import authPlugin from './plugins/auth';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';
import userRoutes from './routes/userRoutes';
const fastify: FastifyInstance = Fastify({ logger: false });

// Регистрация плагинов
fastify.register(dbPlugin);
fastify.register(authPlugin);

// Swagger документация
fastify.register(swagger, {
  swagger: {
    info: {
      title: 'LeetCode Clone API',
      description: 'API документация для клона LeetCode',
      version: '0.1.0',
    },
    consumes: ['application/json'],
    produces: ['application/json'],
  }
});

// Регистрация Swagger UI для документации
fastify.register(swaggerUI, {
  routePrefix: '/documentation', // Здесь используется 'routePrefix'
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  staticCSP: true,
  transformStaticCSP: (header: any) => header
});

// Загрузка маршрутов
fastify.register(authRoutes, { prefix: '/api/auth' });
fastify.register(taskRoutes, { prefix: '/api/tasks' });
fastify.register(userRoutes, { prefix: '/api/users' });


const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    console.log(err)
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
