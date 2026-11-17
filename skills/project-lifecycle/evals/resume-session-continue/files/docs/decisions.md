# Nhật ký quyết định (ADR)

| ADR | Tiêu đề | Trạng thái | Ngày |
|---|---|---|---|
| ADR-001 | Node.js + Express, JavaScript ESM | Đã chấp nhận | 2026-10-03 |
| ADR-002 | SQLite làm database duy nhất | Đã chấp nhận | 2026-10-03 |

## ADR-001: Node.js + Express, JavaScript ESM
- **Bối cảnh:** 1 dev part-time, quen JS, cần ra MVP trong 3 tuần.
- **Quyết định:** Node.js 20 + Express 4, JS thuần (không TypeScript) để giảm setup.

## ADR-002: SQLite làm database duy nhất
- **Bối cảnh:** Chạy trên 1 máy mini tại quán, dữ liệu < 10.000 bản ghi/năm, không có người vận hành DB server. Đặt bàn cần kiểm tra trùng giờ nên cần truy vấn quan hệ + transaction.
- **Phương án:** PostgreSQL (thừa so với nhu cầu, phải vận hành server), MongoDB (không cần, kiểm tra chồng giờ + transaction kém tự nhiên hơn), SQLite (1 file, backup bằng copy file).
- **Quyết định:** SQLite qua better-sqlite3. Tất cả dữ liệu (menu, đặt bàn) nằm trong cùng file DB.
