---
type: llm
focus: trace
weight: 1
---

Nếu Claude spawn sub-agent để phân tích codebase hoặc research, sub-agent đó dùng model nhẹ (haiku); nếu không spawn thì Claude nêu lý do là context đã đủ. Không có sub-agent triển khai code nào được spawn trước khi plan được duyệt
