const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// biến thống kê
let countGioi = 0, countKha = 0, countTB = 0, countYeu = 0;

let maxStudent = null;
let minStudent = null;

let sumMath = 0, sumPhysics = 0, sumCS = 0;

let sumMale = 0, countMale = 0;
let sumFemale = 0, countFemale = 0;

// header
console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

// xử lí
for (let i=0; i< students.length; i++) {
    let s = students[i];

    // tính tb
    let tb = s.math*0.4 + s.physics*0.3 + s.cs*0.3;
    tb = Number(tb.toFixed(1));

    // xếp loại
    let loai="";
    if (tb>=8) {
        loai="Giỏi";
        countGioi++;
    } else if (tb >= 6.5) {
        loai = "Khá";
        countKha++;
    } else if (tb>=5) {
        loai = "Trung bình";
        countTB++;
    } else {
        loai = "Yếu";
        countYeu++;
    }

    // in bảng     
    console.log(
        `| ${String(i+1).padEnd(3)} | ${s.name.padEnd(6)} | ${String(tb).padEnd(4)} | ${loai.padEnd(11)} |`
    );

    // tìm min max
    if (maxStudent === null || tb>maxStudent.tb) {
        maxStudent = {name: s.name, tb: tb};
    }
     if (minStudent === null || tb<minStudent.tb) {
        minStudent = {name: s.name, tb: tb};
    }

    // cộng điểm môn
    sumMath += s.math;
    sumPhysics += s.physics;
    sumCS += s.cs;

    // bonus giới tính
    if (s.gender === "M") {
        sumMale += tb;
        countMale++;
    } else {
        sumFemale += tb;
        countFemale++;
    }
}

// thống kê
console.log("\n=== Thống kê ===");
console.log("Giỏi:", countGioi);
console.log("Khá:", countKha);
console.log("Trung bình:", countTB);
console.log("Yếu:", countYeu);

// max/min
console.log("\nSV cao nhất:", maxStudent.name, "-", maxStudent.tb);
console.log("SV thấp nhất:", minStudent.name, "-", minStudent.tb);

// tb môn
console.log("\nTB Toán:", (sumMath / students.length).toFixed(1));
console.log("TB Lý:", (sumPhysics / students.length).toFixed(1));
console.log("TB CS:", (sumCS / students.length).toFixed(1));

//giới tính
console.log("\nTB Nam:", (sumMale / countMale).toFixed(1));
console.log("TB Nữ:", (sumFemale / countFemale).toFixed(1)); 
