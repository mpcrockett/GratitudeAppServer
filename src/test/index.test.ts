import request from 'supertest';
import server from '../index'

describe('Express Server', () => {
  afterAll(() => {
    server.close();
  });

  test('GET /api/test should return 200 and "ok"', async () => {
    const response = await request(server).get('/api/test');
    expect(response.status).toBe(200);
    expect(response.body).toBe("ok");
  });
});