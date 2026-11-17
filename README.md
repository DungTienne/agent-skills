# Agent Skills

Bộ skill cho Claude Code và các coding agent khác, cài bằng [`skills` CLI](https://skills.sh).

## project-lifecycle

Quản lý một dự án phần mềm theo **5 giai đoạn có tài liệu đi kèm**, để mọi phiên Claude Code sau đều làm nhất quán với phiên trước. Agent không tự ý đổi tech stack, kiến trúc hay conventions đã chốt.

Mỗi phiên agent mới không nhớ gì về phiên trước, nên skill coi **tài liệu trong repo là nguồn sự thật duy nhất**. Điều gì đã thống nhất thì được ghi ngay vào file, và agent đọc lại các file đó trước khi làm.

### Cài đặt

```bash
npx skills add Neit2108/agent-skills@project-lifecycle
```

Hoặc:

```bash
npx skills add https://github.com/Neit2108/agent-skills --skill project-lifecycle
```

Thêm `-g` để cài cho mọi dự án (user scope), `-y` để bỏ qua bước hỏi xác nhận.

### Các giai đoạn

| # | Giai đoạn | Kết quả |
|---|---|---|
| 1 | Yêu cầu & nghiệp vụ | `docs/requirements.md`: chức năng có mã (F01, F02...), yêu cầu phi chức năng, câu hỏi còn mở |
| 2 | Kiến trúc & tech stack | `docs/architecture.md` + ADR trong `docs/decisions.md`, gợi ý skill phù hợp với stack |
| 3 | Conventions | `docs/conventions.md`: đặt tên, cấu trúc thư mục, xử lý lỗi, test, commit |
| 4 | Giao diện mẫu | `mockups/*.html` (HTML/CSS tĩnh) + `docs/ui-design.md` (màn hình, design tokens) |
| 5 | Code | Làm từng phần trong backlog, cập nhật tài liệu sau mỗi phần |

Một giai đoạn chỉ được chốt khi người dùng đồng ý. Sau đó mọi thay đổi với điều đã chốt đều phải qua bước giải thích ảnh hưởng, hỏi xác nhận và ghi ADR.

### Cấu trúc tài liệu skill tạo ra

```
<project-root>/
├── CLAUDE.md            # Claude Code tự đọc mỗi phiên: tóm tắt, quy tắc bắt buộc, bản đồ tài liệu
├── docs/
│   ├── requirements.md
│   ├── architecture.md
│   ├── conventions.md
│   ├── ui-design.md
│   ├── decisions.md     # nhật ký quyết định (ADR)
│   └── progress.md      # giai đoạn hiện tại, backlog, nhật ký phiên, bước tiếp theo
└── mockups/
```

### Cách dùng

Skill tự kích hoạt khi bạn nói tới việc bắt đầu hoặc tiếp tục một dự án, ví dụ:

- "Mình muốn làm app quản lý quán cà phê, bắt đầu dự án giúp mình."
- "Tiếp tục dự án" / "Làm tiếp phần còn dở."
- "Chốt tech stack cho dự án này."
- "Dựng tài liệu cho repo đã có code này để các phiên sau làm nhất quán."

Đầu mỗi phiên, agent đọc `docs/progress.md`, tóm tắt hiện đang ở đâu rồi mới làm tiếp.

### Thành phần

- `SKILL.md`: quy trình chính
- `references/interview-guide.md`: bộ câu hỏi gợi ý cho giai đoạn 1-3
- `assets/templates/`: mẫu `CLAUDE.md` và các file trong `docs/`
- `evals/`: các tình huống kiểm thử hành vi của skill (khởi tạo dự án, tiếp tục phiên, làm tiếp việc dở, yêu cầu đổi stack mâu thuẫn ADR, thêm tính năng nhất quán). Người dùng skill không cần thư mục này.

## Ngôn ngữ

Skill viết bằng tiếng Việt. Agent giao tiếp và viết tài liệu bằng ngôn ngữ người dùng đang dùng, thuật ngữ kỹ thuật giữ nguyên tiếng Anh.

## License

[MIT](LICENSE)
