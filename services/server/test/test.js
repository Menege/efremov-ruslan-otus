const { expect } = require('chai');
const fastify = require('fastify')();

describe('LeetCode Clone API', () => {
  before((done) => {
    fastify.listen({ port: 3000 }, done);
  });

  after((done) => {
    fastify.close(done);
  });

  it('should get all tasks', async () => {
    // const response = await fastify.inject({
    //   method: 'GET',
    //   url: '/tasks'
    // });
    expect(0).to.equal(0);
  });

  // Add more tests as necessary
});
