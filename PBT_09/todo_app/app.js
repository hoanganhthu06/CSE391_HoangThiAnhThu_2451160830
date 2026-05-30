let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filter = "all";

const list = document.querySelector("#todoList");
const form = document.querySelector("#todoForm"); 
const input = document.querySelector("#todoInput"); 
const countEl = document.querySelector("#count");

//render
function render() {
    list.innerHTML = "";

    let filtered = todos.filter(todo => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    filtered.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";
        if (todo.completed) li.classList.add("completed");

        li.dataset.id = todo.id;

        const span = document.createElement("span");
        span.textContent = todo.text;
        span.className = "todo-text";

        const btn = document.createElement("button");
        btn.textContent = "Xóa";

        li.appendChild(span);
        li.appendChild(btn);

        list.appendChild(li);
    });
    updateCount();
    save();
}

// thêm todo
document.querySelector("#todoForm").addEventListener("submit", e => {
    e.preventDefault();

    const input = document.querySelector("#todoInput");
    const text = input.value.trim();

    if (!text) return;

    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    input.value = "";
    render();
});

// EVENT DELEGATION (XÓA + TOGGLE)
list.addEventListener("click", e => {
    const li = e.target.closest("li");
    if (!li) return;

    const id = Number(li.dataset.id);

    // XÓA
    if (e.target.tagName === "BUTTON") {
        todos = todos.filter(t => t.id !== id);
    } 
    // TOGGLE
    else {
        const todo = todos.find(t => t.id === id);
        todo.completed = !todo.completed;
    }
    render();
});

// edit todo
list.addEventListener("dblclick", e => {
    const li = e.target.closest("li");
    if (!li) return;

    const id = Number(li.dataset.id);
    const todo = todos.find(t => t.id === id);

    const input = document.createElement("input");
    input.value = todo.text;

    li.innerHTML = "";
    li.appendChild(input);

    input.focus();

    input.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            todo.text = input.value;
            render();
        }
    });
});

//đếm
function updateCount() { 
    const count = todos.filter(t => !t.completed).length; 
    countEl.textContent = `${count} mục còn lại`; 
}

//filter
document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", () => {
        filter = btn.dataset.filter;
        render();
    });
});

//clear completed
document.querySelector("#clearCompleted").addEventListener("click", () => {
    todos = todos.filter(t => !t.completed);
    render();
});

//save local 
function save() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
render();