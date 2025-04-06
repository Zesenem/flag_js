let itemsHot = document.querySelectorAll('li.hot');
let items = document.querySelectorAll('li');
console.log(items);
console.log(itemsHot)


for (const item of itemsHot) {
    item.className = 'cool';
    
}

