import xpto, { helloUniverse } from "./libEs6.js";

let output = document.querySelector("#output");

output.innerHTML += `<h2>Using the Es5  Module:<br> ${libEs5.sayHello()}</h2>`;

output.innerHTML += `<h2>Using the Es6 Module:<br> ${helloUniverse()}</h2>`;

output.innerHTML += `<h2>Using the Es6 Module with default export:<br> ${xpto()}</h2>`;
