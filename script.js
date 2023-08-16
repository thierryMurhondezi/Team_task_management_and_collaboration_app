// JavaScript Code
// Sample tasks array
const tasks = [
    { id: 1, description: "Task 1", completed: false },
    { id: 2, description: "Task 2", completed: true },
  ];

  // Function to render tasks on the page
function renderTasks() {
    const taskList = document.getElementById("task-list");

    // Clear existing content
  taskList.innerHTML = "";

    // Generate task items dynamically
    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.innerHTML = task.description;

        // Apply line-through style if task is completed
    if (task.completed) {
        taskDiv.style.textDecoration = "line-through";
      }