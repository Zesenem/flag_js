
let item2 = document.querySelector('#two');

//item anterior
let itemAnterior = item2.previousElementSibling;
//let itemAnterior = item2.previousSibling;
itemAnterior.className = 'cool';

// item seguinte
let itemSeguinte = item2.nextElementSibling;
itemSeguinte.className = 'complete';