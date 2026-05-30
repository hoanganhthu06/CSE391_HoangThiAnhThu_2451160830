## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (5đ) — Cây DOM
1. Cây DOM (sơ đồ cây) cho HTML là:
```
div#app
├── header
│   ├── h1 ("Todo App")
│   └── nav
│       ├── a.active ("All")
│       ├── a ("Active")
│       └── a ("Completed")
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button ("Add")
    └── ul#todoList
        ├── li.todo-item ("Learn HTML")
        └── li.todo-item.completed ("Learn CSS")
```
2. Viết querySelector cho mỗi yêu cầu:
- Chọn `<h1>`
```js
document.querySelector("h1")
```
- Chọn input trong biểu mẫu
```js
document.querySelector("#todoForm input")
```
- Chọn tất cả `.todo-item`
```js
document.querySelectorAll(".todo-item")
```
- Chọn liên kết đang hoạt động
```js
document.querySelector("a.active")
```
- Chọn `<li>` đầu tiên trong `#todoList`
```js
document.querySelector("#todoList li:first-child")
```
- Chọn cả `<a>` bên trong `<nav>`
```js
document.querySelectorAll("nav a")
```

### Câu A2 (5đ) — innerHTML vs textContent
* Sự khác nhau giữa innerHTML vs textContent:
- innerHTML: dùng để lấy hoặc gán nội dung HTML bên trong một phần tử, có thể parse (hiểu) các thẻ HTML và có thể chèn được cả các tag HTML
+ Ví dụ: 
```js
const div = document.querySelector("#demo");
div.innerHTML = "<b>Hello</b>";
```
+ Dùng `innerHTML` khi muốn render HTML
- textContent: dùng để lấy hoặc gán nội dung văn bản thuần (text); không parse HTML, coi mọi thứ là text; và an toàn hơn khi hiển thị dữ liệu từ người dùng
+ Ví dụ:
```js
const div = document.querySelector("#demo"); 
div.textContent = "<b>Hello</b>";
```
+ Dùng `textContent` khi chỉ hiển thị text, khi dữ liệu đến từ user/ API (không tin cậy) -> để tránh lỗi bảo mật
* `innerHTML` có thể gây lỗi XSS tại vì: `innerHTML` sẽ thực thi HTML và JavaScript bên trong chuỗi. Nếu user nhập code độc -> trình duyệt sẽ chạy luôn
- Ví dụ lỗi XSS:
```js
// User nhập: 
<img src=x onerror="alert('Hacked!')"> 
const userInput = document.querySelector("#search").value; 
document.querySelector("#result").innerHTML = userInput;    //Nguy hiểm
```
-> Do đó, khi render: ảnh lỗi -> trigger onerror; JavaScript chạy -> hiện alert "Hacked!"
+ Cách sửa: dùng `textContent`
```js
const userInput = document.querySelector("#search").value; 
document.querySelector("#result").textContent = userInput;
``` 
-> Do đó, trình duyệt sẽ hiển thị text, không chạy script.

### Câu A3 (5đ) — Sự kiện sủi bọt
- Khi bấm vào nút thĩ xuất ra = BUTTON 
                                INNER 
                                OUTER

- Nếu bỏ ghi chú stopPropagation(), xuất ra = BUTTON

## PHẦN C — DEBUG & PHÂN TÍCH 
### Câu C1 (8đ) — Gỡ lỗi mã DOM
- Tim các lỗi và sửa: 
1. Sai sự kiện trong decrement: `"onclick"`
-> Phải là `"click"`
2. Sai cách cập nhật countDisplay trong reset: `countDisplay = count;` (gán sai kiểu)
-> Phải dùng: `countDisplay.textContent = count;`
3. Sai khi xóa history: `historyList.innerHTML = null;` 
-> Phải là: `historyList.innerHTML = "";` 
4. Sai cách remove item trong clearHistory: `item.remove;` (thiếu dấu `()`)
-> Phải là: `item.remove();` 
5. Không parse dữ liệu từ localStorage: `count = localStorage.getItem("count");` (trả về string)
-> Phải dùng: `parseInt(...)` 
6. Không load lại history từ localStorage
- Thiếu dòng:
     ```js
     historyList.innerHTML = localStorage.getItem("history");
     ```
