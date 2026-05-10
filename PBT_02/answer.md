## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 — Các loại đầu vào
1. type="text" → Ô nhập văn bản 1 dòng → Không có kiểm tra tự động → Dùng để nhập tên sản phẩm hoặc tên khách hàng
2. type="email" → Ô nhập text → Tự kiểm tra có chứa @ và đúng định dạng email → Dùng cho đăng ký tài khoản hoặc nhập email nhận thông báo
3. type="password" → Ô nhập nhưng bị ẩn ký tự (hiện dấu •••) → Không kiểm tra nội dung → Dùng khi đăng nhập tài khoản
4. type="number" → Ô nhập số, có nút tăng giảm → Tự kiểm tra chỉ cho nhập số → Dùng để nhập số lượng sản phẩm
5. type="tel" → Ô nhập số điện thoại → Không kiểm tra chặt (tùy trình duyệt) → Dùng để nhập số điện thoại giao hàng
6. type="url" → Ô nhập đường link → Tự kiểm tra đúng định dạng URL (http/https) → Dùng khi nhập link website cá nhân (ví dụ shop)
7. type="date" → Hiển thị lịch để chọn ngày → Tự kiểm tra định dạng ngày → Dùng để chọn ngày giao hàng
8. type="radio" → Nút chọn 1 trong nhiều lựa chọn → Không kiểm tra nhưng chỉ chọn được 1 → Dùng chọn phương thức thanh toán (COD, chuyển khoản)
9. type="checkbox" → Ô tích chọn nhiều lựa chọn → Không kiểm tra → Dùng chọn nhiều sở thích hoặc đồng ý điều khoản
10. type="file" → Nút chọn file từ máy → Có thể giới hạn loại file → Dùng để upload ảnh sản phẩm hoặc ảnh đánh giá

### Câu A2 — Thuộc tính xác thực
* Dự đoán điều sẽ xảy ra khi người dùng nhấn nút Gửi cho mỗi trường hợp sau:
- Trường hợp 1: <input type="text" required value="">
    + Khi nhấn Gửi: Form KHÔNG gửi được
    + Vì: thuộc tính required yêu cầu phải nhập dữ liệu, nhưng ô đang để trống
- Trường hợp 2: <input type="email" value="abc">
    + Khi nhấn Gửi: Form KHÔNG gửi được
    + Vì: type="email" yêu cầu đúng định dạng email (phải có @), nhưng "abc" không hợp lệ
- Trường hợp 3: <input type="number" min="1" max="10" value="15">
    + Khi nhấn Gửi: Form KHÔNG gửi được
    + Vì: giá trị 15 vượt quá max="10"
- Trường hợp 4: <input type="text" pattern="[0-9]{10}" value="abc123">
    + Khi nhấn Gửi: Form KHÔNG gửi được
    + Vì: pattern yêu cầu đúng 10 chữ số, nhưng "abc123" không đúng định dạng
- Trường hợp 5: <input type="password" minlength="8" value="123">
    + Khi nhấn Gửi: Form KHÔNG gửi được
    + Vì: minlength yêu cầu ít nhất 8 ký tự, nhưng chỉ có 3 ký tự

* So sánh kết quả: kết quả thực tế khi test trên trình duyệt giống với dự đoán:
- Khi nhấn Gửi, trình duyệt hiển thị thông báo “Please fill out this field”. Tất cả các trường hợp đều không gửi được form.
- Điều này đúng với dự đoán vì trường có thuộc tính required nhưng không có dữ liệu.

