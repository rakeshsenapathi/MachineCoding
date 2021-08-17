const handleDeleteTask = function(e, newTaskContainerId){
    console.log(arguments);
    const todos = document.getElementById("todos");
    todos.removeChild(newTaskContainerId);
}


const handleClick = function(e){
    e.preventDefault();
    const todos = document.getElementById("todos");
    const input = document.getElementById("input-add").value;
    const newTaskContainer = document.createElement('div');
    const newTask = document.createElement('li');
    const deleteTask = document.createElement('button');
    deleteTask.innerText = "delete";
    newTask.innerText = input;
    newTaskContainer.appendChild(newTask)
    newTaskContainer.appendChild(deleteTask);
    todos.appendChild(newTaskContainer);
    deleteTask.addEventListener("click",
    () => handleDeleteTask(e, newTaskContainer));
}

const throttle = function(func, delay){
    let prev = 0;
    let now = new Date().getMilliseconds();
    return (...args) => {
        let now = new Date().getTime();
        if(now - prev < delay){
        }
        prev = now;
        return func(...args);
    }
}

document.getElementById('addBtn').addEventListener(
    "click",
    throttle(handleClick, 1500)
)