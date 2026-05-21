## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (5đ) — Viewport & Mobile-First
1. Thẻ xác định chính xác <meta viewport>:
''''html
<meta name="viewport" content="width=device-width, initial-scale=1.0">

- Giải thích từng thuộc tính: 
+ width=device-width: chiều rộng trang web sẽ bằng đúng chiều rộng màn hình thiết bị (điện thoại, tablet)
+ initial-scale=1.0: tỷ lệ zoom ban đầu là 1 (không phóng to hay thu nhỏ)
2. Nếu THIẾU thẻ , iPhone sẽ hiển thị trang web như: 
- Sẽ giả lập trang web như trên màn hình desktop (~980px)
- Toàn bộ trang bị thu nhỏ lại để vừa màn hình
- Người dùng phải zoom tay để đọc chữ
- Giao diện bị vỡ layout, không responsive.
3. 
* Mobile-First: thiết kế cho mobile trước. Sau đó dùng min-width để mở rộng cho màn hình lớn hơn.
- Ví dụ CSS với breakpoint 768px:
/* Mobile (mặc định) */
.container {
    background-color: pink;
}
/* Tablet trở lên */
@media (min-width: 768px) {
    .container {
        background-color: blue;
    }
}
* Desktop-First: Thiết kế cho desktop trước. Sau đó dùng max-width để thu nhỏ cho mobile
- Ví dụ CSS với breakpoint 768px:
/* Desktop (mặc định) */
.container {
    background-color: blue;
}

/* Mobile */
@media (max-width: 768px) {
    .container {
        background-color: pink;
    }
}
- Mobile-First được khuyên dùng tại vì: 
+ Phù hợp xu hướng: người dùng mobile chiếm đa số
+ Tối ưu hiệu năng: tải nhanh hơn trên thiết bị yếu
+ CSS gọn hơn: viết từ nhỏ -> lớn (dễ mở rộng)
+ Tránh dư thừa code không cần thiết
+ Thiết kế chuẩn responsive hơn
-> Vì vậy, Mobile-First là phương pháp hiện đại và được khuyến khích sử dụng

### Câu A2 (5đ) — Điểm ngắt
- Tiêu chuẩn breakpoint (theo tài liệu hoặc Bootstrap):
| Breakpoint | Kích thước (px) | Thiết bị đại diện        | Gợi ý số cột sản phẩm |
|------------|-----------------|--------------------------|-----------------------|
| xs         | < 576px         | Điện thoại nhỏ           | 1 cột                 |
| sm         | ≥ 576px         | Điện thoại lớn           | 2 cột                 |
| md         | ≥ 768px         | Tablet                   | 2–3 cột               |
| lg         | ≥ 992px         | Laptop                   | 3–4 cột               |
| xl         | ≥ 1200px        | Desktop                  | 4–5 cột               |
| xxl        | ≥ 1400px        | Màn hình lớn (wide)      | 5–6 cột               |

- Ví dụ sử dụng breakpoint trong CSS (Mobile-First)
    .product {
        width: 100%; /* Mobile: 1 cột */
    }

    @media (min-width: 576px) {
        .product {
            width: 50%; /* 2 cột */
        }
    }

    @media (min-width: 768px) {
        .product {
            width: 33.33%; /* 3 cột */
        }
    }

    @media (min-width: 992px) {
        .product {
            width: 25%; /* 4 cột */
        }
    }

### Câu A3 (5đ) — Truy vấn phương tiện
- Bảng điền: 
| Kích thước màn hình | Width của .container |
|---------------------|---------------------|
| 375px               | 100%                |
| 600px               | 540px               |
| 800px               | 720px               |
| 1000px              | 960px               |
| 1400px              | 1140px              |
- Giải thích: 
+ 375px < 576 -> dùng mặc định -> 100%
+ 600px ≥ 576 -> 540px
+ 800px ≥ 768 -> 720px
+ 1000px ≥ 992 -> 960px
+ 1400px ≥ 1200 -> 1140px

### Câu A4 (5đ) — Kiến thức cơ bản về SCSS
- 4 tính năng chính của SCSS: 
1. Biến ($primary-color): biến trong CSS cho phép lưu giá trị (màu sắc, kích thước, font...) để tái sử dụng nhiều lần
+ Ví dụ:
    $primary-color: pink;

    .button {
        color: $primary-color;
    }
-> Giúp code dễ quản lí và thay đổi nhanh chóng
2. Nesting (viết CSS lồng nhau): cho phép viết CSS theo dạng lồng nhau giống cấu trúc HTML
+ Ví dụ:
    .nav {
        ul {
            list-style: none;
        }
    li {
        display: inline;
    }
}
-> Giúp code rõ ràng, dễ đọc hơn
3. Mixins (@mixin, @include): cho phép tái sử dụng một nhóm các thuộc tính CSS
+ Ví dụ:
    @mixin box {
        padding: 10px;
        border: 1px solid black;
    }

    .card {
        @include box;
    }
-> Giúp tránh lặp lại code
4. @extend/ Thừa kế: cho phép một class kế thừa toàn bộ style từ class khác
+ Ví dụ: 
    .button {
        padding: 10px;
        border-radius: 5px;
    }

    .primary-btn {
        @extend .button;
        background: blue;
    }
-> Giúp tái sử dụng và tổ chức code tốt hơn
- Trình duyệt không đọc được tệp .scss tại vì: Trình duyệt chỉ hiểu CSS thuần.
SCSS là ngôn ngữ mở rộng của CSS (có biến, mixin, nesting...). Vì vậy, trình duyệt không thể hiểu trực tiếp file .scss
- Bước chuyển SCSS -> CSS: cần biên dịch (compile) SCSS thành CSS bằng công cụ:
+ Sass (dòng lệnh)
+ Live Sass Compiler (VS Code)
+ Ví dụ: sass style.scss style.css -> sau khi biên dịch, trình duyệt sẽ đọc file .css

## PHẦN B — THỰC HÀNH CODE
### Bài B3 (20đ) — SCSS Refactor
- Lấy file CSS từ bài B1: responsive.css
- Compile - Biên dịch SCSS -> CSS: sử dụng lệnh biên dịch: sass scss/style.scss style.css

## PHẦN C — PHÂN TÍCH
### Câu C1 (10đ) — Phân tích trang web thực tế
* Phân tích:
1. Điều hướng: 
- Mobile (375px): 
+ Thanh menu chuyển thành biểu tượng ☰ (hamburger)
+ Menu sidebar bị ẩn
+ Thanh tìm kiếm thu gọn thành icon
- Tablet (768px):
+ Sidebar xuất hiện dạng thu gọn (chỉ icon)
+ Có thể mở rộng khi bấm
- Desktop (1440px):
+ Sidebar hiển thị đầy đủ (icon + chữ)
+ Thanh tìm kiếm hiển thị đầy đủ
2. Nội dung lưới
- Mobile: hiển thị 1 cột video
- Tablet: hiển thị khoảng 2 cột video
- Desktop: hiển thị 3 cột video
3. Thành phần bị ẩn trên thiết bị di động:
- Sidebar đầy đủ bị ẩn
- Một số nút (upload, thông báo) được thu nhỏ
- Thanh tìm kiếm không hiển thị đầy đủ
4. Cỡ chữ
- Mobile: chữ lớn hơn, dễ đọc hơn
- Tablet: cỡ chữ trung bình
- Desktop: chữ nhỏ hơn để tiết kiệm không gian
5. @media quy tắc: ![alt text](<ảnh C1- @media.jpg>)

### Câu C2 (10đ) — Thiết kế Chiến lược đáp ứng
* Mobile (<768px)
- Wireframe:
┌───────────────┐
│   HEADER      │
├───────────────┤
│   HERO IMAGE  │
├───────────────┤
│   FOOD 1      │
│   FOOD 2      │
│   FOOD 3      |
|   FOOD 4      |
|   FOOD 5      |
|   FOOD 6      |
├───────────────┤
│   FORM        │
├───────────────┤
│   MAP         │
├───────────────┤
│   FOOTER      │
└───────────────┘
- Phân tích:
+ Layout: 1 cột
+ Form: nằm dưới danh sách món ăn
+ Ẩn: không cần ẩn nhiều, chỉ đơn giản layout
+ Ưu tiên cuộc dọc (scroll)

* Tablet (768px - 1023px)
- Wireframe:
┌───────────────────────┐
│        HEADER         │
├───────────────────────┤
│      HERO IMAGE       │
├───────────┬───────────┤
│ FOOD 1    │ FOOD 2    │
│ FOOD 3    │ FOOD 4    │
│ FOOD 5    │ FOOD 6    │
├───────────┴───────────┤
│        FORM           │
├───────────────────────┤
│         MAP           │
├───────────────────────┤
│        FOOTER         │
└───────────────────────┘
- Phân tích:
+ Grid: 2 cột
+ Form: vẫn ở dưới
+ Map: full width dưới cùng
+ Hiển thị thoáng hơn mobile

* Desktop (>=1024px)
- Wireframe:
┌──────────────────────────────┐
│            HEADER            │
├──────────────────────────────┤
│         HERO IMAGE           │
├──────────────┬───────────────┤
│  FOOD GRID   │     FORM      │
│  (3 cột)     │               │
│              │               │
├──────────────┴───────────────┤
│            MAP               │
├──────────────────────────────┤
│           FOOTER             │
└──────────────────────────────┘
- Phân tích:
+ Layout: 2 cột, cột trái: danh sách món; cột phải: form đặt bàn
+ Grid: 3 cột
+ Không cần tạo sidebar riêng
+ Tận dụng chiều ngang màn hình

* Khung CSS:
    .container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .food-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .main {
        display: block;
    }

    @media (min-width: 768px) {
        .food-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .main {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 20px;
        }

        .food-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

## Phần D: 