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

### Câu A3 (7đ) — Box Model — Tính toán kích thước
- TH1: 
+ Chiều rộng hiển thị = 450px
+ Không gian chiếm trên trang = 470px
- TH2:
+ Chiều rộng hiển thị = 400px
+ Kích thước content thực tế = width - padding - borger = 400-40-10 = 350px
+ Không gian chiếm trên trang = width + margin = 400+20 = 420px
- TH3:
+ Khoảng cách giữa box-a và box-b = 40px
+ Giải thích tại sao khoảng cách giữa box-a và box-b không phải 65px vì: khi 2 margin dọc chạm nhau thì trình duyệt sẽ gộp lại và lấy giá trị lớn hơn
- Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px, khoảng cách là 30px. Vì khi có số âm nên không dùng max nữa và trình duyệt sẽ cộng đại số

### Câu A4 (5đ) — Tính đặc hiệu (Độ ưu tiên)
1. Điểm đặc hiệu tính toán (a, b, c) cho từng quy tắc là:  
* Dạng (a, b, c): a = số lượng id; b = số lượng class, attribute, pseudo-class; c = số lượng tag (element). Áp dụng vào từng rule: 
- Rule A: p {color: black;} 
+ có: p -> 1 tag, không có id, không có class
-> (0, 0, 1)
- Rule B: .price {color: blue;} 
+ có: .price -> 1 class, không có id, không có tag
-> (0, 1, 0)
- Rule C: #main-price {color: red;}
+ có: #main-price -> 1 id, không có class, không có tag
-> (1, 0 , 0)
- Rule D: p.price {color:green;}
+ có: p -> 1 tag, .price -> 1 class, không có id
-> (0, 1, 1)
2. Element sẽ có màu: đỏ. Vì Rule có chứa id nên có độ ưu tiên cao nhất (1, 0, 0), lớn hơn tất cả các rule còn lại, do đó màu đỏ được áp dụng
3. Nếu thêm <p class="price" id="main-price" style="color: orange;"> phần tử có màu cam. Vì Inline CSS có độ ưu tiên cao hơn tất cả các selector thông thường nên sẽ ghi đè các rule khác
4. Nếu thêm Quy tắc A !important, phần tử có màu đen vì !important có độ ưu tiên cao nhất nên sẽ ghi đè  tất cả các rule khác, kể cả rule có id

## PHẦN C — DEBUG & SUY LUẬN
### Câu C1 (10đ) — Gỡ lỗi bố cục CSS
1. 
- Sidebar:  
+ width = 300px
+ padding = 20px * 2 = 40px
+ border = 1px * 2 = 2px
-> Tổng = 342px
- Nội dung(content):
+ width = 660px
+ padding = 30px * 2
+ border =1px * 2
-> Tổng = 722px
-> Do đó, chiều rộng thực tế của sidebar và nội dung(content-box): 342 + 722 = 1064px
2. Bố cục bị hỏng tại vì: do tổng chiều rộng thực tế của sidebar và nội dung(content-box) là 1064px lớn hơn chiều rộng của .container là 960px nên không đủ chỗ nằm cùng hàng. Do đó, trình duyệt buộc phải đẩy .content xuống dòng mới
3. 2 cách chỉnh sửa khác nhau:
- C1: dùng border-box:
    *{
        box-sizing: border-box;
    }
+ Giải thích: Khi đó: width đã bao gồm padding + border, sidebar vẫn 300px, content vẫn 600px. Vậy tổng = 960px
- C2: không dùng border-box: giảm width
    .sidebar {
        width: 258px;
        padding: 20px;
        border: 1px solid #ccc;
    }
    .content{
        width: 598px;
        padding: 30px;
        border: 1px solid #ccc;
    }
-> Tổng vẫn bằng 960px 

### Câu C2 (10đ) — Câu đố xếp tầng
1. "Sản phẩm A" (h2) có font-size = 20px và color = green
- Giải thích: 
+ .card .title { font-size: 20px; } -> áp dụng trực tiếp -> thắng kế thừa từ .container (14px)
+ Về màu: 
    .card { color: blue; }
    #featured .title { color: red; } (mạnh hơn)
    .highlight { color: green !important; } (có !important nên thắng tất cả)
-> kết quả: green
2. "Mô tả sản phẩm" (p trong thẻ đặc trưng) có color = blue
- Giải thích:
    .card p { color: inherit; } (kế thừa từ cha .card)
    .card { color: blue; }
-> vậy p phải nhận màu blue
3. "Sản phẩm " (h2) có font-size = 20px và color = blue
- Giải thích: 
+ font-size: .card .title { font-size: 20px; } (áp dụng trực tiếp)
+ color: .card { color: blue; } (không có id hay !important -> dùng màu của .card)
-> kết quả: blue
4. "Mô tả sản phẩm B" (p.highlight) có color = green
- Giải thích:
    .highlight { color: green !important; }
(có !important nên ghi đè):
    .card p { color: inherit; }
    .card { color: blue; }
-> vậy kết quả: green

## PHẦN B — THỰC HÀNH CODE
### Bài B1 (20đ) — Style trang Profile
- Các bộ chọn đã sử dụng: 
1. Element selector: body, header, table, footer
2. Class selector: .active
3. ID selector: #about, #skills, #contact
4. Descendant selector: nav a, th, td
5. Pseudo-class: a, tr, tr(even)
6. Universal selector: *

### Bài B2 (20đ) — Box Model Lab
* Phần 1:
- Hộp 1 (content-box): chiều rộng thực tế = 350px (đo từ DevTools)
- Hộp 2 (border-box): chiều rộng thực tế = 300px(đo từ DevTools)
- Giải thích sự khác biệt: 
+ content-box: width chỉ tính nội dung, nên cộng thêm padding và border
+ border-box: width đã bao gồm paddding và boder nên không tăng kích thước

* Phần 2:
- Trường hợp không dùng border-box: chiều rộng thực tế:
+ Sidebar: 250+30=280px
+ Content: 500+40=540px
+ Ads: 250+30=280px
-> tổng=1100px > 1000px. Do đó, layout bị vỡ, các cột không nằm cùng hàng
- Trường hợp dùng border-box:
+ box-sizing: border-box giúp padding không làm tăng kíhc thước phần tử
-> tổng=1000px

### Bài B3 (15đ) — Cuộc chiến tính đặc thù
1. 10 quy tắc + điểm đặc hiệu:
    1. p -> (0,0,0,1)
    2. .text -> (0,0,1,0)
    3. .highlight -> (0,0,1,0)
    4. p.text -> (0,0,1,1)
    5. .text.highlight -> (0,0,2,0)
    6. p.text.highlight -> (0,0,2,1)
    7. #demo -> (0,1,0,0)
    8. #demo.text -> (0,1,1,0)
    9. #demo.text.highlight -> (0,1,2,0)
    10. p#demo.text.highlight ->(0,1,2,1)
2. Phần tử cuối cùng hiển thị màu: gold. Tại vì: rule có specificity cao nhất (0,1,2,1) nên ghi đè tất cả các rule khác
3. ảnh chụp màn hình
4. Thay đổi quy tắc thứ tự trong tệp CSS. Kết quả:
- Nếu specificity khác nhau -> không bị ảnh hưởng
- Nếu specificity bằng nhau -> rule viết sau sẽ thắng

## PHẦN D — VIDEO THỰC HÀNH OBS