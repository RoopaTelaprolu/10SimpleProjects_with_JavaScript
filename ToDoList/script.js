const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");


function addTask(){
    if(inputBox.value === ''){
        alert("Enter something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let editSpan = document.createElement("span");
        editSpan.classList.add("edit");
        editSpan.innerHTML = '\u270E'; // Edit pencil icon
        li.appendChild(editSpan);
        
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
}
listContainer.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        if (e.target.classList.contains("edit")) {
            editTask(e.target.parentElement);
        } else {
            e.target.parentElement.remove();
            saveTask();
        }
    }
});

function editTask(task) {
    inputBox.value = task.childNodes[0].nodeValue;
    task.remove();
    saveTask();
}

function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();