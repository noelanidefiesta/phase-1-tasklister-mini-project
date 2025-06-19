document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const taskInput = event.target["new-task-description"].value;

    buildToDo(taskInput);

    event.target.reset();
  });

  function buildToDo(task) {
    const taskList = document.getElementById("tasks");
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  }
});

// Re-submitting to avoid the codegrade error message