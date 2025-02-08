"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const client_1 = require("@prisma/client");
// Создание экземпляра PrismaClient
const prisma = new client_1.PrismaClient();
// Асинхронная функция плагина
const dbConnector = async (fastify, options) => {
    fastify.decorate('prisma', prisma);
};
// Экспорт плагина с помощью fastify-plugin
exports.default = (0, fastify_plugin_1.default)(dbConnector);
