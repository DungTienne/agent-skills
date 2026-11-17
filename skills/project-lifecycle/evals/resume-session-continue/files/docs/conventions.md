# Conventions

> Trạng thái: Đã chốt (2026-10-04)

## 1. Đặt tên
| Đối tượng | Quy ước | Ví dụ |
|---|---|---|
| File | kebab-case + hậu tố tầng | `menu.routes.js`, `menu.service.js` |
| Hàm/biến | camelCase, tiếng Anh | `updatePrice` |
| Bảng/cột | snake_case, số nhiều | `menu_items.is_visible` |
| Endpoint | kebab-case, danh từ số nhiều | `/api/menu-items/:id/price` |

## 2. Tổ chức code
- routes chỉ validate input + gọi service + trả response. Nghiệp vụ nằm ở service. SQL chỉ nằm ở repository.

## 4. Xử lý lỗi
- Service ném `new AppError(statusCode, code, message)` từ `src/lib/errors.js`. Routes chuyển lỗi qua `next(err)`, không tự `res.status(...)` cho lỗi.
- Message lỗi bằng tiếng Việt, `code` dạng UPPER_SNAKE (`MENU_ITEM_NOT_FOUND`).

## 5. API response
- Thành công: `{ "data": ... }`. Lỗi: `{ "error": { "code": "...", "message": "..." } }`.

## 6. Test
- Mỗi endpoint có ít nhất 1 test thành công + 1 test lỗi trong `tests/<feature>.test.js`, dùng node:test + supertest với DB in-memory (`DB_PATH=:memory:`).

## 7. Git
- Conventional Commits: `feat(menu): ...`.
