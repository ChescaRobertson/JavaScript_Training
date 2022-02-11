// Objects
/**
 * An object is a container for related data and functions, usually the functions act on the objects data
 *  If an object had a function that didn't affect any of it's data, the function would be a candidate for being a different object altogether, or sometime we call a static context
 *
 * Example
 */

// Object Literals

const person = { name: '', age: 0 };
const francesca = { name: 'Francesca Robertson', age: 25 };
const liam = { name: 'Liam Slater', age: 26 };
const michael = { firstname: 'Michael', lastname: 'Robertson' };

console.table(francesca);
console.table(michael);
console.table(liam);

const familyofLiterals = [];
familyofLiterals.push(francesca);
familyofLiterals.push(liam);
familyofLiterals.push(michael);

for (let member of familyofLiterals) {
  console.log(`${member.name}, age ${member.age}`);
}

// ES5 Function Constructorß
function Person(name, age, ...hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = [...hobbies];
}

const therese = new Person('Therese', 56, 'singing, jigsaws, cooking, french');
const francescaF = new Person('Francesca', 25, 'running, netball, video games');
const liamF = new Person('Liam', 26, 'running, video games');

const familyofFunctionConstructors = [];

familyofFunctionConstructors.push(therese);
familyofFunctionConstructors.push(francescaF);
familyofFunctionConstructors.push(liamF);

for (let member of familyofFunctionConstructors) {
  console.log(`${member.name}, age ${member.age}, hobbies: ${member.hobbies}`);
}

// Prototype Manipulation
// You can add function type properties in the constructor function
// This is useful if a given function should be a property of all objects of a given type
// This is how JS traditionally creates classes

function Dog(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  // This is bad practice but will work
  this.speak = function () {
    alert(`${this.name} says Woof Woof!`);
  };
}

// Instead you would do it like this, adding the function to the prototype property after the constructor, these can be added anywhere in the codebase
Dog.prototype.trick = function () {
  return `${this.name} rolls over`;
};

let rex = new Dog('Rex', 2, 'Lab');
console.log(rex.trick());

// Later ES6 classes were introduced to mimic the same effect as above with classes (greater familiarity between languages)
