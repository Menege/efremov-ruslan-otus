import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import userController from '../controllers/userController';

const userRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.get('/', userController.getUsers);
  fastify.get('/:id', userController.getUserById);
  fastify.post('/', userController.createUser);
  fastify.put('/:id', userController.updateUser);
  fastify.delete('/:id', userController.deleteUser);
};

export default userRoutes;
