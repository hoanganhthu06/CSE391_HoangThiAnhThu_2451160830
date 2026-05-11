## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (5đ) — 3 Cách nhúng CSS
* 3 cách nhúng CSS vào HTML (nội tuyến, nội bộ, bên ngoài): 
1. CSS nội tuyến (Inline CSS): cách dùng là viết trực tiếp vào thuộc tính style trong thẻ HTML
- Ví dụ: 
    <p style="color: red; font-size: 18px;">
        Đây là đoạn văn màu đỏ
    </p>
- Ưu điểm:
+ Nhanh, đơn giản, tiện khi cần chỉnh sửa ngay.
+ Áp dụng ngay cho 1 phần tử cụ thể, không cần tạo thêm file
- Nhược điểm: 
+ Khó quản lí nếu dùng nhiều
+ Không thể dùng lại cho phần tử khác
+ Làm code HTML bị rối
- Nên dùng khi: cần thử nhanh hoặc chỉnh sửa tạm thời một phần tử cụ thể
2. CSS nội bộ (Internal CSS): cách dùng là viết CSS bên trong thẻ <style> đặt ở phần <head> của file HTML
- Ví dụ:  
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            p {
                color: blue;
                font-size: 18px;
            }
        </style>
    </head>
    <body>
        <p>Đây là đoạn văn màu xanh</p>
    </body>
    </html>
- Ưu điểm: 
+ Dễ quản lý hơn so với inline
+ Áp dụng được cho toàn bộ trang
- Nhược điểm:
+ Chỉ dùng trong một file HTML
+ Không tái sử dụng được cho nhiều trang
- Nên dùng khi: phù hợp với các bài tập nhỏ hoặc website chỉ có một vài trang
3. CSS bên ngoài (External CSS): cách dùng là viết CSS trong file riêng đuôi (đuôi .css) rồi liên kết với HTML bằng thẻ <link>
- Ví dụ: 
+ File style.css:
    p {
        color: green;
        font-size: 18px;
    }
+ File HTML:
    <!DOCTYPE html>
    <html>
    <head>
        <link rel="stylesshseet" href="style.css">
    </head>
    <body>
        <p>Đây là đoạn văn màu xanh lá</p>
    </body>
    </html>
- Ưu điểm:
+ Có thể dùng lại cho nhiều trang
+ Dễ bảo trì và chỉnh sửa
+ Tách riêng HTML Và CSS rõ ràng
- Nhược điểm: 
+ Cần thêm file bên ngoài
+ Trình duyệt phải tải thêm file CSS
- Nên dùng khi: thường dùng trong các dự án thưccj tế haowjc website lớn
* Nếu cùng 1 element có cả ba cách CSS đồng thời áp dụng, cách "thắng" là: CSS nội tuyến (thứ tự ưu tiên: CSS nội tuyến - CSS nội bộ - CSS bên ngoài)
- Giải thích: trình duyệt áp dụng CSS dựa trên độ ưu tiên
+ CSS nội tuyến được viết trực tiếp trong thẻ HTML nên nó có mức độ ưu tiên cao nhất
+ CSS nội bộ và CSS  bên ngoài đều là quy tắc bên ngoài phần tử nên bị yếu hơn
+ Khi có xung đột, trình duyệt sẽ chọn quy tắc có độ ưu tiên cao hơn

### Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả
- Không chạy mã, biết từng bộ chọn sau khi chọn phần tử: 
1. h1 -> Chọn: "Shop TLU"
2. .price -> Chọn: "25.990.000đ"; "45.990.000đ"
3. #app header -> Chọn: toàn bộ phần header chứa: "Shop TLU", "Home", "Products", "About"
4. nav a:first-child -> Chọn: "Home"
5. .product.featured h2 -> Chọn: "MacBook Pro"
6. article > p -> Chọn: + "25.990.000đ"
                        + "Mô tả sản phẩm..." (của iPhone 16)
                        + "45.990.000đ"
                        + "Mô tả sản phẩm..." (của MacBook Pro)
7. a[href="/"] -> Chọn: "Home"
8. .top-bar.dark h1 -> Chọn: "Shop TLU"

