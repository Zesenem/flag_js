let person = {
    name: 'John',
    checkName: function() {
        return this.name;
    }
};

let anotherPerson = Object.create(person);

console.log(anotherPerson.checkName());

anotherPerson.name = 'Jane';

console.log(anotherPerson.checkName());

console.log(anotherPerson.checkName.call(person)); // 'John'