const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
const phoneInput = document.getElementById("phone");

const submitBtn = document.getElementById("submitBtn");

let valid = {
    name: false,
    email: false,
    pass: false,
    confirm: false,
    phone: false
};

// ===== NAME =====
nameInput.addEventListener("input", () => {
    const val = nameInput.value;
    if (val.length >= 2 && val.length <= 50) {
        nameMsg.textContent = "✅ hợp lệ";
        nameMsg.className = "valid";
        valid.name = true;
    } else {
        nameMsg.textContent = "❌ 2-50 ký tự";
        nameMsg.className = "invalid";
        valid.name = false;
    }
    checkForm();
});

// ===== EMAIL =====
emailInput.addEventListener("input", () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(emailInput.value)) {
        emailMsg.textContent = "✅ hợp lệ";
        valid.email = true;
    } else {
        emailMsg.textContent = "❌ email sai";
        valid.email = false;
    }
    checkForm();
});

// ===== PASSWORD =====
passInput.addEventListener("input", () => {
    const val = passInput.value;
    const bar = document.getElementById("strength");

    if (val.length < 8) {
        bar.style.width = "30%";
        bar.style.background = "red";
        valid.pass = false;
    } 
    else if (/[a-zA-Z]/.test(val) && /\d/.test(val)) {
        bar.style.width = "60%";
        bar.style.background = "orange";
        valid.pass = true;
    } 
    if (/[A-Z]/.test(val) && /[a-z]/.test(val) && /\d/.test(val) && /[^A-Za-z0-9]/.test(val)) {
        bar.style.width = "100%";
        bar.style.background = "green";
        valid.pass = true;
    }

    checkForm();
});

// ===== CONFIRM =====
confirmInput.addEventListener("input", () => {
    if (confirmInput.value === passInput.value) {
        confirmMsg.textContent = "✅ khớp";
        valid.confirm = true;
    } else {
        confirmMsg.textContent = "❌ không khớp";
        valid.confirm = false;
    }
    checkForm();
});

// ===== PHONE =====
phoneInput.addEventListener("input", () => {
    let val = phoneInput.value.replace(/\D/g, "");

    if (val.length > 4 && val.length <= 7)
        val = val.replace(/(\d{4})(\d+)/, "$1-$2");
    else if (val.length > 7)
        val = val.replace(/(\d{4})(\d{3})(\d+)/, "$1-$2-$3");

    phoneInput.value = val;

    valid.phone = val.length === 12;
    checkForm();
});

// ===== CHECK FORM =====
function checkForm() {
    submitBtn.disabled = !Object.values(valid).every(v => v);
}

// ===== SUBMIT =====
document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();

    const modal = document.getElementById("modal");
    modal.style.display = "flex";

    modal.innerHTML = `
        <div class="modal-box">
            <h2>Đăng ký thành công 🎉</h2>
            <p>${nameInput.value}</p>
            <p>${emailInput.value}</p>
            <p>${phoneInput.value}</p>
            <button onclick="modal.style.display='none'">Đóng</button>
        </div>
    `;
});
