const input = document.querySelector("#taskInput");
const addButton = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");
const counter = document.querySelector("#taskCounter");
const clearBtn = document.querySelector("#clearCompletedBtn");
addButton.addEventListener("click", function () {
  const inp = input.value.trim();

  if (inp === "") {
    console.log("Input is empty");
    return;
  }

  // Create <li>
  const li = document.createElement("li");

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create text span
  const text = document.createElement("span");
  text.innerText = inp;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("deleteBtn");

  // Add checkbox functionality
  checkbox.addEventListener("change", function () {
    li.classList.toggle("completed");
    updateCounter();
  });

  // Add delete functionality
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCounter();
  });

  // Append elements inside li
  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(deleteBtn);

  // Add li to list
  taskList.appendChild(li);

  // Clear input
  input.value = "";
  updateCounter();
});
function updateCounter(){
    const allTasks=document.querySelectorAll('li');
    const completedTasks=document.querySelectorAll('.completed');
    const total=allTasks.length;
    const completed=completedTasks.length;
    counter.innerText = `Total: ${total} | Completed: ${completed}`;
}
clearBtn.addEventListener('click',function(e){
    const completedTasks=document.querySelectorAll(".completed");
    completedTasks.forEach(function(task){
        task.remove()
    });
    updateCounter();
})