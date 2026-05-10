## Phần A - Kiểm tra đọc hiểu

### Câu A1 - HTTP & Trình duyệt
1. Khi nhập https://shopee.vn trình duyệt và nhấn Enter, thứ tự đúng ít nhất 5 bước xảy ra (từ tra cứu DNS đến kết xuất):
- Trình duyệt kiểm tra cache (bộ nhớ đệm).
- Nếu chưa có, trình duyệt gửi yêu cầu DNS để lấy địa chỉ IP của shopee.vn.
- Thiết lập kết nối TCP tới server.
- Thực hiện bắt tay SSL/TLS (do dùng HTTPS).
- Gửi HTTP Request (GET) tới server.
- Server trả về HTTP Response.
- Trình duyệt nhận HTML và bắt đầu render trang.
- Tải thêm các tài nguyên (CSS, JS, ảnh,...).
2. Trong DevTools của Chrome, tab Network cho thấy thông tin: hiển thị tất cả các yêu cầu (request) giữa trình duyệt và server, bao gồm:
- Danh sách các request (HTML, CSS, JS, ảnh,...)
- Mã trạng thái HTTP (200, 404, 500,...)
- Thời gian tải từng tài nguyên
- Kích thước dữ liệu
- Loại tài nguyên (document, stylesheet, script,...)
- Ảnh minh họa DevTools ![Network Screenshot](c:\PBT_01\screenshots\network.png)

### Câu A2 - HTML ngữ nghĩa
- Trang web dưới đây được Google đánh giá SEO thấp là vì: không sử dụng HTML ngữ nghĩa (semantic HTML), khiến công cụ tìm kiếm khó hiểu cấu trúc và nội dung của trang.

- Các lỗi ngữ nghĩa: 
1. Phần header không dùng thẻ ngữ nghĩa: <div class="header">, thẻ <div> không thể hiện đây là phần đầu trang. Sửa lại thành: <header>
2. Menu điều hướng không dùng thẻ <nav>: <div class="menu">, thẻ này không thể hiện chức năng điều hướng. Sửa lại thành: <nav>
3. Các mục menu bọc trong thẻ <div> không cần thiết: 
<div><a href="/">Trang chủ</a></div>
<div><a href="/products">Sản phẩm</a></div>,
việc dùng <div> ở thẻ trên đây là dư thừa và không có ý nghĩa ngữ nghĩa.Sửa lại thành: 
<a href="/">Trang chủ</a>
<a href="/products">Sản phẩm</a>

4. Nội dung chính không dùng thẻ <main>: <div class="main">, thẻ này không xác định được đây là phần nội dung chính.Sửa lại thành: <main>
5. Sản phẩm không dùng <section> hoặc <article>: <div class="product">, thẻ này không phân định rõ đây là một khối nội dung độc lập.Sửa lại thành: <section class="product">
6. Tiêu đề sản phẩm không dùng thẻ heading: <div class="title">iPhone 16 Pro</div>, thẻ này không thể hiện đây là tiêu đề quan trọng. Sửa lại thành: <h1>iPhone 16 Pro</h1>
7. Hình ảnh không có thuộc tính alt: <img src="iphone.jpg">, thẻ này thiếu thuộc tính alt làm giảm khả năng SEO và accessibility. Sửa lại thành: <img src="iphone.jpg" alt="iPhone 16 Pro">
8. Footer không dùng thẻ <footer>: <div class="footer">© 2026 ShopTLU</div>, thẻ này không thể hiện đây là phần chân trang. Sửa lại thành: <footer>© 2026 ShopTLU</footer>

- Sửa lại code:
<header>
    <div class="logo">ShopTLU</div>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>

<main>
    <section class="product">
        <article>
            <h1>iPhone 16 Pro</h1>
            <p class="price">25.990.000đ</p>
            <img src="iphone.jpg" alt="iPhone 16 Pro">
        </article>
    </section>
</main>

<footer>
    <p>© 2026 ShopTLU</p>
</footer>

### Câu A3 - Khối vs Nội tuyến
- Kết quả của đoạn HTML là:
Hộp 1  
Text A Text B  
Hộp 2  
Text C Text D  
Hộp 3  
---
- Mô tả bằng nghệ thuật văn bản:
+------------------+
| Hộp 1            |
+------------------+
Text A Text B
+------------------+
| Hộp 2            |
+------------------+
Text C Text D
+------------------+
| Hộp 3            |
+------------------+
---

