# CafePOS

API quản lý menu và đặt bàn cho một quán cà phê nhỏ (1 chi nhánh, chủ quán + 2 nhân viên).

> Dự án được quản lý theo quy trình **project-lifecycle**. Tài liệu trong `docs/` là nguồn sự thật. Mỗi phiên mới không nhớ gì về phiên trước, nên hãy đọc tài liệu trước khi làm.

## Bắt đầu mỗi phiên
1. Đọc `docs/progress.md` để biết giai đoạn hiện tại, việc đang dở và bước tiếp theo.
2. Đọc các tài liệu liên quan tới việc sắp làm.
3. Tóm tắt ngắn cho người dùng biết mình đang ở đâu rồi mới bắt đầu.

## Quy tắc bắt buộc
- **Không tự ý thay đổi** tech stack, kiến trúc, cấu trúc thư mục, conventions, design tokens hay phạm vi chức năng đã chốt. Nếu thấy cần đổi: dừng lại, giải thích ảnh hưởng, hỏi người dùng. Được đồng ý thì ghi ADR vào `docs/decisions.md`, cập nhật tài liệu, rồi mới sửa code.
- Code theo đúng `docs/conventions.md` và theo pattern của code hiện có.
- Làm xong một phần việc thì cập nhật tài liệu. Tài liệu chưa cập nhật thì chưa tính là xong.
- Trước khi kết thúc phiên, cập nhật "Nhật ký phiên" trong `docs/progress.md`.

## Trạng thái giai đoạn
| Giai đoạn | Trạng thái |
|---|---|
| 1. Yêu cầu & nghiệp vụ | Đã chốt (2026-10-01) |
| 2. Kiến trúc & tech stack | Đã chốt (2026-10-03) |
| 3. Conventions | Đã chốt (2026-10-04) |
| 4. Giao diện mẫu | Đã chốt (2026-10-08) |
| 5. Code | Đang làm |

## Tech stack đã chốt
Node.js 20, Express 4.21 (JavaScript ESM), SQLite qua better-sqlite3 11, test bằng node:test + supertest 7. Kiến trúc modular monolith, tổ chức theo feature.

## Lệnh thường dùng
- `npm install` / `npm run dev` / `npm test`

## Bản đồ tài liệu
- `docs/requirements.md`, `docs/architecture.md`, `docs/conventions.md`, `docs/ui-design.md` + `mockups/`, `docs/progress.md`, `docs/decisions.md`
