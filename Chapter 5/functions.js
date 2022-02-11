// Functions

// Essential Functions
// Function Declarations
// Function declarations are loaded into memory at the start no matter where they occur in the codebase

function greet1() {
  console.log('Hello World');
}

function greet2(name) {
  console.log(`Hello ${name}`);
}

function greet3(name) {
  return `Hello ${name}`;
}

greet1();
greet2('Francesca');
greet3('Liam');

// You may have multiple return statements in a function, if so each return statement must represent the end of that path e.g. if return x else return y

// Advanced Functions
//If input the wrong type

console.log(greet3(123)); // Nunmber coerced into string
console.log(greet3({})); // Outputs: [object Object]

// input validation will fix this
function greet4(name) {
  if (typeof name !== 'string') {
    return null;
  }
  return `Hello ${name}`;
}

console.log(greet4('Bob'));
console.log(greet4({}));

// Default Parameters

function greet5(name = 'NO NAME, YOU ARE A ROBOT') {
  if (typeof name !== 'string') {
    return null;
  }
  return `Hello ${name}`;
}

console.log(greet5('Therese'));
console.log(greet5());

// Anonymous Function Expression
const noName = function () {
  return 'A Girl has no Name';
};

console.log(noName());

// anonymous function expressions are loaded into memory where they occur unlike declarations that load at the start
// Special use cases where these would be preferred include prototype manipulation in 00 JS - later

// Arrow Functions
// These are a shorthand syntax of anonymous function expressions, similar to Java lambda expressions -> ultra specific in Java

// Stage 1 start with anonymous function expression
const arrFunct = function () {
  return 'This is an arrow function';
};

// Stage 2 remove function keyword and replace with arrow
const arrFunct2 = () => {
  return 'this is an arrow function';
};
// Stage 3 remove return keyword and braces IF the function is only one line
const arrFunct3 = () => 'This is an arrow function';

// Stage 4 (optional) IF only one arg, remove parens
const arrFunct3 = (name) => `This is an arrow function with ${name}`;