7. Không kiểm tra null khi load localStorage
- Nếu chưa có dữ liệu sẽ bị lỗi hiển thị
- Cần kiểm tra trước khi gán
8. Dùng innerHTML thay vì textContent (không sai cú pháp nhưng không tối ưu)
- `countDisplay.innerHTML = count;`
- Nên dùng: `textContent` (an toàn hơn)

* Code đã sửa hoàn chỉnh
```javascript
// App: Counter with history
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

// Increment
document.querySelector("#incrementBtn").addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
    
    const li = document.createElement("li");
    li.textContent = "Count changed to " + count;
    
    li.addEventListener("click", function() {
        deleteHistory(this);
    });

    historyList.append(li);
});

// Decrement
document.querySelector("#decrementBtn").addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
});

// Reset
document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
    historyList.innerHTML = "";
});

// Xóa từng item
function deleteHistory(element) {
    element.parentNode.removeChild(element);
}

// Clear all history
document.querySelector("#clearHistory").addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");
    items.forEach(item => {
        item.remove();
    });
});

// Save to localStorage
window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("history", historyList.innerHTML);
});

// Load from localStorage
window.addEventListener("load", () => {
    const savedCount = localStorage.getItem("count");
    const savedHistory = localStorage.getItem("history");

    if (savedCount !== null) {
        count = parseInt(savedCount);
        countDisplay.textContent = count;
    }

    if (savedHistory !== null) {
        historyList.innerHTML = savedHistory;
    }
});
```

### Câu C2 (7đ) — Biểu diễn
1. - Sự kiện liên kết lên tới 1000 phần tử riêng biệt là THỰC HÀNH XẤU tại vì: 
+ Tốn bộ nhớ: mỗi phần tử có 1 event listener riêng, 1000 phần tử -> 1000 hàm -> tốn RAM
+ Giảm hiệu năng: trình duyệt phải quản lý rất nhiều listener, khi xảy ra sự kiện -> phải xử lý nhiều callback
+ Khó bảo trì: code lặp lại, khó sửa nếu logic thay đổ
- Đoàn sự kiện giải quyết: gán 1 event listener duy nhất cho phần tử cha. Dựa vào `event.target` để xác định phần tử con được click. Ưu điểm là: chỉ cần 1 listener thay vì 1000, tiết kiệm bộ nhớ, tăng hiệu năng, dễ bảo trì
+ Ví dụ: 
```js
document.body.addEventListener("click", function(e) { 
    if (e.target.tagName === "DIV") { 
        console.log("Clicked:", e.target.textContent); 
    } 
});
```
2. code gốc:
```js
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    document.body.appendChild(div);   // ← 1000 lần reflow!
}
```
- Vấn đề của code trên: mỗi lần appendChild -> DOM thay đổi; trình duyệt phải: tính lại layout (reflow), vẽ lại (repaint), 1000 lần -> rất chậm
- Refactor dùng DocumentFragment, code tối ưu:
```js
const fragment = document.createDocumentFragment(); 

for (let i = 0; i < 1000; i++) { 
    const div = document.createElement("div"); 
    div.textContent = `Item ${i}`; 
    fragment.appendChild(div); // chưa gắn vào DOM 
    }

    document.body.appendChild(fragment); // chỉ 1 lần reflow
```
- Refactor dùng DocumentFragment để chỉ gây ra phản xạ lại 1 lần. Giải thích tại sao nhanh hơn là vì: 
+ Không thuộc DOM thật: Fragment là "DOM ảo", không trigger reflow khi thêm phần tử
+ Chỉ cập nhật DOM 1 lần: thay vì 1000 lần -> chỉ 1 lần append
+ Giảm chi phí layout: trình duyệt tính toán layout ít hơn, giảm lag đáng kể