### Câu A3 — Khả năng tiếp cận
1. <label for="email">quan trọng cho trình đọc màn hình người dùng tại vì: nó giúp liên kết giữa nhãn và ô nhập liệu. Khi người dùng sử dụng trình đọc màn hình, hệ thống sẽ đọc rõ ràng nội dung của label (ví dụ: “Email”) trước khi đến ô input, giúp họ hiểu cần nhập gì. Nếu không có label, người dùng sẽ không biết ô đó dùng để làm gì, gây khó khăn khi sử dụng.
2. Khi nào dùng <fieldset>+ <legend> là: được dùng khi cần nhóm các trường nhập liệu có liên quan với nhau. Ví dụ như nhóm các phương thức thanh toán. <fieldset> giúp gom các input lại thành một nhóm, còn <legend> đóng vai trò là tiêu đề của nhóm đó. Điều này giúp người dùng, đặc biệt là người dùng trình đọc màn hình, hiểu được các lựa chọn thuộc cùng một nội dung.
- Ví dụ cụ thể: 
<fieldset>
    <legend>Phương thức thanh toán</legend>
    <input type="radio" name="pay"> Tiền mặt
    <input type="radio" name="pay"> Chuyển khoản
</fieldset>

3. aria-label sử dụng vào lúc: khi không có thẻ <label> hiển thị, ví dụ như các ô tìm kiếm chỉ có biểu tượng mà không có chữ. Nó giúp cung cấp thông tin cho trình đọc màn hình.
- Không nên sử dụng aria-label khi đã có <label> tại vì: sẽ gây trùng lặp nội dung, khiến trình đọc màn hình đọc hai lần và làm người dùng khó chịu.

### Câu A4  — Media
1. Thuộc tính thích hợp loading="lazy" trên thẻ <img>: giúp trì hoãn việc tải ảnh cho đến khi người dùng cuộn đến gần vị trí của ảnh đó. 
- Thuộc tính thích hợp loading="lazy" trên thẻ <img> giúp cải thiện trang web tải nhanh hơn và tiết kiệm băng thông, đặc biệt với các trang có nhiều hình ảnh như trang thương mại điện tử.
- Không nên sử dụng lazy loading cho các hình ảnh quan trọng ở đầu trang như logo hoặc banner chính, vì có thể làm ảnh hiển thị chậm và ảnh hưởng đến trải nghiệm người dùng.
2. Nên cung cấp nhiều <source> thẻ <video> là tại vì: mỗi trình duyệt có thể hỗ trợ các định dạng video khác nhau. Khi có nhiều source, trình duyệt sẽ tự động chọn định dạng phù hợp để phát.
- Một số định dạng web video phổ biến là: MP4, WebM và OGG.
3. Thuộc tính alt được <img> sử dụng để mô tả nội dung của hình ảnh. Nó giúp trình đọc màn hình hiểu được nội dung ảnh, đồng thời hiển thị khi ảnh không tải được và hỗ trợ SEO.
* alt tốt cho 3 trường hợp sau:
- Ảnh sản phẩm iPhone 16: alt="Điện thoại iPhone 16 màu đen, mặt trước và sau"
- Ảnh trang trí (decorative): alt=""
- Hình ảnh biểu đồ doanh thu Q1/2026: alt="Biểu đồ doanh thu quý 1 năm 2026 tăng từ tháng 1 đến tháng 3"

### Câu A5 — So sánh <figure>với<img>
- Thẻ <img> dùng khi chỉ cần hiển thị hình ảnh đơn giản, không cần thêm chú thích bên ngoài. Thường áp dụng cho các hình mang tính trang trí như icon, banner hoặc hình minh họa.
- Thẻ <figure> kết hợp với <figcaption> được sử dụng khi hình ảnh là nội dung quan trọng và cần có mô tả đi kèm. Ví dụ như ảnh sản phẩm có kèm tên và giá, hoặc biểu đồ cần giải thích nội dung.
- Ví dụ thực tế sử dụng <img>: 
    <img src="icon-cart.png" alt="Giỏ hàng">: Icon giỏ hàng trên web, chỉ để nhìn, không cần chú thích
- Ví dụ thực tế sử dụng <figure> kết hợp với <figcaption>: đây là trang sản phẩm, cần tên và giá rõ ràng
    <figure>
    <img src="iphone.jpg" alt="iPhone 16 Pro Max 256GB Titan">
    <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
    </figure>

## PHẦN C — PHÂN TÍCH & SUY LUẬN 
### Câu C1 — Dạng gỡ lỗi
- Lỗi 1: Dòng 2 — Input "Tên" không có <label for="...">, vi phạm accessibility  
Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required>

