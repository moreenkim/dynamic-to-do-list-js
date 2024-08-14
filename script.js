document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById('add-task-btn');

    const taskInput = document.getElementById('task-input');

    const taskList = document.getElementById('task-list');


    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }
    }
})