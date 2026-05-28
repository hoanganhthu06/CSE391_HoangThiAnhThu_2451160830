## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (5đ) — var / let / const
// Đoạn 1
console.log(x);
var x = 5;
- Dự đoán: undefined
- Giải thích: 
+ var bị hoisting (đưa lên đầu phạm vi)
+ Nhưng chỉ khai báo, chưa gán giá trị
+ Nên x tồn tại nhưng có giá trị undefined

// Đoạn 2
console.log(y);
let y = 10;
- Dự đoán: ReferenceError: Cannot access 'y' before initialization
- Giải thích: 
+ let cũng được hoisting nhưng nằm trong Temporal Dead Zone (TDZ)
+ Không được phép truy cập trước khi khai báo -> lỗi

// Đoạn 3
const z = 15;
z = 20;
console.log(z);
- Dự đoán: TypeError: Assignment to constant variable
- Giải thích:
+ const không thể gán giá trị
+ Khi cố gắng gán z=20 -> lỗi ngay, không chạy đến console.log

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
- Dự đoán: [1, 2, 3, 4]
- Giải thích: 
+ const không cho phép gán lại biến nhưng vẫn có thể thay đổi nội dung hợp lệ bên trong object/ array
+ arr.push(4) là hợp lệ

// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
- Dự đoán: trong block: 2, ngoài block: 1
- Giải thích: 
+ let có phạm vi block
+ Biến a bên trong {} là biến khác với bên ngoài
+ Không ảnh hưởng lẫn nhau

- Sau khi tạo file `var_let_const.js` thì kết quả sau khi chạy trùng với kết quả dự đoán
- Giải thích các kết quả không được mong đợi: 
+ Đoạn 1: Kết quả `undefined` có thể gây bất ngờ vì biến được sử dụng trước khi khai báo. Nguyên nhân: `var` được hoisting (đưa khai báo lên đầu) nhưng chưa được gán giá trị nên có giá trih `undefined`
+ Đoạn 2: việc xảy ra lỗi có thể gây nhầm lẫn vì giống cách dùng của `var`. Nguyên nhân: `let` cũng được hoisting nhưng vẫn nằm Temporal Dead Zone (TDZ), không được phép truy cập trước khi khai báo
+ Đoạn 3: có thể nghĩ chương trình vẫn chạy và in ra giá trị của z. Thực tế: lỗi xảy ra ngay khi gán lại giá trị cho biến const, nên chương trình dừng và không thực hiện `console.log`
+ Đoạn 4: dễ hiểu nhầm rằng `const` không cho phép thay đổi giá trị. Thực tế: `const` không cho phép gán lại biến, nhưng vẫn cho phép thay đổi nội dung của object/array
+ Đoạn 5: có thể nghĩ rằng biến a bên trong block sẽ ghi đè biến bên ngoài. Thực tế: `let` có phạm vi block, nên hai biến a là hoàn toàn độc lập

### Câu A2 (5đ) — Các kiểu dữ liệu và ép kiểu
- Kết quả dự kiến: 
console.log(typeof null);              // "object"
console.log(typeof undefined);         // "undefined"
console.log(typeof NaN);              // "number"
console.log("5" + 3);                 // "53'
console.log("5" - 3);                 // 2
console.log("5" * "3");              // 15
console.log(true + true);            // 2
console.log([] + []);                // ""
console.log([] + {});                // "[object Object]"
console.log({} + []);                // 0 (hoặc "[object Object]" tùy ngữ cảnh)
- Sau khi chay, kết quả chạy trùng với kết quả dự kiên
- "5" + 3 và "5" - 3 cho kết quả khác nhau tại vì: 
+ "5" + 3: toán tử + ưu tiên nối chuỗi nếu có chuỗi. Kết quả: "53"
+ "5" - 3: toán tử - chỉ dùng cho số nên JavaScript ép "5" thành 5. Kết quả: 2

### Câu A3 (5đ) — So sánh == vs ===
- Dự đoán: 
console.log(5 == "5");                // true
console.log(5 === "5");               // false
console.log(null == undefined);       // true
console.log(null === undefined);      // false
console.log(NaN == NaN);             // false
console.log(0 == false);             // true
console.log(0 === false);            // false
console.log("" == false);            // true
- Từ giờ trở đi, nên dùng `===`(so sánh nghiêm ngặt) tại vì: không xảy ra ép kiểu ngầm -> tránh lỗi logic; kết quả rõ ràng dễ hiểu và sẽ an toàn hơn khi làm dự án thực tế

### Câu A4 (5đ) — Thật & Giả
- Liệt kê tất cả giá trị Falsy trong JavaScript:
+ false
+ 0
+ -0
+ 0n (Biglnt zero)
+ "" (chuỗi rỗng)
+ null
+ undefined
+ NaN
- Dự kiến kết quả: 
if ("0") console.log("A");           // In 
if ("") console.log("B");            // Không in
if ([]) console.log("C");            // In 
if ({}) console.log("D");            // In 
if (null) console.log("E");          // Không in
if (0) console.log("F");             // Không in
if (-1) console.log("G");            // In 
if (" ") console.log("H");           // In 

