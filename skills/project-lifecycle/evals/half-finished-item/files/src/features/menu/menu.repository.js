import { db } from '../../db.js';

export function findAll() {
  return db.prepare('SELECT * FROM menu_items ORDER BY id').all();
}

export function insert({ name, price }) {
  const result = db.prepare('INSERT INTO menu_items (name, price) VALUES (?, ?)').run(name, price);
  return db.prepare('SELECT * FROM menu_items WHERE id = ?').get(result.lastInsertRowid);
}

export function findById(id) {
  return db.prepare('SELECT * FROM menu_items WHERE id = ?').get(id);
}

export function updatePrice(id, price) {
  db.prepare('UPDATE menu_items SET price = ? WHERE id = ?').run(price, id);
  return findById(id);
}

export function setVisibility(id, isVisible) {
  db.prepare('UPDATE menu_items SET is_visible = ? WHERE id = ?').run(isVisible ? 1 : 0, id);
  return db.prepare('SELECT * FROM menu_items WHERE id = ?').get(id);
}
