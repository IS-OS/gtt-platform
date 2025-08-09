const request = require('supertest');
const app = require('../src/server');

describe('GTT API', () => {
    it('should issue a new token', async () => {
        const res = await request(app)
            .post('/api/gtt/issue')
            .set('Authorization', `Bearer ${process.env.JWT_TOKEN}`)
            .send({ id: 'GTT003', owner: 'UN_Treasury', value: 3000 });
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toBe('Token issued');
    });

    it('should query a token', async () => {
        const res = await request(app)
            .get('/api/gtt/query/GTT003')
            .set('Authorization', `Bearer ${process.env.JWT_TOKEN}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.id).toBe('GTT003');
    });
});