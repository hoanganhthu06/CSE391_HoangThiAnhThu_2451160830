#  TRACK A — BOOTSTRAP 5
## PHẦN A — ĐỌC HIỂU
### Câu A1 (10đ) — Grid System
## Câu A1 (10đ) — Grid System
- Phân tích class:
+ `col-12`: chiếm 12/12 cột (100%) ở màn hình nhỏ
+ `col-md-6`: từ ≥ 768px → chiếm 6/12 cột (50%)
+ `col-lg-3`: từ ≥ 992px → chiếm 3/12 cột (25%)
- Bảng:
| Kích thước     | < 768px | 768px - 991px | ≥ 992px                 |       
| -------------- | ------- | ------------- | ----------------------- |
| Số cột         | 12      | 6             | 3       
| Box layout     | Box 1   | Box 1 Box 2   | Box 1 Box 2 Box 3 Box 4 |
|                | Box 2   | Box 3 Box 4   |                         |
|                | Box 3   |               |                         |
|                | Box 4   |               |                         |
- col-md-6 nghĩa là: Khi màn hình ≥ 768px (md), phần tử chiếm 6/12 cột (tức 50% chiều rộng).
- Không cần viết `col-sm-12` tại vì: Bootstrap dùng mobile-first: `col-12` đã áp dụng cho màn hình nhỏ (< 768px), nên không cần ghi thêm `col-sm-12` (bị dư).

### Câu A2 (10đ) — Utilities & Components
1. Giải thích class d-none d-md-block: bootstrap dùng nguyên tắc mobile-first: class không có breakpoint -> áp dụng cho mọi kích thước; class có md -> chỉ áp dụng từ >= 768px
+ d- none: ẩn element ở tất cả các kích thước màn hình
+ d-md-block: từ >= 768px hiển thị với display: block
- Element này hiển thị khi >= 768px, ẩn khi < 768px
2. Liệt kê 5 spacing utilities (margin/padding):
- mt-3: margin-top mức 3 (tạo khoảng cách phía trên)
- px-4: padding trái + phải mức 4
- mb-auto: margin-bottom tự động( dùng để đẩy layout)
- py-2: paddding trên + dưới mức 2
- ms-5: margin-left (start) mức 5
3. Sự khác nhau giữa .container, .container-fluid, .container-md:
- .container: có max-width thay đổi theo breakpoint -> không full màn hình
- .container-fluid: luôn 100% chiều rộng
- .container-md: 
+ < 768px: full width
+ >= 768px: có max-width giống .container

## PHẦN C — PHÂN TÍCH
### Câu C1 (10đ) — Tùy biến Bootstrap
1. Muốn đổi màu $primary từ xanh mặc định sang #E63946:
- Bước 1: Cài SASS (dart-sass hoặc node-sass)
- Bướ 2: Tạo file custom.scss
- Bước 3: Override biến trước khi import Bootstrap:
+ $primary: #E63946
+ @import "bootstrap"
- Bước 4: Compile file SCSS -> CSS
- Bước 5: Link file CSS đã compile vào HTML
2. KHÔNG nên override trực tiếp .btn-primary { background: red; } tại vì: chỉ thay đổi riêng button, không đồng bộ toàn hệ thống; các component khác (alert, link, border...) vẫn dùng màu cũ; dễ bị xung đột CSS (specificity); khó bảo trì khi project lớn. 
- Nên dùng SASS variables tại vì: 
+ Đổi 1 lần -> toàn bộ giao diện cập nhật theo
+ Đảm bảo tính nhất quán
+ Dễ mở rộng và bảo trì

### Câu C2 (10đ) — So sánh
