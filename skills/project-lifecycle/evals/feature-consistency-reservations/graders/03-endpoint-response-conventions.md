---
type: llm
focus: trace
weight: 1
---

Endpoint dùng kebab-case danh từ số nhiều dưới /api/ (vd. /api/reservations) và trả { data } khi thành công, lỗi qua errorHandler dạng { error: { code, message } }
