function Person(name = "John", surname = "Doe") {
  // constructor function
  this.name = name;
  this.surname = surname;
  this.fullName = function () {
    return `A Person was Generated with the name: ${this.name} ${this.surname}`;
  };
}

let john = new Person("john", "francis"); // create new object from Person constructor

console.log("John:", john); // john is a new object with properties from Person constructor

console.log("--------------------");

Person.prototype.country = "Portugal"; // add property to Person prototype

Person.prototype.title = "Mr."; // add property to Person prototype

console.log("John with prototype:", john); // john is a new object with properties from Person constructor and country property from Person prototype

// Heritage with constructor function

function Developer(name, surname, language = "javascript") {
  // constructor function
  Person.call(this, name, surname); // call Person constructor with this context
  this.language = language; // add property to Developer constructor

  this.program = function () {
    // add method to Developer constructor
    return `${this.name} ${this.surname} is programming in ${this.language}`;
  };
}

let dev = new Developer("dev", "francis", "typescript"); // create new object from Developer constructor

console.log("Developer:", dev);




