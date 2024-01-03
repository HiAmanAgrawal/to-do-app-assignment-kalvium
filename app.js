var tasks = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");

document.getElementById("button").onclick = click;

function click() {
  tasks.push(input.value);
  input.value = "";
  DisplayTask();
}

function DisplayTask() {
  todolist.innerHTML = " ";
  tasks.forEach(function (task, index) {
    todolist.innerHTML +=
      "<li>" +
      task + "<a onclick='editTask(" +
      index +
      ")'>Edit</a>" +
      "<a onclick='deleteTask(" +
      index +
      ")'>Delete |&nbsp;</a></li>";
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  DisplayTask();
}

function editTask(index) {
  var newValue = prompt("Please insert your new value");
  tasks.splice(index, 1, newValue);
  DisplayTask();
}