- Giải thích: Trong HTML, các phần tử được chia thành hai loại chính là phần tử khối (block) và phần tử nội tuyến (inline).
1. `<div>Hộp 1</div>`: vì `<div>` là phần tử block nên nó sẽ tạo một dòng mới và chiếm toàn bộ chiều ngang của trang. Nội dung "Hộp 1" hiển thị trên một dòng riêng. Sau khi kết thúc thẻ này, trình duyệt tự động xuống dòng.
2. `<span>Text A</span><span>Text B</span>`: cả hai thẻ `<span>` đều là phần tử inline nên không xuống dòng. "Text A" và "Text B" sẽ hiển thị liên tiếp trên cùng một dòng.
3. `<div>Hộp 2</div>`: đây là phần tử block nên trình duyệt sẽ ngắt dòng hiện tại (đang chứa "Text A Text B") và hiển thị "Hộp 2" trên một dòng mới.
4. `<span>Text C</span><strong>Text D</strong>`: hai phần tử này đều là inline nên hiển thị trên cùng một dòng. Nội dung "Text D" được in đậm vì nằm trong thẻ `<strong>`.
5. `<div>Hộp 3</div>`: tiếp tục là phần tử block nên nó sẽ xuống dòng và hiển thị "Hộp 3" trên một dòng riêng biệt.
```html
<div>Hộp 1</div>
<span>Text A</span>
<span>Text B</span>
<div>Hộp 2</div>
<span>Text C</span>
<strong>Text D</strong>
<div>Hộp 3</div>
```

### Câu A4 - Bảng
1. Sự khác nhau giữa <thead>, <tbody>, <tfoot>
- `<thead>` (table head): nhóm các hàng chứa thông tin tiêu đề của các cột (thường dùng kết hợp với thẻ `<th>`).
- `<tbody>` (table body): nhóm các hàng chứa nội dung, dữ liệu chính của bảng (thường dùng kết hợp với thẻ `<td>`).
- `<tfoot>` (table footer): nhóm các hàng chứa thông tin tổng kết, tính toán hoặc chú thích cho dữ liệu ở trên (ví dụ: dòng tổng tiền, tổng số lượng).

2. KHÔNG NÊN dùng bảng để tạo bố cục trang web vì:
- Không đúng ngữ nghĩa (semantic): thẻ `<table>` được thiết kế để hiển thị dữ liệu dạng bảng, không phải để bố trí giao diện. Việc lạm dụng sẽ làm code sai mục đích, ảnh hưởng đến SEO.
- Khó bảo trì và chỉnh sửa: layout bằng bảng thường phức tạp, nhiều thẻ lồng nhau, khiến việc chỉnh sửa giao diện trở nên khó khăn hơn so với dùng CSS (Flexbox, Grid).
- Hiệu suất kém hơn: trình duyệt phải tải và xử lý toàn bộ bảng trước khi hiển thị, làm trang web load chậm hơn so với layout bằng CSS.
- Không thân thiện với responsive: bảng rất khó thích nghi với các kích thước màn hình khác nhau (điện thoại, tablet), trong khi CSS hỗ trợ responsive rất tốt.

## Phần B - Thực hành code
### Bài B3:
- Các lỗi sai trong tệp HTML là:
1. Lỗi 1: Dòng 1 - Sai cú pháp <!DOCTYPE> - Sửa thành <!DOCTYPE html>
2. Lỗi 2: Dòng 4 - Thẻ <title> chưa đóng - Thêm </title>
3. Lỗi 3: Dòng 5 - Sai charset "utf8" - Sửa thành "UTF-8"
4. Lỗi 4: Dòng 8 - Thẻ <h1> đóng không đúng - Sửa thành: <\h1>
5. Lỗi 5: Dòng 12 - Thẻ <a> đóng không đúng - Sửa thành </a>
6. Lỗi 6: Dòng 20 - Thiếu dấu ngoặc kép src=iphone.jpg - Sửa thành src="iphone.jpg"
7. Lỗi 7: Dòng 20 - Thẻ <img> thiếu thuộc tính alt - Thêm alt="..."
8. Lỗi 8: Dòng 22 - Thẻ <b> và <p> đóng sai vị trí - Đưa </b> vào trong, </p> ra sau
9. Lỗi 9: Dòng 27 - Bảng thiếu <thead> và <tbody> - Bổ sung cấu trúc bảng chuẩn
10. Lỗi 10: Dòng 40 - Dùng 2 thẻ <main> - Thay bằng <aside>
11. Lỗi 11: Dòng 45 - Thẻ <p> trong footer chưa đóng - Thêm </p>
12. Lỗi 12: Chưa đóng thẻ <html> - Thêm </html> vào dòng cuối cùng

