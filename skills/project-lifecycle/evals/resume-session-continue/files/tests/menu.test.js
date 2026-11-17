import { test } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { app } from '../src/app.js';

test('POST /api/menu-items tạo món mới', async () => {
  const res = await request(app).post('/api/menu-items').send({ name: 'Cà phê sữa', price: 25000 });
  assert.equal(res.status, 201);
  assert.equal(res.body.data.name, 'Cà phê sữa');
});

test('POST /api/menu-items từ chối giá âm', async () => {
  const res = await request(app).post('/api/menu-items').send({ name: 'Trà đá', price: -1 });
  assert.equal(res.status, 400);
  assert.equal(res.body.error.code, 'INVALID_PRICE');
});

test('GET /api/menu-items trả danh sách', async () => {
  const res = await request(app).get('/api/menu-items');
  assert.equal(res.status, 200);
  assert.ok(Array.isArray(res.body.data));
});
