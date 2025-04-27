const obj1 = {
  // object literal
  name: "obj1",
  surname: "Object 1",
};

console.log("Obj1:", obj1);

obj1.country = "microsoft.com"; // add property to object
console.log("Obj1:", obj1);
obj1.fullName = function () { // add method to object
  return `${this.name} ${this.surname}`;
}; 
console.log(obj1.fullName()); // call method of object
console.log("Obj1:", obj1);

/// object.create

const obj2 = Object.create(obj1); // create object from obj1

console.log("-------------------");
console.log("Obj2:", obj2); // obj2 is empty, but has access to obj1 properties and methods
console.log("Obj2.name:",obj2.name); // obj2.name is undefined, but obj2 has access to obj1.name

obj2.name = "obj2"; // add property to obj2
console.log("Obj2:", obj2); // obj2 has access to obj1 properties and methods, but obj2.name is now "obj2"