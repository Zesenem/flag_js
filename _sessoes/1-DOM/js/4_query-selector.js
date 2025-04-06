
// seleciona 1 elementoo (1 ocorrencia)
let itemHot = document.querySelector('ul li.hot');
console.log(itemHot);

itemHot.className = 'cool';


//selecionar
let itemsHot = document.querySelectorAll('.hot');
console.log(itemsHot);
itemsHot[0].className = 'complete';