- Lỗi 2: Dòng 4 — Input email chỉ dùng placeholder, không có <label>, không thân thiện với screen reader  
Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" required>

- Lỗi 3: Dòng 6 — Input mật khẩu không có <label>, thiếu ngữ nghĩa  
Sửa: <label for="password">Mật khẩu:</label> <input type="password" id="password" name="password" required minlength="6">

- Lỗi 4: Dòng 7 — Input nhập lại mật khẩu không có <label>, không rõ mục đích  
Sửa: <label for="confirm">Nhập lại mật khẩu:</label> <input type="password" id="confirm" name="confirm" required>

- Lỗi 5: Dòng 9 — Trường Phone dùng type="text", không tận dụng validation HTML5  
Sửa: <label for="phone">Số điện thoại:</label> <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>

- Lỗi 6: Dòng 9 — Trường Phone có sẵn value="0901234567", không nên đặt giá trị mặc định gây hiểu nhầm  
Sửa: Xóa thuộc tính value

- Lỗi 7: Dòng 11 — Thẻ <select> không có <label>, vi phạm accessibility  
Sửa: <label for="city">Thành phố:</label> 
      <select id="city" name="city">
          <option value="">--Chọn--</option>
          <option value="hn">Hà Nội</option>
          <option value="hcm">TP.HCM</option>
      </select>

- Lỗi 8: Dòng 16 — Không có input checkbox cho "Tôi đồng ý điều khoản", chỉ có <label>  
Sửa: <input type="checkbox" id="agree" name="agree" required>
      <label for="agree">Tôi đồng ý điều khoản</label>

* Code hoàn chỉnh:
<form>
    <label for="name">Tên:</label>
    <input type="text" id="name" name="name" required> 
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required minlength="6">
    <label for="confirm">Nhập lại mật khẩu:</label>
    <input type="password" id="confirm" name="confirm" required>
    <label for="phone">Số điện thoại:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>
    <label for="city">Thành phố:</label>
    <select id="city" name="city">
        <option value="">--Chọn--</option>
        <option value="hn">Hà Nội</option>
        <option value="hcm">TP.HCM</option>
    </select>
    <input type="checkbox" id="agree" name="agree" required>
    <label for="agree">Tôi đồng ý điều khoản</label>
    <input type="submit" value="Gửi">
</form>

### Câu C2 — Xác thực thiết kế chiến lược
1. Viết pattern biểu thức chính quy cho CMND/CCCD và Số tài khoản
- CMND/CCCD: pattern="[0-9]{12}"
- Số tài khoản: pattern="[0-9]{10,15}"  
2. Xác thực HTML5 không đủ an toàn cho ứng dụng ngân hàng vì nó chỉ hoạt động ở phía trình duyệt. Người dùng có thể dễ dàng bỏ qua bằng cách tắt validation hoặc chỉnh sửa dữ liệu trước khi gửi. Do đó, cần phải có xác thực ở phía backend để đảm bảo tính bảo mật và chính xác của dữ liệu.
3. 3 xác thực loại mà HTML5 KHÔNG THỂ làm được (phải sử dụng JavaScript): 
- So sánh dữ liệu giữa nhiều trường (ví dụ: mật khẩu và nhập lại mật khẩu)
- Kiểm tra dữ liệu với hệ thống (ví dụ: email đã tồn tại hay chưa)
- Các điều kiện logic phức tạp (ví dụ: PIN không trùng thông tin cá nhân)
4. 2 rủi ro do bảo mật nếu chỉ xác thực trên Frontend mà không xác thực Backend là: 
- Thứ nhất, người dùng có thể bỏ qua validation và gửi dữ liệu sai hoặc độc hại. 
- Thứ hai, hệ thống có thể bị tấn công như SQL Injection hoặc nhận dữ liệu không hợp lệ, gây lỗi hoặc ảnh hưởng đến toàn bộ hệ thống.

## Phần D:
Link video: https://drive.google.com/file/d/1tqjaaMfYlj59AQ5zvc5SPCVSKbS3b9D5/view?usp=sharing