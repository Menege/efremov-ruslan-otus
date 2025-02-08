import fastifyPlugin from 'fastify-plugin';
import fastifyJwt, { FastifyJWTOptions } from '@fastify/jwt';
import { FastifyInstance, FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';

interface AuthPluginOptions {
  jwtSecret?: string;
}

const authPlugin: FastifyPluginAsync<AuthPluginOptions> = async (fastify: FastifyInstance, options: AuthPluginOptions) => {
  fastify.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || 'supersecretkey'
  });

  fastify.decorate('authenticate', async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
};

export default fastifyPlugin(authPlugin);
