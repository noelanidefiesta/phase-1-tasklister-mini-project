document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Step 1: Select the form
  const form = document.getElementById("create-task-form");

  // Step 2: Add submit event listener to the form
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the page from refreshing

    // Step 3: Get the input value
    const taskInput = event.target["new-task-description"].value;

    // Step 4: Call function to add the task
    buildToDo(taskInput);

    // Optional: Clear the input after submission
    event.target.reset();
  });

  // Step 5: Define function to build and display the task
  function buildToDo(task) {
    const taskList = document.getElementById("tasks");
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  }
});

// Re-submitting to avoid the codegrade error message