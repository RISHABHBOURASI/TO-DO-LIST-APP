document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.className = "list-group-item";

  li.innerHTML = `
    ${taskText}
    <div>
      <button class="btn btn-success btn-sm me-2" onclick="completeTask(this)"><i class="fa-solid fa-check"></i></button>
      <button class="btn btn-danger btn-sm" onclick="deleteTask(this)"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function completeTask(btn) {
  btn.closest("li").classList.toggle("list-group-item-success");
}

function deleteTask(btn) {
  btn.closest("li").remove();
}
