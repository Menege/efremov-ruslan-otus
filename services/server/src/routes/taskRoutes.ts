import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import taskController from '../controllers/taskController';

const taskRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.get('/', taskController.getTasks);
  fastify.get('/:id', taskController.getTaskById);
  fastify.post('/', taskController.createTask);
  fastify.put('/:id', taskController.updateTask);
  fastify.delete('/:id', taskController.deleteTask);
};

export default taskRoutes;
