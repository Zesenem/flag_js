let obj = {
    name: 'John',
    age: 30,
    city: 'New York',
    address: {
        street: '5th Avenue',
        number: 10
    }
}

let { name, age, city, address: { street, number } } = obj; // Destructuring assignment

console.log(name); // John
console.log(street); // 5th Avenue