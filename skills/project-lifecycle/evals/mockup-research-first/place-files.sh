#!/usr/bin/env bash
set -eu
src="$(dirname "$0")/../resume-session-continue/files"
mkdir -p docs
cp "$src/CLAUDE.md" "$src/package.json" .
cp "$src"/docs/requirements.md "$src"/docs/architecture.md "$src"/docs/conventions.md "$src"/docs/decisions.md docs/
sed -i 's/| 4. Giao diện mẫu | Đã chốt (2026-10-08) |/| 4. Giao diện mẫu | Chưa bắt đầu |/; s/| 5. Code | Đang làm |/| 5. Code | Chưa bắt đầu |/' CLAUDE.md
cat > docs/progress.md <<'MD'
# Tiến độ

## Trạng thái giai đoạn
| Giai đoạn | Trạng thái |
|---|---|
| 1. Yêu cầu & nghiệp vụ | Đã chốt (2026-10-01) |
| 2. Kiến trúc & tech stack | Đã chốt (2026-10-03) |
| 3. Conventions | Đã chốt (2026-10-04) |
| 4. Giao diện mẫu | Chưa bắt đầu |
| 5. Code | Chưa bắt đầu |

## Bước tiếp theo
- Bắt đầu giai đoạn 4: giao diện mẫu.

## Nhật ký phiên
| Ngày | Đã làm | Đang dở | Bước tiếp theo |
|---|---|---|---|
| 2026-10-04 | Chốt conventions | - | Giai đoạn 4 |
MD
