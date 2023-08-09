function addTask(){
  let taskList = document.getElementById('taskList');
  let newTaskInput = document.getElementById('newTaskInput');
  let taskText = newTaskInput.ariaValueMax.trim(); // タスクのテキスト内容

  if(taskText ===""){
    alert("Please enter a task!");
    return;
  }

  // 新しいタスクの要素を作成
  let taskItem = document.createElement("li");

  // タスクの削除ボタンを作成
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick=function(){
    taskList.removeChild(taskItem);
  };

  // タスクと削除ボタンをリスト要素に追加
  taskItem.innerText = taskText + " ";
  taskItem.appendChild(deleteBtn);

  // タスクリストに新しいタスクを追加;
  taskList.appendChild(taskItem);

  // 入力フィールドをクリア
  newTaskInput.value = "";
}

document.getElementById("newTaskInput").addEventListener("keyup", function(event){
  if(event.keyCode ===13) { //enterキーが押された場合
    event.preventDefault();
    addTask();
  }
});