
let scriptResults = document.getElementById('scriptResults');

let item2 = document.querySelector('#two');


console.log(item2.textContent);
item2.textContent = 'Morangos';
//item2.textContent = '<p>Morangos</p>';

item2.innerText = 'teste' // não é standard


scriptResults.innerHTML = '<p> Ola Universo </p>'
// cuidado com o innerHTML