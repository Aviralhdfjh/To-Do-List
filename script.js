const listContainer = document.getElementById("list-container");
const Inputbox = document.getElementById("input-box");

function addtask() {
    if (Inputbox.value === '') {
        alert("Enter some Data");
    } else {
        let li = document.createElement("li");
        li.innerHTML = Inputbox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7'; 
        li.appendChild(span);
    }
    Inputbox.value = '';
    saveTask();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
});

Inputbox.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addtask();
    }
});

function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

showtask();
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    }
});

window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }
});
