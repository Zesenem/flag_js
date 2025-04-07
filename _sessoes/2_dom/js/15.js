let list = document.querySelector("ul");

let itemsLive = document.getElementsByTagName("li"); // Live Node
let itemsStatic = document.querySelectorAll("li"); // Static Node

// get methods are live

// static nodes are Query searches

console.log(itemsLive);
console.log(itemsStatic);



let novoLi = document.createElement('li')
novoLi.textContent = 'teste'
list.append(novoLi);

destacar(itemsLive);

function destacar(items){ // function declaration  
    for (const item of items) {
        item.classList.add('destaque');       
    }
}

