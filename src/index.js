document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Step 4: Typing into field
const taskForm = document.getElementById("create-task-form");

taskForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const taskInput = document.getElementById("new-task-description");
  const task = taskInput.value;

  console.log("Task:", task);
});

// Step 5: Clicking submit button
const submitButton = document.querySelector("input[type='submit']");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  console.log("Submit button clicked");
});

// Step 6: Displaying the task 
const taskList = document.createElement("ul");
const taskFormContainer = document.getElementById("create-task-form").parentElement;
taskFormContainer.appendChild(taskList);

taskForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const taskInput = document.getElementById("new-task-description");
  const task = taskInput.value;

  const taskItem = document.createElement("li");
  taskItem.innerHTML = task;
  taskList.appendChild(taskItem);

  taskInput.value = ""; 
});

});
