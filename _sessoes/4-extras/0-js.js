let obj = {
    name: "Antonio",
    lastName: "Silva",
    address: {
        street: "Rua 1",
        number: 123,
        city: "lisboa",
    }
}

let {name, lastName, address: {street, number, city}} = obj


console.log(name, lastName, street, number, city)

let output = document.querySelector("#output")

function sayHello(name) {
    console.log("Hello " + name)
}