let inputField = document.querySelector("#inputField");
let addToDo = document.querySelector("#addToDo");
let toDoElement = document.querySelector("#toDo-element");
let errorMessage = document.querySelector("#errorMessage")

let colorList = ["#41485A", "#4F697C", "#5D8C9A", "#72AFB2", "#79A79C"];


addToDo.addEventListener("click", () => {
    var toDoItem = document.createElement("p");
    toDoItem.innerHTML = inputField.value;
    toDoItem.classList.add("toDoItem");
    toDoItem.style.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)];

    if (toDoElement.childElementCount < 8) {
        toDoElement.appendChild(toDoItem);
    } else {
        errorMessage.innerHTML = "Vous avez atteint le nombre maximal de tâche possible !";
        function errorMessageDisappears() {
            errorMessage.style.display = "none";
            return;
        }
        setTimeout(errorMessageDisappears, 4000);
    }

    inputField.value = "";

    toDoItem.addEventListener("click", () => {
        toDoItem.style.textDecoration = "line-through";
    })

    toDoItem.addEventListener("dblclick", () => {
        toDoElement.removeChild(toDoItem);
    })
});


let body = document.querySelector("body");
let amount = 200;
let i = 0;

while (i < amount) {
    let drop = document.createElement("i");
    body.appendChild(drop);
    i++;

    drop.style.width = Math.random() * 5 + "px";
    drop.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    drop.style.animationDelay = Math.random() * -20 + "s";
    drop.style.animationDuration = 5 + Math.random() + "s";
}