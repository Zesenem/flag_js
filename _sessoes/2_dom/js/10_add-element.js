// add element

const ul = document.querySelector('ul');
const li = document.createElement('li');
li.textContent = 'four';   

// add element to li

li.className = 'cool';
li.id = 'four';
li.setAttribute('data-type', 'new');
ul.appendChild(li);
console.log(ul.lastElementChild);
console.log(ul.firstElementChild);
console.log(ul.children[1]);
console.log(ul.childNodes[1]);
console.log(ul.childNodes[3]);