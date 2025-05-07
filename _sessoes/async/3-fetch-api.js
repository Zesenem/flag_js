let output = document.querySelector("#output");

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((resp => resp.json()))
//     .then(data => showUsers(data))
//     .catch(() => output.textContent = "Erro ao carregar os dados!")
//     .finally(() => console.log("Requisição finalizada!"));

    // function showUsers(data) {
    //     console.log(data);
    //     data.map ( user => {

    //         let {name, email, address: {city }} = user;
    //         output.innerHTML += `<h2>${name}</h2>`;
    //         output.innerHTML += `<p>${email}</p>`;
    //         output.innerHTML += `<p>${city}</p>`;  
    //         output.innerHTML += `<hr>`;
    //         output.innerHTML += `<br>`;
            
    //     })
    // }

async function fetchUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    output.textContent = data;
}

fetchUsers()