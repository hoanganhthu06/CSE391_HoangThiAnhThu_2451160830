# TRACK B — TAILWINDCSS
## PHẦN A — ĐỌC HIỂU 
### Câu A1 (10đ) — Utility Classes
* flex → display: flex
* items-center → align-items: center
* justify-between → justify-content: space-between
* p-4 → padding: 1rem (16px)
* bg-white → background-color: #ffffff
* shadow-md → box-shadow mức trung bình
* rounded-lg → border-radius lớn
* hover:shadow-xl → hover thì shadow lớn hơn
* transition-shadow → hiệu ứng transition cho box-shadow
* duration-300 → thời gian transition 300ms
---
* w-16 → width: 4rem (64px)
* h-16 → height: 4rem (64px)
* rounded-full → bo tròn 100% (hình tròn)
* object-cover → ảnh cover, giữ tỉ lệ
---
* ml-4 → margin-left: 1rem (16px)
* flex-1 → flex: 1 (chiếm toàn bộ phần còn lại)
---
* text-lg → font-size lớn (~18px)
* font-semibold → font-weight: 600
* text-gray-800 → màu xám đậm
* truncate → cắt chữ + dấu "..." khi dài
---
* text-sm → font-size nhỏ (~14px)
* text-gray-500 → màu xám nhạt
---
* px-4 → padding trái + phải 1rem (16px)
* py-2 → padding trên + dưới 0.5rem (8px)
* bg-blue-500 → nền xanh
* text-white → chữ màu trắng
* rounded-md → bo góc vừa
* hover:bg-blue-600 → hover đổi sang xanh đậm hơn
* focus:ring-2 → viền focus dày 2px
* focus:ring-blue-300 → màu viền focus xanh nhạt

### Câu A2 (10đ) — Responsive & States
1. Giải thích prefix responsive: 
+ md: -> áp dụng từ >= 768px
+ lg: -> áp dụng từ >= 1024px
+ xl: -> áp dụng từ >= 1280px
- VD:
+ md:grid-cols-2 -> từ >= 768px: grid có 2 côt
+ lg:grid-cols-4 -> từ >= 1024px: grid có 4 cột
2. Giải thích state modifiers: 
+ hover: áp dụng khi hover (rê chuột)
+ focus: áp dụng khi focus (input, button)
+ active: áp dụng khi đang làm click 
+ group-hover: phần tử con thay đổi khi phần tử cha (có class group) bị hover
3. Viết class Tailwind cho: "Ẩn trên mobile, hiện dạng flex trên tablet trở lên" (tương đương d-none d-md-flex của Bootstrap) -> Tailwind: hidden md:flex

## PHẦN C — PHÂN TÍCH
### Câu C1 (10đ) — Tailwind vs CSS thuần

### Câu C2 (10đ) — Performance
1. File HTML dùng Tailwind thường rất dài (nhiều classes). Tailwind CSS file cuối cùng lại NHỎ HƠN Bootstrap CSS tại vì: 
+ Bootstrap cung cấp sẵn toàn bộ CSS -> file lớn dù dùng không hết
+ Tailwind chỉ generate các class được sử dụng trong project
-> Vì vậy CSS cuối cùng của Tailwind nhỏ hơn Bootstrap
2. Giải thích Tailwind PurgeCSS (Tailwind JIT): 
- PurgeCSS (cách cũ): Tailwind tạo ra rất nhiều class CSS. Sau đó dùng PurgeCSS để: quét file HTML, JS; xem bạn dùng class nào; giữ lại class đó và xóa phần còn lại
- JIT - cách mới: không tạo sẵn toàn bộ CSS nữa. Khi bạn viết class trong HTML: Tailwind generate CSS ngay lúc đó -> không cần “xóa” nhiều như PurgeCSS vì: hỉ tạo đúng cái cần dùng
- Nó loại bỏ: Loại bỏ các utility classes KHÔNG được sử dụng
3. Khi nào KHÔNG nên dùng TailwindCSS? Cho 2 tình huống cụ thể.