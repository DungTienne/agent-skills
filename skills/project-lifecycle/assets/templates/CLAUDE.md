# <Tên dự án>

<Một-hai câu: dự án là gì, cho ai.>

> Dự án được quản lý theo quy trình **project-lifecycle**. Tài liệu trong `docs/` là nguồn sự thật. Mỗi phiên mới không nhớ gì về phiên trước, nên hãy đọc tài liệu trước khi làm.

## Bắt đầu mỗi phiên
1. Đọc `docs/progress.md` để biết giai đoạn hiện tại, việc đang dở và bước tiếp theo.
2. Đọc các tài liệu liên quan tới việc sắp làm (bản đồ bên dưới).
3. Tóm tắt ngắn cho người dùng biết mình đang ở đâu rồi mới bắt đầu.

## Quy tắc bắt buộc
- **Không tự ý thay đổi** tech stack, kiến trúc, cấu trúc thư mục, conventions, design tokens hay phạm vi chức năng đã chốt. Nếu thấy cần đổi hoặc yêu cầu mâu thuẫn với tài liệu: dừng lại, giải thích ảnh hưởng, hỏi người dùng. Nếu được đồng ý thì ghi ADR vào `docs/decisions.md`, cập nhật tài liệu, rồi mới sửa code.
- Code theo đúng `docs/conventions.md` và theo pattern của code hiện có.
- Làm xong một phần việc thì **cập nhật tài liệu** (progress, và architecture/requirements/decisions/ui-design nếu bị ảnh hưởng). Tài liệu chưa cập nhật thì chưa tính là xong.
- Trước khi kết thúc phiên, cập nhật "Nhật ký phiên" trong `docs/progress.md`, kèm bước tiếp theo cụ thể.

## Trạng thái giai đoạn
| Giai đoạn | Trạng thái |
|---|---|
| 1. Yêu cầu & nghiệp vụ | Chưa bắt đầu |
| 2. Kiến trúc & tech stack | Chưa bắt đầu |
| 3. Conventions | Chưa bắt đầu |
| 4. Giao diện mẫu | Chưa bắt đầu |
| 5. Code | Chưa bắt đầu |

## Tech stack đã chốt
<Điền sau giai đoạn 2. Có phiên bản, vd: Next.js 15 (App Router), TypeScript 5 strict, PostgreSQL 16 + Prisma 6, Tailwind 4.>

## Skills cho stack
<Điền sau khi tìm bằng find-skills, vd: "Code backend: dùng skill `nestjs-best-practices`. Code frontend: dùng skill `react-best-practices`." Kèm lệnh cài lại nếu máy chưa có. Khi skill mâu thuẫn với `docs/conventions.md`, làm theo conventions.>

## Lệnh thường dùng
<Điền khi có code: cài đặt, chạy dev, test, lint, build.>

## Bản đồ tài liệu
- `docs/requirements.md`: nghiệp vụ, chức năng (mã Fxx), yêu cầu phi chức năng
- `docs/architecture.md`: kiến trúc, cấu trúc thư mục, data model, API, biến môi trường
- `docs/conventions.md`: quy ước code (có ví dụ)
- `docs/ui-design.md` + `mockups/`: màn hình, design tokens, mockup HTML
- `docs/progress.md`: backlog, đã xong, nhật ký phiên
- `docs/decisions.md`: nhật ký quyết định (ADR)
