//selecting element
const SunMoon = document.querySelector(".mode--toggle");
const toggleContainer = document.querySelector(".mode-toggle");
const backgroundImg = document.querySelector(".background-image");
const body = document.querySelector(".dark");
const inputBox = document.querySelector(".input-todo");
const todoContainer = document.querySelector(".todo-items");
const todoCount = document.querySelector(".todo-left");
const clearCompleted = document.querySelector(".clear-todo");

//event handlers
SunMoon.addEventListener("click", toogleMode);
inputBox.addEventListener("keypress", addTodo);
todoContainer.addEventListener("click", deleteTodo);

//functions
function toogleMode(event) {
  if (toggleContainer.id === "sun") {
    event.target.src = "/images/icon-moon.svg";
    toggleContainer.id = "moon";
    backgroundImg.style.backgroundImage =
      "url('../images/bg-desktop-light.jpg')";
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    event.target.src = "/images/icon-sun.svg";
    toggleContainer.id = "sun";
    backgroundImg.style.backgroundImage =
      "url('http://127.0.0.1:5500/images/bg-desktop-dark.jpg')";
    body.classList.add("dark");
    body.classList.remove("light");
  }
}

function updateTodo() {
  const todoItems = document.querySelectorAll(".todo-item");
  todoCount.innerHTML = `${todoItems.length} items left`;
}

function addTodo(event) {
  if (event.key === "Enter") {
    let data = inputBox.value;
    const item = document.createElement("li");
    item.classList.add("todo-item");
    item.innerHTML = `
    <label class="content">
    <input class="checkbox" type="checkbox"> 
    <span class="text">${data}</span>
    </label>
    <img class="cross" src="./images/icon-cross.svg"></span>
    `;
    todoContainer.appendChild(item);
    inputBox.value = "";
    updateTodo();
  }
}

function removeItems(item) {
  item.remove();
  updateTodo();
}
function deleteTodo(event) {
  if (event.target.classList.contains("cross")) {
    removeItems(event.target.parentElement);
  }
}

document.querySelectorAll(".todo-actions input").forEach((radio) => {
  radio.addEventListener("change", (event) => {
    filterTodo(event.target.id);
  });
});

function filterTodo(id) {
  const allItems = document.querySelectorAll("li");
  console.log(allItems);
  switch (id) {
    case "all":
      allItems.forEach((item) => {
        item.classList.remove("hidden");
      });
      break;
    case "active":
      allItems.forEach((item) => {
        if (item.querySelector("input").checked) {
          item.classList.add("hidden");
        } else {
          item.classList.remove("hidden");
        }
      });
      break;
    case "completed":
      allItems.forEach((item) => {
        if (item.querySelector("input").checked) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
      break;
    default:
      allItems.forEach((item) => {
        if (item.querySelector("input").checked) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
      break;
  }
}
