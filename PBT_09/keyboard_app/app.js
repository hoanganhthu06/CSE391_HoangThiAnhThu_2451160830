const images = [
    "https://i.pinimg.com/1200x/0d/07/99/0d0799aeda7fedaec441c7ba6de0e7eb.jpg",
    "https://i.pinimg.com/736x/5f/0c/74/5f0c74204d7018c1d49e0d8f325db8b8.jpg",
    "https://i.pinimg.com/1200x/4d/a7/03/4da70310c6cc8c4d3a5ab333227f3f28.jpg",
    "https://i.pinimg.com/736x/ea/12/ff/ea12ff476309401e95fe5ace0c89d1ad.jpg",
    "https://i.pinimg.com/736x/7e/6e/bb/7e6ebb5438fec68a386f15809afe0823.jpg",
    "https://i.pinimg.com/1200x/88/ea/21/88ea21a3650d2fe1f5fdf68e367f03d4.jpg",
    "https://i.pinimg.com/736x/0e/7e/39/0e7e392416e30f09c46c51fc925a4231.jpg",
    "https://i.pinimg.com/736x/f2/fb/6c/f2fb6c56122ff4d25ec36a6d0c4d3223.jpg",
    "https://i.pinimg.com/736x/31/21/47/3121477399f782efe76fec54cb44cbbe.jpg"
];

let current = 0;
let autoSlide = null;
let selectedIndex = 0;

const img = document.getElementById("mainImage");
const commandPalette = document.getElementById("commandPalette");
const commandInput = document.getElementById("commandInput");
const commandList = document.getElementById("commandList");
const overlay = document.getElementById("overlay");

/* ================= IMAGE ================= */
function showImage(index) {
    current = (index + images.length) % images.length;
    img.src = images[current];
}

document.getElementById("prevBtn").onclick = () => showImage(current - 1);
document.getElementById("nextBtn").onclick = () => showImage(current + 1);

/* ================= SLIDE ================= */
function toggleSlide() {
    if (autoSlide) {
        clearInterval(autoSlide);
        autoSlide = null;
    } else {
        autoSlide = setInterval(() => {
            showImage(current + 1);
        }, 2000);
    }
}

/* ================= COMMAND ================= */
const commands = [
    { name: "Next Image", action: () => showImage(current + 1) },
    { name: "Previous Image", action: () => showImage(current - 1) },
    { name: "Start/Stop Slide", action: toggleSlide }
];

let filteredCommands = [...commands];

function renderCommands(list) {
    commandList.innerHTML = "";

    list.forEach((cmd, index) => {
        const div = document.createElement("div");
        div.className = "command-item";
        div.textContent = cmd.name;
        div.setAttribute("role", "option");

        if (index === selectedIndex) {
            div.style.background = "#333";
        }

        div.onclick = () => {
            cmd.action();
            closeCommand();
        };

        commandList.appendChild(div);
    });
}

function openCommand() {
    commandPalette.style.display = "block";
    overlay.style.display = "block";
    commandInput.value = "";
    filteredCommands = [...commands];
    selectedIndex = 0;
    renderCommands(filteredCommands);
    commandInput.focus();
}

function closeCommand() {
    commandPalette.style.display = "none";
    overlay.style.display = "none";
}

/* ================= SEARCH ================= */
commandInput.addEventListener("input", () => {
    const keyword = commandInput.value.toLowerCase();
    filteredCommands = commands.filter(c =>
        c.name.toLowerCase().includes(keyword)
    );
    selectedIndex = 0;
    renderCommands(filteredCommands);
});

/* ================= KEYBOARD ================= */
document.addEventListener("keydown", (e) => {

    // Ctrl + K
    if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openCommand();
    }

    // ESC (đóng palette)
    if (e.key === "Escape") {
        closeCommand();
    }

    // ← →
    if (e.key === "ArrowRight") showImage(current + 1);
    if (e.key === "ArrowLeft") showImage(current - 1);

    // 1–9
    if (e.key >= "1" && e.key <= "9") {
        showImage(parseInt(e.key) - 1);
    }

    // SPACE
    if (e.code === "Space") {
        e.preventDefault();
        toggleSlide();
    }

    // COMMAND NAV
    if (commandPalette.style.display === "block") {
        const items = commandList.children;

        if (e.key === "ArrowDown") {
            selectedIndex = (selectedIndex + 1) % items.length;
            renderCommands(filteredCommands);
        }

        if (e.key === "ArrowUp") {
            selectedIndex = (selectedIndex - 1 + items.length) % items.length;
            renderCommands(filteredCommands);
        }

        if (e.key === "Enter") {
            items[selectedIndex]?.click();
        }
    }
});

/* INIT */
showImage(0);