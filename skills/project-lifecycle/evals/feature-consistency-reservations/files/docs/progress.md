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
- Làm backlog #5: F05 đặt bàn + F06 xem lịch đặt bàn theo ngày.

## Backlog
| # | Phần việc | Chức năng | Trạng thái |
|---|---|---|---|
| 1 | Khởi tạo project, db.js, errors.js | - | Đã xong |
| 2 | Xem + thêm món | F01, F02 | Đã xong |
| 3 | Cập nhật giá món | F03 | Đã xong |
| 4 | Ẩn/hiện món | F04 | Hoãn (chủ quán chưa cần, 2026-10-16) |
| 5 | Đặt bàn + lịch đặt bàn | F05, F06 | Chưa làm |

## Đã xong
### 2026-10-12 - Xem + thêm món (F01, F02)
- File chính: `src/features/menu/*`, `tests/menu.test.js`
- Tài liệu đã cập nhật: architecture (API, data model)

### 2026-10-15 - Cập nhật giá món (F03)
- `PATCH /api/menu-items/:id/price`, dùng chung `assertValidPrice` với F02.
- Tài liệu đã cập nhật: architecture (API)

## Câu hỏi còn mở
- (không có)

## Nhật ký phiên
| Ngày | Đã làm | Đang dở | Bước tiếp theo |
|---|---|---|---|
| 2026-10-12 | F01, F02 + test | - | F03 cập nhật giá |
| 2026-10-15 | F03 + test | - | F04 ẩn/hiện món |
| 2026-10-16 | Chủ quán yêu cầu hoãn F04 | - | F05, F06 đặt bàn |
