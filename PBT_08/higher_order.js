// 1. pipe() — Nối chuỗi functions
function pipe(...fns) { 
    return function(initialValue) {
        return fns.reduce(function(acc, fn) {
            return fn(acc);
        }, initialValue);
    };
}

const process = pipe(
    function(x) {return x * 2;},
    function(x) {return x + 10;},
    function(x) {return x.toString();},
    function(x) {return "Kết quả: " + x;}
);
console.log(process(5)); 

// 2. memoize() — Cache kết quả
function memoize(fn) { 
    const cache ={};

    return function(arg) {
        if (cache[arg] !== undefined) {
            return cache[arg];
        }
        const result = fn(arg);
        cache[arg] = result;
        return result;
    };
}

const expensiveCalc = memoize(function(n) {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});
console.log(expensiveCalc(1000000)); 
console.log(expensiveCalc(1000000)); 

// 3. debounce() — Chờ user ngừng gõ mới thực hiện
function debounce(fn, delay) { 
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(this, args);
        }, delay);
    };
}

const search = debounce(function(query) {
    console.log("Searching:", query);
}, 500);
//gọi nhiều lần liên tục => chỉ chạy mỗi lần cuối
search("a");
search("ab");
search("abc");

// 4. retry() — Thử lại nếu lỗi
async function retry(fn, maxAttempts = 3) { 
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (err) {
            if (attempt === maxAttempts) {
                throw err;
            }
        }
    }
}

let count = 0;

async function testFn() {
    count++;
    if (count < 3) {
        throw new Error("Fail");
    }
    return "Success!";
}

retry(testFn, 3)
    .then(console.log)
    .catch(console.error);
