// 页面加载时获取并显示任务
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;

  if (task.trim()) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = task;

    // 保存任务到本地存储
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskList.appendChild(li);
    taskInput.value = ""; // 清空输入框
  }
}
