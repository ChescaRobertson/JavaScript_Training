class Dog {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  speak() {
    return `${this.name} says woof woof!`;
  }
}

const rex = new Dog('Rex', 2, 'lab');
const nigel = new Dog('Nigel', 4, 'sausage dog');
const keith = new Dog('Keith', 9, 'retriever');

console.log(rex.speak());
console.log(nigel.speak());
console.log(keith.speak());
