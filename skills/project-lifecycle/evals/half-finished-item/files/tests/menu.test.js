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

test('PATCH /api/menu-items/:id/price cập nhật giá món', async () => {
  const created = await request(app).post('/api/menu-items').send({ name: 'Bạc xỉu', price: 30000 });
  const res = await request(app)
    .patch(`/api/menu-items/${created.body.data.id}/price`)
    .send({ price: 32000 });
  assert.equal(res.status, 200);
  assert.equal(res.body.data.price, 32000);
});

test('PATCH /api/menu-items/:id/price trả 404 khi món không tồn tại', async () => {
  const res = await request(app).patch('/api/menu-items/999999/price').send({ price: 32000 });
  assert.equal(res.status, 404);
  assert.equal(res.body.error.code, 'MENU_ITEM_NOT_FOUND');
});

test('PATCH /api/menu-items/:id/price từ chối giá vượt 1.000.000', async () => {
  const created = await request(app).post('/api/menu-items').send({ name: 'Cacao', price: 35000 });
  const res = await request(app)
    .patch(`/api/menu-items/${created.body.data.id}/price`)
    .send({ price: 1_000_001 });
  assert.equal(res.status, 400);
  assert.equal(res.body.error.code, 'INVALID_PRICE');
});
