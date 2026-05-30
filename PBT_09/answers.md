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

