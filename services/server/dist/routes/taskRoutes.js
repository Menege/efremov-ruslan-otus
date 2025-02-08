"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const taskController_1 = __importDefault(require("../controllers/taskController"));
const taskRoutes = async (fastify) => {
    fastify.get('/', taskController_1.default.getTasks);
    fastify.get('/:id', taskController_1.default.getTaskById);
    fastify.post('/', taskController_1.default.createTask);
    fastify.put('/:id', taskController_1.default.updateTask);
    fastify.delete('/:id', taskController_1.default.deleteTask);
};
exports.default = taskRoutes;
