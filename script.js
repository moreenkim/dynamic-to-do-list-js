document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");

  addButton.addEventListener("click", addTask);

  const taskInput = document.getElementById("task-input");
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});

const addTask = () => {
  const taskInput = document.getElementById("task-input");

  const taskList = document.getElementById("task-list");

  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const liElement = document.createElement("li");
    liElement.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    removeButton.onclick = function () {
      taskList.removeChild(liElement);
    };

    liElement.appendChild(removeButton);

    taskList.appendChild(liElement);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
};

