## PHẦN A — KIỂM TRA ĐỌC HIỂU 
### Câu A1 (10đ) — 5 Loại Định Vị
| Chức vụ   | Luôn sử dụng dung lượng trong luồng | Tham chiếu vị trí        | X theo trang | Trường hợp sử dụng   
| static    |  Có                                 | Không có                 | Không        | Mặc định
| relative  |  Có                                 | Chính nó(vị trí ban đầu) | Không        | Dịch chuyển nhẹ, làm
|           |                                     |                          |              | mốc cho absolute
| absolute  |  Không                              | Tổ tiên gần nhất có      | Không        | Badge,             
|           |                                     | position khác static     |              | dropdown, tooltip
| fixed     |  Không                              | Viewport(màn hình)       | Có           | Nút chat, popup
| sticky    |  Có -> không (khi dính)             | Ban đầu: chính nó ->     | Có(khi dính) | Header dính
|           |                                     | sau: viewport            |              |

- absolute tham khảo body khi: khi không có tổ tiên nào có position khác static, phần tử absolute sẽ tham chiếu đến body (toàn trang)
- Tham chiếu đến parent khi: phần tử cha (hoặc tổ tiên gần nhất) có position là: relative, absolute, fixed, sticky
- Giải thích khái niệm "tổ tiên ở vị trí gần nhất": là phần tử bao ngoài gần nhất có position khác static. Nếu phần tử cha trực tiếp là static, trình duyệt sẽ tiếp tục tìm lên các cấp cao hơn cho đến khi nào gặp phần tử phù hợp

### Câu A2 (10đ) — Flexbox vs Grid
/* Trường hợp 1 */
.container { display: flex; }
.item { flex: 1; }
- 4 items, mỗi items flex:1 -> chia đều chiều ngang
- Bố cục: 1 hàng, 4 cột
[item] [item] [item] [item]

/* Trường hợp 2 */
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
- width: 45% + margin trái/phải (2.5% + 2.5%) = 50% -> mỗi item chiếm 50% chiều ngang -> mỗi hàng chứa 2 item
- 6 items -> 3 hàng, 2 cột
- Bố cục: 3 hàng, 2 cột
[item] [item]
[item] [item]
[item] [item]

/* Trường hợp 3 */
.container { display: flex; justify-content: space-between; align-items: center; }
- Phân tích: 
+ justify-content: space-between ->dàn đều theo chiều ngang
+ align-items: center -> căn giữa theo chiều dọc
- 3 items nằm trên 1 hàng, cách đều nhau
- Bố cục:
[item]      [item]      [item]
(căn giữa theo chiều dọc)

/* Trường hợp 4 */
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
- Phân tích: 3 cột: + cột 1: 200px
                    + cột 2: 1fr (co giãn)
                    + cột 3: 200px
- 3 items -> 1 hàng
- Bố cục:
[200px] [     1fr     ] [200px]
(có khoảng cách gap 20px giữa các cột)

/* Trường hợp 5 */
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
- Phân tích: 3 cột bằng nhau, 7 item -> mỗi hàng chứa 3 item
- 7 items -> 3 hàng: + hàng 1: 3 item
                     + hàng 2: 3 item
                     + hàng 3: 1 item
- Bố cục: 3 hàng, item cuối nằm ở cột 1 của hàng 3
[item] [item] [item]
[item] [item] [item]
[item] [    ] [    ]

## PHẦN C — SUY LUẬN
### Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?
1. Navigation bar ngang (logo + menu + buttons)
- Dùng: Flexbox
- Giải thích: 
+ Layout 1 chiều (ngang)
+ Cần dàn đều, căn giữa, đẩy phần tử sang trái/ phải (justify-content)
+ Flexbox xử lí rất tốt
2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
- Dùng: Grid
- Giải thích:
+ Layout dạng lưới (2 chiều)
+ Cần chia đều 3 cột cố định
+ Grid tự động xuống hàng khi đủ cột
3. Layout blog: main content + sidebar
- Dùng: Grid
- Giải thích:
+ Layout 2 cột rõ ràng (main + sidebar)
+ Cần kiểm soát kích thước từng cột (ví dụ: 1fr + 300px)
+ Grid phù hợp hơn Flex
4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
- Dùng: Grid
- Giải thích:
+ Layout dạng lưới nhiều cột
+ Cần chia đều 4 cột
+ Grid giúp bố trí rõ ràng, dễ responsive
5. Card sản phẩm (ảnh trên, text giữa, nút dưới - nút luôn dính đáy)
- Dùng: Flexbox (theo chiều dọc)
- Giải thích:
+ Layout 1 chiều (dọc)
+ Dùng flex-direction: colum
+ Có thể dùng margin-top: auto để đẩy nút xuống đáy

### Câu C2 (10đ) — Debug Flexbox
* Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống
- Nguyên nhân: 
+ Các '.card' có nội dung khác nhau -> chiều cao khác nhau
+ Nút '.btn' nằm ngay sau nội dung -> bị lệch lên xuống
+ Chưa dùng flex theo chiều dọc để cố định vị trí nút
- Cách sửa:
+ Cho '.card' thành flex theo cột
+ Đẩy nút xuống đáy bằng 'margin-top: auto'
- Code sửa:
. card-container {
    display: flex;
    flex-wrap: ;
}
. card {
    width: 30%;
    margin: 1.5%
    display: flex;
    flex-direction: colum;
}
.card img {
    width: 100%
}
.card h3 {
    font-size: 18px;
}
.card.btn {
    padding: 10px;
    margin-top: auto;
}

* Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên
- Nguyên nhân:
+ Mới chỉ dùng 'display: flex'
+ Chưa dùng: . 'justify-content' (căn ngang)
             . 'align-items' (căn dọc)
- Cách sửa: thêm căn giữa theo cả 2 chiều
- Coce sửa: 
.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hero-content {
    text-align: center;
}

* Lỗi 3: Sidebar bị co lại khi content quá dài
- Nguyên nhân: 
+ Flex mặc định cho phép item co lại ('flex-shrink')
+ Sidebar bị ép nhỏ khi content quá dài
- Cách sửa: không cho sidebar co lại
- Code sửa:
.layout {
    display: flex;
}
.sidebar {
    width: 250px;
    flex-shrink: 0;
}
.content {
    flex: 1;
}