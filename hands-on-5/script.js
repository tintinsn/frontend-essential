// console.log(document.querySelector(".input-todo").value);

// console.log(document.querySelector(".title").textContent);

// console.log(document.querySelector(".input-todo").value
const todoList = document
  .querySelector(".btn")
  .addEventListener("click", () => {
    li = document.createElement("li");
    li.innerHTML = document.querySelector(".input-todo").value;
    document.querySelector(".todo-list").appendChild(li);
  });
