"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const db_1 = __importDefault(require("./plugins/db"));
const auth_1 = __importDefault(require("./plugins/auth"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const fastify = (0, fastify_1.default)({ logger: false });
// Регистрация плагинов
fastify.register(db_1.default);
fastify.register(auth_1.default);
// Swagger документация
fastify.register(swagger_1.default, {
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
fastify.register(swagger_ui_1.default, {
    routePrefix: '/documentation', // Здесь используется 'routePrefix'
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    staticCSP: true,
    transformStaticCSP: (header) => header
});
// Загрузка маршрутов
fastify.register(authRoutes_1.default, { prefix: '/api/auth' });
fastify.register(taskRoutes_1.default, { prefix: '/api/tasks' });
fastify.register(userRoutes_1.default, { prefix: '/api/users' });
const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' });
    }
    catch (err) {
        console.log(err);
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
