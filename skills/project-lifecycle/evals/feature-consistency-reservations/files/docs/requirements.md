# Yêu cầu & nghiệp vụ

> Trạng thái: Đã chốt (2026-10-01)

## 1. Tổng quan
- **Vấn đề:** Quán đang quản lý menu và lịch đặt bàn bằng sổ tay, hay bị trùng bàn và giá trên menu không cập nhật.
- **Mục tiêu:** Một API nội bộ cho ứng dụng tablet tại quầy.
- **Loại dự án:** Công cụ nội bộ.

## 2. Vai trò
| Vai trò | Quyền chính |
|---|---|
| Chủ quán | Toàn quyền menu, xem/hủy đặt bàn |
| Nhân viên | Xem menu, tạo/xem đặt bàn |

## 3. Chức năng
| Mã | Chức năng | Vai trò | Ưu tiên |
|---|---|---|---|
| F01 | Xem danh sách món | Tất cả | MVP |
| F02 | Thêm món | Chủ quán | MVP |
| F03 | Cập nhật giá món | Chủ quán | MVP |
| F04 | Ẩn/hiện món | Chủ quán | MVP |
| F05 | Đặt bàn (tên khách, SĐT, số người, giờ, bàn) | Nhân viên | MVP |
| F06 | Xem lịch đặt bàn theo ngày | Tất cả | MVP |

### F03 - Cập nhật giá món
- Giá là số nguyên VND, > 0, tối đa 1.000.000.
- Không cho cập nhật món không tồn tại (404).

### F05 - Đặt bàn
- Quán có 10 bàn (1-10). Mỗi lượt đặt giữ bàn 2 tiếng. Không cho đặt trùng bàn trong khoảng giờ chồng nhau.

## 6. Phi chức năng
- Chỉ dùng nội bộ, 1 máy chủ mini đặt tại quán, dữ liệu nhỏ (< 10.000 bản ghi/năm).

## 7. Ngoài phạm vi
- Thanh toán, order món, nhiều chi nhánh.
