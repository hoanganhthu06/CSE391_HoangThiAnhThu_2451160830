const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 2, name: "Samsung S24", price: 21990000, category: "phone", image: "https://placehold.co/200", rating: 4.3, inStock: true },
    { id: 3, name: "MacBook Air", price: 28990000, category: "laptop", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 4, name: "Dell XPS", price: 24990000, category: "laptop", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 5, name: "iPad Pro", price: 19990000, category: "tablet", image: "https://placehold.co/200", rating: 4.7, inStock: true },
    { id: 6, name: "Galaxy Tab", price: 15990000, category: "tablet", image: "https://placehold.co/200", rating: 4.2, inStock: true },
    { id: 7, name: "AirPods", price: 4990000, category: "accessory", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 8, name: "Sony Headphone", price: 3990000, category: "accessory", image: "https://placehold.co/200", rating: 4.4, inStock: true },
    { id: 9, name: "Xiaomi Phone", price: 9990000, category: "phone", image: "https://placehold.co/200", rating: 4.1, inStock: true },
    { id: 10, name: "HP Laptop", price: 15990000, category: "laptop", image: "https://placehold.co/200", rating: 4.0, inStock: true },
    { id: 11, name: "Lenovo Tablet", price: 8990000, category: "tablet", image: "https://placehold.co/200", rating: 4.2, inStock: true },
    { id: 12, name: "Mouse Logitech", price: 590000, category: "accessory", image: "https://placehold.co/200", rating: 4.3, inStock: true }
];

let filteredProducts = [...products];
let cartCount = 0;

// ================= INIT UI =================
const app = document.getElementById("app");

app.innerHTML = `
    <h1>Product Catalog 🛍️</h1>
    <input id="search" placeholder="Tìm sản phẩm...">
    
    <div id="categories"></div>

    <select id="sort">
        <option value="">-- Sắp xếp --</option>
        <option value="price-asc">Giá tăng</option>
        <option value="price-desc">Giá giảm</option>
        <option value="name">Tên A-Z</option>
        <option value="rating">Đánh giá cao</option>
    </select>

    <button id="toggleDark">🌙 Dark Mode</button>
    <div id="cart">🛒 <span id="badge">0</span></div>

    <div id="productList"></div>

    <div id="modal" class="hidden"></div>
`;

// ================= RENDER =================
function renderProducts(list = filteredProducts) {
    const container = document.getElementById("productList");
    container.innerHTML = "";

    list.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = p.image;

        const name = document.createElement("h3");
        name.textContent = p.name;

        const price = document.createElement("p");
        price.textContent = p.price.toLocaleString() + "đ";

        const btn = document.createElement("button");
        btn.textContent = "Thêm giỏ";

        // add cart
        btn.addEventListener("click", e => {
            e.stopPropagation();
            cartCount++;
            document.getElementById("badge").textContent = cartCount;
        });

        // modal
        card.addEventListener("click", () => showModal(p));

        card.append(img, name, price, btn);
        container.appendChild(card);
    });
}

// ================= SEARCH =================
function searchProducts(keyword) {
    filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
    );
    renderProducts();
}

// ================= FILTER =================
function filterByCategory(cat) {
    if (cat === "all") filteredProducts = [...products];
    else filteredProducts = products.filter(p => p.category === cat);
    renderProducts();
}

// ================= SORT =================
function sortProducts(type) {
    if (type === "price-asc")
        filteredProducts.sort((a,b)=>a.price-b.price);
    if (type === "price-desc")
        filteredProducts.sort((a,b)=>b.price-a.price);
    if (type === "name")
        filteredProducts.sort((a,b)=>a.name.localeCompare(b.name));
    if (type === "rating")
        filteredProducts.sort((a,b)=>b.rating-a.rating);

    renderProducts();
}

// ================= MODAL =================
function showModal(p) {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";

    modal.innerHTML = `
        <div class="modal-content">
            <img src="${p.image}" style="width:100%;border-radius:10px">
            <h2>${p.name}</h2>
            <p>Giá: ${p.price}</p>
            <p>Rating: ${p.rating}</p>
            <button onclick="closeModal()">Đóng</button>
        </div>
    `;
}

function closeModal() {
    document.getElementById("modal").style.display= "none";
}

// ================= DARK MODE =================
document.getElementById("toggleDark").onclick = () => {
    document.body.classList.toggle("dark");
};

// ================= EVENTS =================
document.getElementById("search").addEventListener("input", e => {
    searchProducts(e.target.value);
});

document.getElementById("sort").addEventListener("change", e => {
    sortProducts(e.target.value);
});

// categories
const categories = ["all","phone","laptop","tablet","accessory"];
const catDiv = document.getElementById("categories");

categories.forEach(c => {
    const btn = document.createElement("button");
    btn.textContent = c;
    btn.onclick = () => filterByCategory(c);
    catDiv.appendChild(btn);
});

// ================= START =================
renderProducts();

