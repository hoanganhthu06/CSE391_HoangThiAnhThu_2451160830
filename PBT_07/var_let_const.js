console.log("===== ĐOẠN 1 =====");
try {
    console.log(x);
    var x = 5;
} catch (e) {
    console.log(e);
}

console.log("===== ĐOẠN 2 =====");
try {
    console.log(y);
    let y = 10;
} catch (e) {
    console.log(e.message);
}

console.log("===== ĐOẠN 3 =====");
try {
    const z = 15;
    z = 20;
    console.log(z);
} catch (e) {
    console.log(e.message);
}

console.log("===== ĐOẠN 4 =====");
try {
    const arr = [1, 2, 3];
    arr.push(4);
    console.log(arr);
} catch (e) {
    console.log(e.message);
}

console.log("===== ĐOẠN 5 =====");
try {
    let a = 1;
    {
        let a = 2;
        console.log("Trong block:", a);
    }
    console.log("Ngoài block:", a);
} catch (e) {
    console.log(e.message);
}
