function createCart() {
    // Private data
    let items = [];
    let discount = {type: null, value: 0};

    return {
        // Thêm sản phẩm (nếu đã có → tăng quantity)
        addItem(product, quantity = 1) {
            const existing = items.find(function(i) {
                return i.id === product.id;
            });
            if (existing) {
                existing.quantity += quantity;
            } else {
                items.push({ ...product, quantity: quantity});
            }
        },
        
        // Xóa sản phẩm theo id
        removeItem(productId) {
            items = items.filter(function(i) {
                return i.id !== productId;
            });
        },
        
        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {
            items = items.map(function(i) {
                if (i.id === productId) {
                    return{ ...i, quantity: newQuantity};
                }
                return i;
            });
        },
        
        // Tính tổng tiền
        getTotal() {
            let total = items.reduce(function(sum, i) {
                return sum + i.price * i.quantity;
            }, 0);
            if (discount.type === "percent") {
                total = total * (1 - discount.value);
            } else if (discount.type === "fixed") {
                total = total - discount.value;
            }
            return total;
        },
        
        // Áp dụng mã giảm giá
        applyDiscount(code) {
            if (code === "SALE10") {
                discount = {type: "percent", value: 0.1};
            } else if (code === "SALE20") {
                discount = {type: "percent", value: 0.2};
            } else if (code === "FREESHIP") {
                discount = {type: "fixed", value: 30000};
            } else {
                discount = {type: null, value: 0};
            }
        },
        
        // In giỏ hàng dạng bảng
        printCart() {
            console.log("=== GIỎ HÀNG ===");

            items.forEach(function(i, index) {
                const total = i.price * i.quantity;
                console.log(
                    `${index + 1}. ${i.name} | SL: ${i.quantity} | ${i.price.toLocaleString()}đ | Tổng: ${total.toLocaleString()}đ`
                );
            });
            console.log("-------------------------");
            console.log("Tổng cộng:", this.getTotal().toLocaleString() + "đ");
        },
        
        // Lấy tổng số sản phẩm (tổng quantity)
        getItemCount() {
             return items.reduce(function(sum, i) {
                return sum + i.quantity;
            }, 0);
        },
        
        // Xóa toàn bộ giỏ
        clearCart() {
            items = [];
            discount = { type: null, value: 0 };
        }
    };
}

// === TEST ===
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); 

cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount()); 
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount()); 