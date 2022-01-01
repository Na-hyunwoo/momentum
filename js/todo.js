const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="todos";

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
}

// 아니 외않돼?
function paintToDo(newToDo){
    const li=document.createElement("li");
    li.id=newToDo.id;
    const span=document.createElement("span");
    span.innerText=newToDo.text;
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newToDoObj={
        text:newToDo,
        key:Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}


toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}

const todos=[{text:"lalala"}, {text:"lololo"}]
function sexyFilter(todo){return todo.text !== "lololo"}
console.log(todos.filter(sexyFilter))
console.log("hello");