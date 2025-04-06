
let lista = document.querySelector('ul');

/// acrescentar um li no final da lista

// 1- criar o li
let itemFim = document.createElement('li');
// 2- criar texto para o li
itemFim.textContent = 'Bananas';
// 3- acrescentar a lista
lista.append(itemFim);


/// acrescentar item no inicio da lista
let itemInicio = document.createElement('li');
itemInicio.textContent = 'item inicio';
lista.insertBefore(itemInicio, lista.firstElementChild);

lista.append(itemInicio)