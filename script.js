// function add(){
//     var text = document.getElementById("text");
//     var task = document.getElementById("task");

//     if(text.value !=""){
//         var li = document.createElement("li");
//         li.innerHTML = '<input type="checkbox" class="custom-checkbox"></input>' + text.value + '<button class="button2" onclick="DeleteTask(this)">Delete</button>';
//         task.append (li);
//         text.value = "";
//     }else {
//         alert("Please enter a task!");
//       }
// }
// function DeleteTask() {
//     task.remove(); 
//   }
function add() {
    var text = document.getElementById("text");
    var taskList = document.getElementById("task");

    if (text.value !== "") {
        var li = document.createElement("li");
        li.innerHTML =
            // '<input type="checkbox" class="custom-checkbox">' +
            text.value +
            '<button class="button2" onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        text.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function deleteTask(taskElement) {
    var listItem = taskElement.parentNode;
    var taskList = listItem.parentNode;
    taskList.removeChild(listItem);
}


