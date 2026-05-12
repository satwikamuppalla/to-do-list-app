function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    ${task}
    <button onclick="removeTask(this)">Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

function removeTask(button) {
  let confirmDelete = confirm("Are you sure you want to delete this task?");

  if (confirmDelete) {
    button.parentElement.remove();
    alert("Task deleted successfully!");
  }
}
