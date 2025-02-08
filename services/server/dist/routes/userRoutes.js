"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controllers/userController"));
const userRoutes = async (fastify) => {
    fastify.get('/', userController_1.default.getUsers);
    fastify.get('/:id', userController_1.default.getUserById);
    fastify.post('/', userController_1.default.createUser);
    fastify.put('/:id', userController_1.default.updateUser);
    fastify.delete('/:id', userController_1.default.deleteUser);
};
exports.default = userRoutes;
