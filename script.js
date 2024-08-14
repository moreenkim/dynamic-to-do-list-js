// document.addEventListener("DOMContentLoaded", () => {
//   const addButton = document.getElementById("add-task-btn");

//   addButton.addEventListener("click", addTask);

//   const taskInput = document.getElementById("task-input");
//   taskInput.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });
// });

// const addTask = () => {
//   const taskInput = document.getElementById("task-input");

//   const taskList = document.getElementById("task-list");

//   const taskText = taskInput.value.trim();

//   if (taskText !== "") {
//     const liElement = document.createElement("li");
//     liElement.textContent = taskText;

//     const removeButton = document.createElement("button");
//     removeButton.textContent = "Remove";
//     removeButton.className = "remove-btn";

//     removeButton.onclick = function () {
//       taskList.removeChild(liElement);
//     };

//     liElement.appendChild(removeButton);

//     taskList.appendChild(liElement);
//     taskInput.value = "";
//   } else {
//     alert("Please enter a task.");
//   }
// };
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM Elements
  const addButton = document.getElementById("add-button");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Define the addTask Function
  function addTask() {
    // Retrieve and trim the task input value
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create new elements
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Add click event to remove button
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append remove button to li, then li to taskList
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
      tasks.forEach((taskText) => {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        removeButton.onclick = function () {
          taskList.removeChild(li);
          // Remove the task from the tasks array
          tasks = tasks.filter((task) => task !== taskText);
          saveTasks(); // Save tasks after removal
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
      });
    }
  }

  // Attach event listeners
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  loadTasks();
});
