const STORAGE_KEY = "tasks";

// DOM
const btnAdd = document.querySelector(".btn-add");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const cancelBtn = document.querySelector(".btn-cancel");
const form = document.getElementById("taskForm");

const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");
const dateInput = document.getElementById("thoiHan");
const priorityInput = document.getElementById("priority");
const statusInput = document.getElementById("status");

const taskList = document.getElementById("taskList");

const tongEl = document.getElementById("tong");
const daXongEl = document.getElementById("daXong");
const chuaXongEl = document.getElementById("chuaXong");

const messageEl = document.getElementById("message");
const formTitle = document.getElementById("formTitle");

// DATA
let tasks = [];

if (!localStorage.getItem(STORAGE_KEY)) {
    tasks = [
        {
            id: 1,
            title: "Học HTML",
            desc: "Ôn lại cấu trúc cơ bản",
            date: "2026-05-25",
            priority: "Cao",
            status: false
        },
        {
            id: 2,
            title: "Làm bài JS",
            desc: "CRUD task manager",
            date: "2026-05-26",
            priority: "Trung bình",
            status: true
        }
    ];

    saveTasks();
}
let editId = null;

// LOCALSTORAGE
function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
    const data = localStorage.getItem(STORAGE_KEY);
    tasks = data ? JSON.parse(data) : [];
}

// UI
function showMessage(text) {
    messageEl.textContent = text;
    messageEl.classList.add("show");

    setTimeout(() => {
        messageEl.classList.remove("show");
        messageEl.textContent = "";
    }, 2000);
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
    form.reset();
    editId = null;
    formTitle.textContent = "Thêm công việc";
}

// RENDER
function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "<p>Chưa có công việc nào.</p>";
        updateStats();
        return;
    }

    tasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "task-item";
        if (task.status) div.classList.add("done");

        div.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.desc}</p>
            <p>Hạn: ${task.date}</p>
            <p>Ưu tiên: ${task.priority}</p>

            <div class="actions">
                <button onclick="toggleStatus(${task.id})">
                    ${task.status ? "Chưa hoàn thành" : "Hoàn thành"}
                </button>

                <button onclick="editTask(${task.id})">Sửa</button>
                <button onclick="deleteTask(${task.id})">Xóa</button>
            </div>
        `;

        taskList.appendChild(div);
    });

    updateStats();
}

// STATS
function updateStats() {
    const total = tasks.length;
    const done = tasks.filter(t => t.status).length;
    const notDone = total - done;

    tongEl.textContent = total;
    daXongEl.textContent = done;
    chuaXongEl.textContent = notDone;
}

// ADD / UPDATE
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newTask = {
        id: editId ? editId : Date.now(),
        title: titleInput.value,
        desc: descInput.value,
        date: dateInput.value,
        priority: priorityInput.value,
        status: statusInput.checked
    };

    if (editId) {
        tasks = tasks.map(t => t.id === editId ? newTask : t);
        showMessage("Cập nhật thành công!");
    } else {
        tasks.push(newTask);
        showMessage("Thêm công việc thành công!");
    }

    saveTasks();
    renderTasks();
    closeModal();
});

// EDIT
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    editId = id;

    titleInput.value = task.title;
    descInput.value = task.desc;
    dateInput.value = task.date;
    priorityInput.value = task.priority;
    statusInput.checked = task.status;

    formTitle.textContent = "Cập nhật công việc";
    openModal();
}

// DELETE
function deleteTask(id) {
    if (!confirm("Bạn có chắc muốn xóa không?")) return;

    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
    showMessage("Xóa thành công!");
}

// TOGGLE STATUS
function toggleStatus(id) {
    tasks = tasks.map(t =>
        t.id === id ? { ...t, status: !t.status } : t
    );

    saveTasks();
    renderTasks();
}

// EVENTS
btnAdd.addEventListener("click", () => {
    form.reset();
    editId = null;
    formTitle.textContent = "Thêm công việc";
    openModal();
});

closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// INIT
loadTasks();
renderTasks();