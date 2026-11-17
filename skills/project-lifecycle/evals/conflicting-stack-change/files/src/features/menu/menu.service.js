import { AppError } from '../../lib/errors.js';
import * as menuRepository from './menu.repository.js';

const MAX_PRICE = 1_000_000;

export function listMenuItems() {
  return menuRepository.findAll();
}

export function createMenuItem({ name, price }) {
  if (!name || typeof name !== 'string') {
    throw new AppError(400, 'INVALID_NAME', 'Tên món không hợp lệ');
  }
  if (!Number.isInteger(price) || price <= 0 || price > MAX_PRICE) {
    throw new AppError(400, 'INVALID_PRICE', 'Giá phải là số nguyên từ 1 đến 1.000.000');
  }
  return menuRepository.insert({ name: name.trim(), price });
}
