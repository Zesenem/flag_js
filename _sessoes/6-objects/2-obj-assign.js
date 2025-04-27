let obj1 = {
  name: "John",
  surname: "Doe",
  address: {
    street: "Main St",
    door: {
      number: 123,
      letter: "A",
    },
  },
};

let {name, surname, address: {street, door: {number, letter}}} = obj1; // destructuring assignment

const newObj = Object.assign( {} , obj1, {name: "Jane", country: "Portugal"}); // create new object with properties from obj1 and new property name

console.log("newObj:", newObj); // newObj is a new object with properties from obj1 and new property name

const newObj2 = {...obj1}; // create new object with properties from obj1 using spread operator}

console.log("newObj2:", newObj2); // newObj2 is a new object with properties from obj1

const newObj3 = {
    ...obj1,
    ...{country: "Portugal"}
}

console.log("newObj3:", newObj3); // newObj3 is a new object with properties from obj1 and country

/// Object.keys(), Object.values(), Object.entries() other properties of Object


