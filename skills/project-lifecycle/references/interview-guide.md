# Bộ câu hỏi gợi ý

Đây là danh sách để chọn, không phải bảng hỏi phải đi hết. Bỏ câu đã có câu trả lời, bỏ câu không liên quan tới loại dự án. Hỏi mỗi đợt 3-5 câu, ưu tiên những câu có câu trả lời làm thay đổi thiết kế nhiều nhất. Khi có thể, kèm theo một giả định hợp lý để người dùng chỉ cần xác nhận ("Mình đoán là chỉ cần web, không cần app mobile, đúng không?").

## Giai đoạn 1: Yêu cầu & nghiệp vụ

**Bức tranh lớn (đợt 1)**
- Dự án giải quyết vấn đề gì? Hiện tại người ta đang xử lý vấn đề đó thế nào?
- Ai sẽ dùng? Có những nhóm người dùng/vai trò nào?
- Thành công trông như thế nào (số người dùng, doanh thu, thời gian tiết kiệm...)?
- Đây là sản phẩm thương mại, công cụ nội bộ, hay dự án cá nhân/học tập?

**Chức năng (đợt 2-3)**
- Kể những việc chính mỗi vai trò cần làm trong hệ thống (user stories).
- Chức năng nào bắt buộc phải có ở bản đầu tiên (MVP)? Cái gì để sau?
- Có quy trình nghiệp vụ nhiều bước không (duyệt, trạng thái đơn hàng...)? Mô tả các trạng thái và ai được chuyển trạng thái.
- Quy tắc nghiệp vụ đặc biệt: tính giá, phân quyền, giới hạn, ràng buộc pháp lý?
- Dữ liệu chính là gì (các đối tượng: khách hàng, đơn hàng, sản phẩm...) và quan hệ giữa chúng?

**Phi chức năng (đợt 4)**
- Nền tảng: web, mobile, desktop? Có cần responsive hay offline không?
- Quy mô dự kiến: bao nhiêu người dùng, bao nhiêu dữ liệu?
- Ngôn ngữ giao diện, đa ngôn ngữ?
- Bảo mật & dữ liệu cá nhân: đăng nhập kiểu gì, có dữ liệu nhạy cảm không?
- Tích hợp bên ngoài: thanh toán, email/SMS, hệ thống có sẵn, API bên thứ ba?
- Hạn chót / mốc thời gian?

## Giai đoạn 2: Kiến trúc & tech stack

**Ràng buộc**
- Ai sẽ phát triển và bảo trì? Đội đó quen ngôn ngữ/framework nào?
- Có stack bắt buộc không (công ty quy định, hệ thống sẵn có)?
- Deploy ở đâu: cloud nào, server riêng, serverless, on-premise? Ngân sách hạ tầng hàng tháng?
- Cần real-time, xử lý nền (background jobs), tìm kiếm full-text, upload file lớn không?
- Có yêu cầu về SEO (ảnh hưởng tới lựa chọn SSR/SPA) không?

**Các quyết định cần chốt (tùy dự án)**
- Kiểu kiến trúc: monolith / modular monolith / microservices / serverless. Với dự án mới và team nhỏ, modular monolith thường là mặc định an toàn. Nói rõ lý do nếu đề xuất khác.
- Frontend: framework, cách render (SPA/SSR/SSG), UI library, state management, styling.
- Backend: ngôn ngữ, framework, kiểu API (REST/GraphQL/RPC).
- Database: loại (SQL/NoSQL), sản phẩm cụ thể, ORM/query builder, migration.
- Auth: tự làm / dịch vụ ngoài, session hay JWT.
- Hạ tầng: hosting, CI/CD, môi trường (dev/staging/prod), quản lý secret.
- Monorepo hay tách repo.

**Cách trình bày một đề xuất**

```
### Database
| Phương án | Ưu | Nhược | Hợp với dự án này khi |
|---|---|---|---|
| PostgreSQL | ... | ... | ... |
| MongoDB | ... | ... | ... |

**Đề xuất: PostgreSQL**, vì dữ liệu đơn hàng có quan hệ chặt và cần transaction (F04, F07), và team đã quen SQL.
```

## Giai đoạn 3: Conventions

Soạn sẵn mặc định theo chuẩn cộng đồng của stack, rồi chỉ hỏi những điểm thường gây tranh cãi:
- Ngôn ngữ đặt tên và comment: tiếng Anh hay tiếng Việt? (Mặc định đề xuất: code và tên tiếng Anh, comment theo ý người dùng.)
- Cấu trúc thư mục: theo feature (`features/orders/...`) hay theo layer (`controllers/`, `services/`...)?
- Format response API và mã lỗi chuẩn.
- Mức độ test: unit cho logic nghiệp vụ? E2E cho luồng chính? Mức coverage tối thiểu?
- Git: quy ước branch, commit message (Conventional Commits?), có dùng PR không?
- Có ép kiểu chặt không (TypeScript strict, mypy...)?