### Bài B4:
### 1. Thẻ ngữ nghĩa HTML5
1. Ảnh chụp: ![alt text](<anhB4-í 1-1.jpg>)
- Trang thegioididong.com có sử dụng các thẻ ngữ nghĩa HTML5:
<header>: dùng cho phần đầu trang (chứa logo, menu)
<footer>: dùng cho phần cuối trang (thông tin bản quyền, liên hệ)
<h1>: dùng cho tiêu đề chính của trang

- Vị trí:
<header> nằm ở đầu trong <body>
<footer> nằm ở cuối trang
<h1> nằm trong phần nội dung chính

- Thẻ mà trang đó không dùng đúng ngữ nghĩa:
+ Trang vẫn sử dụng nhiều <div> thay vì các thẻ như <section>, <article>
+ Một số khu vực nội dung có thể dùng <nav> nhưng vẫn dùng <div>

2. Ảnh chụp: ![alt text](anhB4_2.table-2.png)
- Qua việc sử dụng DevTools inspect phần "Cấu hình & Bộ nhớ", em phát hiện ra trang web Thế Giới Di Động **không sử dụng** thẻ `<table>` truyền thống để hiển thị bảng thông số kỹ thuật.
- Thay vì dùng `<table>`, `<tr>`, `<td>`, lập trình viên đã sử dụng thẻ danh sách không thứ tự `<ul class="text-specifi">` và các thẻ `<li>` chứa dữ liệu bên trong. Sau đó, họ sử dụng CSS để dàn trang (layout) các thẻ `<li>` này thành dạng lưới (grid) trông giống như một bảng thực thụ.
- Đây là một kỹ thuật dàn trang rất phổ biến ở các website hiện đại để dễ dàng tùy biến giao diện trên thiết bị di động (Responsive Web Design) hơn so với thẻ table truyền thống.

3. Ảnh chụp: ![alt text](anhB4_3.form-1.png)
- Vị trí form: Bao bọc ô nhập liệu tìm kiếm, nằm bên trong phần header của trang web.
- Thuộc tính của form:
  * `action="/tim-kiem"`: Khi người dùng tìm kiếm, dữ liệu sẽ được gửi đến đường dẫn `/tim-kiem` để xử lý và trả về kết quả.
  * `method`: Thẻ form này không khai báo tường minh thuộc tính method. Theo chuẩn HTML, trình duyệt sẽ mặc định hiểu method là `GET`. Ngoài ra, form có sử dụng sự kiện `onsubmit="return suggestSearch(event);"` để xử lý bằng JavaScript trước khi gửi đi.
- Input types được dùng:
  * `<input type="text">`: Được sử dụng làm ô nhập từ khóa tìm kiếm (có `name="key"`).
  * `<button type="submit">`: Nút bấm để thực thi lệnh gửi form tìm kiếm.

## Phần C - Suy luận
### Câu C1 - Thiết kế cấu trúc
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8"> <!-- Khai báo bộ ký tự -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive -->
    <title>Chi tiết sản phẩm</title>
