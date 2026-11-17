# Tiến độ

## Trạng thái giai đoạn
| Giai đoạn | Trạng thái |
|---|---|
| 1. Yêu cầu & nghiệp vụ | Đã chốt (2026-10-01) |
| 2. Kiến trúc & tech stack | Đã chốt (2026-10-03) |
| 3. Conventions | Đã chốt (2026-10-04) |
| 4. Giao diện mẫu | Đã chốt (2026-10-08) |
| 5. Code | Đang làm |

## Bước tiếp theo
- Làm tiếp F04 (đang dở): đã có `setVisibility` trong repository, còn thiếu service, route `PATCH /api/menu-items/:id/visibility`, test.
- Chờ chủ quán trả lời câu hỏi Q1 trước khi sửa F01.

## Backlog
| # | Phần việc | Chức năng | Trạng thái |
|---|---|---|---|
| 1 | Khởi tạo project, db.js, errors.js | - | Đã xong |
| 2 | Xem + thêm món | F01, F02 | Đã xong |
| 3 | Cập nhật giá món | F03 | Đã xong |
| 4 | Ẩn/hiện món | F04 | Đang làm |
| 5 | Đặt bàn + lịch đặt bàn | F05, F06 | Chưa làm |

## Đã xong
### 2026-10-12 - Xem + thêm món (F01, F02)
- File chính: `src/features/menu/*`, `tests/menu.test.js`
- Tài liệu đã cập nhật: architecture (API, data model)

### 2026-10-15 - Cập nhật giá món (F03)
- `PATCH /api/menu-items/:id/price`, dùng chung `assertValidPrice` với F02.
- Tài liệu đã cập nhật: architecture (API)

## Câu hỏi còn mở
- [ ] Q1 (F04): Khi món bị ẩn, `GET /api/menu-items` có còn trả món đó không? Chủ quán muốn nhân viên vẫn thấy món ẩn trên tablet hay không? (chờ chủ quán xác nhận)

## Nhật ký phiên
| Ngày | Đã làm | Đang dở | Bước tiếp theo |
|---|---|---|---|
| 2026-10-12 | F01, F02 + test | - | F03 cập nhật giá |
| 2026-10-15 | F03 + test | - | F04 ẩn/hiện món |
| 2026-10-18 | F04: thêm `setVisibility` trong menu.repository.js | F04: service, route, test; Q1 chưa có câu trả lời | Làm nốt F04 |
