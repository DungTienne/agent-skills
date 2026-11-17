---
type: llm
focus: trace
weight: 1
---

Có endpoint PATCH /api/menu-items/:id/visibility đi qua route → service → repository, lỗi dùng AppError với code UPPER_SNAKE (vd. 404 MENU_ITEM_NOT_FOUND)