### Câu A5 (5đ) — Template Literals
- 3 cách nối chuỗi sau bằng chữ mẫu (backtick):
// Cách 1:
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
var html = `<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;

## PHẦN C — SUY LUẬN
### Câu C1 (10đ) — Gỡ lỗi JavaScript
- Lỗi 1: thiếu dấu chấm phẩy
    return "Phần trăm giảm không hợp lệ"
+ Giải thích: Không bắt buộc nhưng nên có để tránh lỗi ngầm
+ Sửa:  return "Phần trăm giảm không hợp lệ";

- Lỗi 2: không kiểm tra kiểu dữ liệu giaBan
    const gia = tinhGiaGiamGia("100000", 20)
+ Giải thích: "100000" là string, dễ gây lỗi tính toán
+ Sửa: giaBan = Number(giaBan);

- Lỗi 3: phép gán thay vì so sánh
    if (giaSauGiam = 0)
+ Giải thích: đây là gán giá trị, không phải so sánh
+ Sửa: if (giaSauGiam === 0)

- Lỗi 4: thiếu kiểm tra giaBan âm hoặc không hợp lệ
+ Giải thích: nếu giaBan<0 hoặc không phái số -> sai logic
+ Sửa: if (isNaN(giaBan) || giaBan < 0) {
        return "Giá bán không hợp lệ";
       }

- Lỗi 5: phanTramGiam không phải số
+ Giải thích: nếu truyền sai kiểu vẫn chạy -> lỗi logic
+ Sửa:  if (isNaN(phanTramGiam)) {
            return "Phần trăm giảm không hợp lệ";
        }

- Lỗi 6 (lỗi ẩn): var trong vòng lặp + setTimeout
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log("Item " + i)
        }, 1000)
    }
+ Giải thích: var có function scope, không có block scope. Sau khi vòng lặp kết thúc -> i=5. Call back trong setTimeout chạy sau -> dùng cùng một biến i
+ Sửa:  for (let i = 0; i < 5; i++) {
            setTimeout(function() {
                console.log("Item " + i);
            }, 1000);
        }

* Code hoàn chỉnh sau khi sửa:
```js
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    giaBan = Number(giaBan);
    if (isNaN(giaBan) || giaBan < 0) {
        return "Giá bán không hợp lệ";
    }

    if (isNaN(phanTramGiam) || phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }

    var giamGia = giaBan * phanTramGiam / 100;
    let giaSauGiam = giaBan - giamGia;

    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }

    return giaSauGiam;
}

// Test
const gia = tinhGiaGiamGia("100000", 20);
console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);

// Fix var → let
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```

### Câu C2 (10đ) — Bài toán thực tế
- Code `restaurant_bill.js`:
```js
function tinhHoaDon(danhSachMon, isWednesday = false, tipEnabled = true) {
    let tong = 0;

    // Tính tổng tiền
    danhSachMon.forEach(mon => {
        const thanhTien = mon.gia * mon.soLuong;
        mon.thanhTien = thanhTien;
        tong += thanhTien;
    });

    // Giảm giá
    let giamGiaPercent = 0;

    if (tong > 1000000) {
        giamGiaPercent = 15;
    } else if (tong > 500000) {
        giamGiaPercent = 10;
    }

    // Wednesday (Thứ 4)
    if (isWednesday) {
        giamGiaPercent += 5;
    }

    let tienGiam = tong * giamGiaPercent / 100;

    // VAT + Tip (làm tròn)
    let vat = Math.round((tong - tienGiam) * 0.08);
    let tip = tipEnabled ? Math.round((tong - tienGiam) * 0.05) : 0;

    let thanhToan = Math.round(tong - tienGiam + vat + tip);

    function formatTien(tien) {
        return tien.toLocaleString("vi-VN") + "đ";
    }

    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG           ║");
    console.log("╠══════════════════════════════════════╣");

    danhSachMon.forEach((mon, index) => {
        const line = `║ ${index + 1}. ${mon.ten.padEnd(10)} x${mon.soLuong} @${(mon.gia/1000).toFixed(0)}k = ${(mon.thanhTien/1000).toFixed(0)}k`;
        console.log(line.padEnd(46) + "║");
    });

    console.log("╠══════════════════════════════════════╣");
    console.log(`║ Tổng cộng:        ${formatTien(tong).padStart(18)} ║`);
    console.log(`║ Giảm giá (${giamGiaPercent}%): ${formatTien(tienGiam).padStart(14)} ║`);
    console.log(`║ VAT (8%):         ${formatTien(vat).padStart(18)} ║`);
    console.log(`║ Tip (5%):         ${formatTien(tip).padStart(18)} ║`);
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:       ${formatTien(thanhToan).padStart(18)} ║`);
    console.log("╚══════════════════════════════════════╝");
}

const danhSach = [
    { ten: "Phở bò", gia: 65000, soLuong: 2 },
    { ten: "Trà đá", gia: 5000, soLuong: 3 },
    { ten: "Bún chả", gia: 55000, soLuong: 1 }
];

tinhHoaDon(danhSach, true, true);
```
