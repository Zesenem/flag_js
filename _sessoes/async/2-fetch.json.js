let output = document.querySelector("#output");

fetch('pessoa.json')
.then(resp => resp.json())
.then(data => {
    console.log(data);
    output.innerHTML = `<h2>${data.nome}</h2>`;
})
.catch(err => console.log(err))