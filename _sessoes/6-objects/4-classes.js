// classes

class Person {
  // ES10 class syntax
  name = "";
  surname = "";
  #title = "Mr."; //! private property

  constructor(name = "John", surname = "Doe") {
    this.name = name;
    this.surname = surname;
  }

  checkName() {
    return `A Person was Generated with the name: ${this.#title} ${this.name} ${this.surname}`;
  }

  //? Get & Set methods

  get title() {
    console.log("- get access to the title private property -");
    return this.#title;
  }

  // set title(value) {
  //     console.log('- set access to the title private property -');
  //     this.#title = value;
  // }
}

let john = new Person("john", "francis"); // create new object from Person constructor

console.log("John:", john); // john is a new object with properties from Person constructor

console.log("John:", john.checkName()); // john is a new object with properties from Person constructor and country property from Person prototype

console.log("John:", john.title);

///? heritage in classes

class Developer extends Person {
  // ES10 class syntax
  language = "javascript";
  #framework = "react"; //! private property

  constructor(name, surname, language = "javascript") {
    super(name, surname);
    this.language = language;
  }

  program() {
    return `${this.name} ${this.surname} is programming in ${this.language}`;
  }
}

let dev = new Developer("dev", "francis", "typescript"); // create new object from Developer constructor

console.log("Developer:", dev); // dev is a new object with properties from Developer constructor and country property from Person prototype

