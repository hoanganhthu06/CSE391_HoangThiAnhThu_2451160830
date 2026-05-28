## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (5đ) — Khai báo hàm so với biểu thức so với mũi tên
* Viết cùng 1 hàm tinhThueBaoHiem(luong) theo 3 cách:
1. Khai báo hàm
    function tinhThueBaoHiem(luong) {
        let thue=0;

        if (luong>11000000) {
            thue=luong*0.1;
        }
        return {
            thue: thue,
            thuc_nhan: luong - thue
        };
    }
2. Biểu thức hàm
    const tinhThueBaoHiem = function(luong) {
        let thue = 0;
        if (luong>11000000) {
            thue=luong*0.1;
        }
        return {
            thue: thue,
            thuc_nhan: luong - thue
        };
    };
3. Hàm mũi tên
    const tinhThueBaoHiem = (luong) => {
        let thue = 0;
        if (luong>11000000) {
            thue=luong*0.1;
        }
        return {
            thue: thue,
            thuc_nhan: luong - thue
        };
    };
* 3 cách này khác nhau về hoisting:
- Khai báo hàm: có hoisting đầy đủ, có thể gọi hàm trước khi khai báo
+ Ví dụ:
    console.log(tinhThueBaoHiem(15000000));

    function tinhThueBaoHiem(luong) {
        return {test: true};
    }
-> Chạy bình thường
- Biểu thức hàm: không hoisting phần thân hàm, biến có thể được hoisting nhưng chưa được gán giá trị
+ Ví dụ: 
    console.log(tinhThueBaoHiem(15000000));

    const tinhThueBaoHiem = function(luong) {
        return { test: true };
    };
-> Lỗi: cannot access before initialization
- Hàm mũi tên: giống function expression, không hoisting function
+ Ví dụ:
    console.log(tinhThueBaoHiem(15000000));

    const tinhThueBaoHiem = (luong) => {
        return { test: true };
    };
-> Lỗi tương tự

### Câu A2 (5đ) — Phạm vi & Kết luận
// Đoạn 1:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2
- Đầu ra dự kiến: 
1
2
3
2
2

// Đoạn 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
- Output sau 200ms: 
+ var: 3
+ var: 3
+ var: 3
+ let: 0
+ let: 1
+ let: 2

* Giải thích chi tiết: var và let cho kết quả khác nhau trong vòng lặp setTimeout tại vì:
- Với var: var có function scope (phạm vi theo hàm), không có block scope. Trong vòng lặp, chỉ có một biến i duy nhất. Do đó, quá trình vòng lặp chạy xong rất nhanh -> i=3; sau 100ms setTimeout mới chạy, lúc này tất cả callback đều dùng cùng 1 biến i=3
=> Kết quả in ra: 
var: 3
var: 3
var: 3
- Với let: let có block scope (phạm vi theo từng vòng lặp). Mỗi lần lặp tạo một biến j riêng biệt. Do đó, quá trình là: lần 1: j=0; lần 2: j=1; lần 3: j=2. Mỗi setTimeout giữ giá trị riêng của từng lần lặp
=> Kết quả in ra: 
let: 0
let: 1
let: 2

### Câu A3 (5đ) — Phương thức mảng
- Mảng: const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- Viết code cho các yêu cầu sau:
1. Lấy các số chẵn                    → [2, 4, 6, 8, 10]
    const evens = nums.filter(n => n % 2 === 0);
2. Nhân mỗi số với 3                  → [3, 6, 9, ..., 30]
    const triple = nums.map(n => n * 3);
3. Tính tổng tất cả                   → 55
    const sum = nums.reduce((acc, n) => acc + n, 0);
4. Tìm số đầu tiên > 7               → 8
    const firstGreater7 = nums.find(n => n > 7);
5. Kiểm tra CÓ số > 10 không         → false
    const hasGreater10 = nums.some(n => n > 10);
6. Kiểm tra TẤT CẢ đều > 0           → true
    const allGreater0 = nums.every(n => n > 0);
7. Tạo mảng "Số X là [chẵn/lẻ]"      → ["Số 1 là lẻ", "Số 2 là chẵn", ...]
    const description = nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
8. Đảo ngược mảng (không mutate gốc)  → [10, 9, ..., 1]
    const reversed = [...nums].reverse();

### Câu A4 (5đ) — Phân rã đối tượng và sự lan truyền
- Không chạy mã, đầu ra dự kiến:
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);   // iPhone 16 25990000 8 Titan
console.log(specs);                     // ReferenceError: specs is not defined

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);            // 23990000
console.log(updated.sale);             // true
console.log(product.price);            // 25990000

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);        // 16, tại vì Spread chỉ copy nông (shallow copy), specs là object bên trong -> vẫn dùng chung tham chiếu. Nghĩa là: copy.specs === product.specs // true, khi sửa là: copy.specs.ram = 16; => do đó, product.specs.ram cũng bị đổi theo

## PHẦN C — SUY LUẬN 
### Câu C1 (10đ) — Mã tái cấu trúc
- Viết lại code:
```js
const processOrders = (orders) =>
    orders
        .filter(({ status, total }) => status === "completed" && total > 100000)
        .map(({ id, customer, total }) => {
            const discount = total * 0.1;
            return {
                id,
                customer,
                total,
                discount,
                finalTotal: total - discount
            };
        })
        .sort((a, b) => b.finalTotal - a.finalTotal);
```

### Câu C2 (10đ) — API thiết kế
```js
const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i=0; i<arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },
    filter(arr, fn) {
        const result = [];
        for (let i=0; i<arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },
    reduce(arr, fn, initialValue) {
        let acc = initialValue;
        let startIndex = 0;

        // Nếu không có initialValue
        if (acc === undefined) {
            acc = arr[0];
            startIndex = 1;
        }
        for (let i=startIndex; i<arr.length; i++) {
            acc = fn(acc, arr[i], i, arr);
        }
        return acc;
    }
};

console.log(miniArray.map([1,2,3], x => x * 2));        // → [2,4,6]
console.log(miniArray.filter([1,2,3,4], x => x > 2));    // → [3,4]
console.log(miniArray.reduce([1,2,3,4], (a,b) => a+b, 0)); // → 10
```
