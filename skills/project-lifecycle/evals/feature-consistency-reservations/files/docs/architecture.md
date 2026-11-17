# Kiến trúc & tech stack

> Trạng thái: Đã chốt (2026-10-03)
> Mọi thay đổi ở đây phải có ADR tương ứng trong `decisions.md`.

## 1. Tech stack
| Thành phần | Lựa chọn | Phiên bản | ADR |
|---|---|---|---|
| Runtime | Node.js | 20 LTS | ADR-001 |
| Web framework | Express | 4.21 | ADR-001 |
| Ngôn ngữ | JavaScript (ESM) | - | ADR-001 |
| Database | SQLite (file `data/cafe.db`) qua better-sqlite3 | 11 | ADR-002 |
| Test | node:test + supertest | supertest 7 | ADR-001 |

## 2. Tổng quan
Modular monolith. Mỗi feature trong `src/features/<feature>/` gồm 3 tầng: `*.routes.js` (HTTP, validate) -> `*.service.js` (nghiệp vụ) -> `*.repository.js` (SQL). Không gọi DB trực tiếp từ routes.

## 3. Cấu trúc thư mục
```
src/
  app.js                 # tạo Express app, mount routes, error handler
  db.js                  # kết nối SQLite + tạo bảng (migration đơn giản)
  lib/errors.js          # AppError + errorHandler
  features/menu/         # F01-F04
tests/                   # <feature>.test.js
```

## 4. Data model
- `menu_items(id INTEGER PK, name TEXT NOT NULL, price INTEGER NOT NULL, is_visible INTEGER NOT NULL DEFAULT 1, created_at TEXT)`

## 5. API
| Method | Endpoint | Mô tả | Fxx |
|---|---|---|---|
| GET | /api/menu-items | Danh sách món | F01 |
| POST | /api/menu-items | Thêm món | F02 |
| PATCH | /api/menu-items/:id/price | Cập nhật giá món. Body `{ "price": <số nguyên 1..1.000.000> }`. Lỗi: 400 `INVALID_PRICE`, 404 `MENU_ITEM_NOT_FOUND` | F03 |
