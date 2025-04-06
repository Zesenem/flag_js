/*
1 - Acrescentar um novo item no inicio e no final da lista
2 - aplicar a class "cool" a todos os itens da lista
3 - Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista
*/

// 1
let list = document.querySelector("ul");

let itemsLive = document.getElementsByTagName("li");

let newListStart = document.createElement("li");
let newListEnd = document.createElement("li");

newListStart.textContent = "Start";
newListEnd.textContent = "End";

list.append(newListEnd);
list.insertBefore(newListStart, list.firstElementChild);

// 2
coolio(itemsLive);

function coolio(items) {
  for (const item of items) {
    item.classList.add("cool");
  }
}

// 3

let span = document.createElement("span");
span.textContent = itemsLive.length;

let h2 = document.querySelector("h2");
h2.appendChild(span);
