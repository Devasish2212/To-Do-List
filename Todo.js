const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if(inputBox.value === '')
    {
        alert("Please Write the Task!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        span.classList.add("delete-icon");
        li.appendChild(span);
        
        span.addEventListener('click', function() 
        {
            li.remove(); 
            saveData();
        });

        let tick = document.createElement("span");
        tick.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        tick.classList.add("checked-icon");
        li.appendChild(tick);
        tick.addEventListener('click', function() {
            li.classList.toggle("checked");
        });
    }
    inputBox.value = "";
    saveData
}
function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || '';

    const tasks = listContainer.querySelectorAll('li');
    tasks.forEach(task => {
        task.querySelector('.delete-icon').addEventListener('click', function() {
            task.remove();
            saveData();
        });

        task.querySelector('.checked-icon').addEventListener('click', function() {
            task.classList.toggle("checked");
            saveData();
        });
    });
}
showTask();