let students = [];
let editingIndex = null;
const STORAGE_KEY = "students";

const defaultData = [
    {
        id: "2451160830",
        name: "Hân Bống",
        dob: "2006-11-22",
        class: "KTPM1",
        score: "9.5",
        email: "jju@gmail.com"
    },

    {
        id: "2451160831",
        name: "An Khánh Huy",
        dob: "2006-02-14",
        class: "CNTT1",
        score: "7.8",
        email: "akh@gmail.com"
    },

    {
        id: "2451160832",
        name: "Huyền Chíp",
        dob: "2006-01-13",
        class: "HTTT1",
        score: "9.1",
        email: "nsh@gmail.com"
    },

    {
        id: "2451160833",
        name: "Trà Mi",
        dob: "2006-10-14",
        class: "ANM1",
        score: "8.2",
        email: "cyf@gmail.com"
    },

    {
        id: "2451160834",
        name: "Mạnh Tiến",
        dob: "2006-04-20",
        class: "TTNT1",
        score: "8.5",
        email: "mje@gmail.com"
    }
];

// Load Và Save
function loadStudents() {
    const data = localStorage.getItem(STORAGE_KEY);
    students = data ? JSON.parse(data) : [...defaultData];
}

function saveStudents() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

//Render
function renderStudents() {
    const tbody = document.getElementById("studentTableBody");
    tbody.innerHTML = "";

    if (students.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7">Không có dữ liệu</td></tr>';
        return;
    }

    students.forEach ((sv, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${sv.id}</td>
            <td>${sv.name}</td>
            <td>${sv.dob}</td>
            <td>${sv.class}</td>
            <td>${sv.score}</td>
            <td>${sv.email}</td>
            <td>
                <button class="btn btn-edit" onclick="editStudent(${index})">Sửa</button>
                <button class="btn btn-delete" onclick="deleteStudent(${index})">Xóa</button>
            </td>
        `;

        tbody.appendChild(tr);
    });

    updateStatistics();
}

// Thống kê
function updateStatistics() {
    document.getElementById("total").innerText = students.length;

    if(students.length === 0) {
        document.getElementById("avg").innerText = "-";
        return;
    }

    const avg = 
        students.reduce((sum, sv) => sum + Number(sv.score), 0) /
        students.length;

        document.getElementById("avg").innerText = avg.toFixed(2);
}

// POPUP
function openForm() {
    document.getElementById("modal").style.display = "block";
}

function closeForm() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("studentForm").reset();
    editingIndex = null;
}

// submit form, validatipn
document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const id = document.getElementById("id");
    const name = document.getElementById("name");
    const dob = document.getElementById("dob");
    const lop = document.getElementById("class");
    const score = document.getElementById("score");
    const email = document.getElementById("email");

    document.querySelectorAll(".error").forEach(e => e.innerText = "");
    document.querySelectorAll("input").forEach(i => i.classList.remove("error-border"));
    
    //1.không để trống
    if (id.value.trim() === "") {
        showError(id, "idError", "Không được để trống");
        isValid = false;
    }

    if (name.value.trim() === "") {
         showError(name, "nameError", "Không được để trống");
         isValid = false;
    }

    if (dob.value === "") {
        showError(dob, "dobError", "Chọn ngày");
        isValid = false;
    }

    if (lop.value.trim() === "") {
         showError(lop, "lopError", "Không được để trống");
         isValid = false;
    }

    if (email.value.trim() === "") {
         showError(email, "emailError", "Không được để trống");
         isValid = false;
    }

    if (score.value === "") {
         showError(score, "scoreError", "Nhập điểm");
         isValid = false;
    }

    //2. email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value && !emailRegex.test(email.value)) {
        showError(email, "emailError", "Email không hợp lệ");
        isValid = false;
    }

    //3. điểm
    const diem = parseFloat(score.value);
    if (score.value && (isNaN(diem) || diem<0 ||diem>10)) {
        showError(score, "scoreError", "Điểm 0 -> 10");
         isValid = false;
    }

    //4. mã sv
    const idRegex =  /^\d{5,10}$/;
    if (id.value && !idRegex.test(id.value)) {
        showError(id, "idError", "VD: 1234567890");
        isValid = false;
    }
    
    //5.tên
    if (name.value && name.value.length<2) {
        showError(name, "nameError", ">= 2 kí tự");
        isValid = false;

    }

    //6. mã tồn tại
    if (students.some((sv, i) => sv.id === id.value && i!== editingIndex)) {
        showError(id, "idError", "Mã đã tồn tại");
        isValid = false;
    }
    // ok. nhấn lưu
    if (isValid) {
        const sv = {
            id: id.value,
            name: name.value,
            dob: dob.value,
            class: lop.value,
            score: score.value,
            email: email.value
        };
        if (editingIndex === null) {
        students.push(sv);
        } else {
            students[editingIndex] = sv;
        }
    saveStudents();
    renderStudents();
    closeForm();
    }
});

function showError(input, errorId, message) {
    document.getElementById(errorId).innerText = message;
    input.classList.add("error-border");
}

// edit
function editStudent(index) {
    const sv = students[index];
    editingIndex = index;

    document.getElementById("id").value = sv.id;
    document.getElementById("name").value = sv.name;
    document.getElementById("dob").value = sv.dob;
    document.getElementById("class").value = sv.class;
    document.getElementById("score").value = sv.score;
    document.getElementById("email").value = sv.email;

    openForm();
}

// delete
function deleteStudent(index) {
    if(confirm("Bạn có chắc chắn muốn xóa không?")) {
        students.splice(index, 1);
        saveStudents();
        renderStudents();
    }
}

//button
document.getElementById("addBtn").addEventListener("click", openForm);
document.getElementById("cancelBtn").addEventListener("click", closeForm);
document.getElementById("closeBtn").addEventListener("click", closeForm);

// load trang
loadStudents();
renderStudents();