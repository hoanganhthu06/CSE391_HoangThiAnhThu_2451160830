// random số 1-100
const target=Math.floor(Math.random()*100)+1;

let attempts=0;
const maxAttempts=7;

let guessedNumbers=[]; // lưu số đã đoán

while (attempts < maxAttempts) {
    let input=prompt("Nhập số từ 1 đến 100:");
    // nếu bấm cancel
    if (input===null) {
        alert("Bạn đã thoát game!");
        break;
    }
    let guess=Number(input);

    // check ko pk số or ngoài khoảng
    if (isNaN(guess) || guess<1 || guess>100) {
        alert("Vui lòng nhập số hợp lệ (1-100)!");
        continue;
    }
    // ktra trùng
    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã dự đoán số này rồi!");
        continue;
    }
    guessedNumbers.push(guess);
    attempts++;
    // nếu đúng
    if (guess===target) {
        alert(`Đúng rồi! Bạn đoán trong ${attempts} lần!`);
        break;
    }
    // nếu sai
    if (guess>target) {
        alert(`Thấp hơn! Bạn đã đoán ${attempts} lần`);
    } else {
        alert(`Cao hơn! Bạn đã đoán ${attempts} lần`);
    }
    //hết lượt
    if (attempts===maxAttempts) {
        alert(`Bạn thua! Số đúng là ${target} lần`);
    }
}