</head>
<body>
    <!-- HEADER -->
    <header>
        <!-- header dùng cho phần đầu trang -->
        <h1>Trang sản phẩm</h1>
        <nav>
            <!-- nav vì đây là thanh điều hướng -->
            <a href="#">Trang chủ</a>
            <a href="#">Danh mục</a>
            <a href="#">Liên hệ</a>
        </nav>
    </header>
    <!-- BREADCRUMB -->
    <nav aria-label="breadcrumb">
        <!-- nav vì breadcrumb là điều hướng -->
        <ol>
            <!-- ol vì có thứ tự -->
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>
    <!-- MAIN CONTENT -->
    <main>
        <!-- main chứa nội dung chính -->
        <section>
            <!-- section chia khu vực sản phẩm -->
            <!-- KHU VỰC ẢNH -->
            <article>
                <!-- article vì là 1 khối nội dung độc lập -->
                <h2>Hình ảnh sản phẩm</h2>
                <figure>
                    <!-- figure chứa ảnh -->
                    <img src="img1.jpg" alt="Ảnh 1">
                    <figcaption>Ảnh chính</figcaption>
                </figure>
                <figure>
                    <img src="img2.jpg" alt="Ảnh 2">
                    <figcaption>Ảnh phụ</figcaption>
                </figure>
                <!-- thêm ảnh tương tự -->
            </article>
            <!-- THÔNG TIN SẢN PHẨM -->
            <article>
                <h2>Tên sản phẩm</h2>
                <p>Giá: <strong>20.000.000đ</strong></p>
                <!-- strong để nhấn mạnh giá -->
                <p>⭐⭐⭐⭐☆</p>
                <!-- đánh giá sao -->
                <p>Mô tả sản phẩm...</p>
            </article>
        </section>
        <!-- BẢNG THÔNG SỐ -->
        <section>
            <h2>Thông số kỹ thuật</h2>
            <table>
                <!-- table dùng để hiển thị dữ liệu dạng bảng -->
                <thead>
                    <!-- thead chứa tiêu đề -->
                    <tr>
                        <th>Thông số</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- tbody chứa dữ liệu -->
                    <tr>
                        <td>Màn hình</td>
                        <td>6.7 inch</td>
                    </tr>
                    <tr>
                        <td>Pin</td>
                        <td>4000mAh</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <!-- ĐÁNH GIÁ -->
        <section>
            <h2>Đánh giá</h2>
            <article>
                <!-- mỗi bình luận là 1 article -->
                <p>Người dùng A: Sản phẩm tốt</p>
            </article>
            <article>
                <p>Người dùng B: Đáng mua</p>
            </article>
        </section>
        <!-- SIDEBAR -->
        <aside>
            <!-- aside vì là nội dung phụ -->
            <h2>Sản phẩm tương tự</h2>
            <ul>
                <li><a href="#">Sản phẩm 1</a></li>
                <li><a href="#">Sản phẩm 2</a></li>
            </ul>
        </aside>
    </main>
    <!-- FOOTER -->
    <footer>
        <!-- footer cho phần cuối trang -->
        <p>Bản quyền © 2026</p>
    </footer>

</body>
</html>

### Câu C2 - So sánh & Tranh luận
Theo , nói chỉ cần dùng <div> cho mọi thứ là chưa hợp lý. Thực ra HTML ngữ nghĩa không phải để “cho đẹp”, mà nó giúp máy hiểu rõ cấu trúc trang. Ví dụ về SEO, khi dùng các thẻ như <header>, <main>, <article>, công cụ tìm kiếm sẽ dễ xác định đâu là nội dung chính, đâu là phần phụ, từ đó xếp hạng chính xác hơn. Nếu tất cả đều là <div> thì gần như mất hết ý nghĩa đó.
Về accessibility (khả năng truy cập), HTML ngữ nghĩa cũng rất quan trọng. Những người dùng trình đọc màn hình sẽ dựa vào các thẻ như <nav> hay <section> để điều hướng nhanh. Nếu chỉ dùng <div>, họ sẽ khó hiểu được bố cục trang, trải nghiệm sẽ kém hơn rất nhiều.
Ví dụ cụ thể, khi làm breadcrumb, nếu dùng <nav> kết hợp <ol> thì vừa rõ ràng về thứ tự, vừa giúp trình duyệt và công cụ hỗ trợ hiểu đây là điều hướng. Điều này tốt hơn nhiều so với việc chỉ dùng <div> và CSS.
Tuy nhiên, không phải lúc nào <div> cũng vô dụng. Trong những trường hợp chỉ cần chia layout đơn giản hoặc nhóm các phần tử để style bằng CSS, dùng <div> vẫn là lựa chọn hợp lý và nhanh gọn.
Do đó, nên kết hợp cả hai, không nên lạm dụng một phía.

## Phần D:
Link video: https://drive.google.com/file/d/1tqjaaMfYlj59AQ5zvc5SPCVSKbS3b9D5/view?usp=sharing