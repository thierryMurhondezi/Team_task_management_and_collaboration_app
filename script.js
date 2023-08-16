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
      // Append task div to task list
    taskList.appendChild(taskDiv);
  });
}

// Function to add a new task
function addTask(event) {
    event.preventDefault();
  
    const taskInput = document.getElementById("task-input");
    const taskDescription = taskInput.value;
  
    // Create new task object
    const newTask = {
      id: tasks.length + 1,
      description: taskDescription,
      completed: false,
    };
  
    // Add new task to tasks array
    tasks.push(newTask);
  
    // Update task list on the page
    renderTasks();
  
    // Reset task input value
    taskInput.value = "";
  }