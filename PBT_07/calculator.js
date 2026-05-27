function calculate(num1, operator, num2) {
    // check input không phải số
    if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) {
        return "Lỗi: Input không phải số";
    }
    // chia cho 0
    if (operator === "/" && num2 === 0) {
        return "Lỗi: Khong thể chia cho 0";
    }
    // xử lí phép toán
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return `Lỗi: Operator '${operator}' không hợp lệ`;
    }
}

// test
console.log(calculate(10, "+", 5));    
console.log(calculate(10, "/", 0));    
console.log(calculate(10, "^", 5));    
console.log(calculate("abc", "+", 5)); 
console.log(calculate(2, "**", 10)); 