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
console.log(ul.childNodes[5]);
console.log(ul.childNodes[7]);
console.log(ul.childNodes[9]);
console.log(ul.childNodes[11]);


console.log(ul.childNodes[13]);
console.log(ul.childNodes[15]);

    webkitURL = window.webkitURL || window.URL;
    console.log(webkitURL);
