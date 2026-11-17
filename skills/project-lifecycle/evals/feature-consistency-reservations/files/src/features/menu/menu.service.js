import { AppError } from '../../lib/errors.js';
import * as menuRepository from './menu.repository.js';

const MAX_PRICE = 1_000_000;

function assertValidPrice(price) {
  if (!Number.isInteger(price) || price <= 0 || price > MAX_PRICE) {
    throw new AppError(400, 'INVALID_PRICE', 'Giá phải là số nguyên từ 1 đến 1.000.000');
  }
}

export function listMenuItems() {
  return menuRepository.findAll();
}

export function createMenuItem({ name, price }) {
  if (!name || typeof name !== 'string') {
    throw new AppError(400, 'INVALID_NAME', 'Tên món không hợp lệ');
  }
  assertValidPrice(price);
  return menuRepository.insert({ name: name.trim(), price });
}

export function updateMenuItemPrice(id, price) {
  assertValidPrice(price);
  const item = menuRepository.findById(id);
  if (!item) {
    throw new AppError(404, 'MENU_ITEM_NOT_FOUND', 'Không tìm thấy món');
  }
  return menuRepository.updatePrice(id, price);
}
