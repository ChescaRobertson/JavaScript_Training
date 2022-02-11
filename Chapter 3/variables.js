// Declaring Variables
// Three ways to declare variables in JavaScript, use const as default, change to let if required, avoid var */
var width;
console.log(width);

//Assigning variables
width = 42.5;
console.log(width);
console.log(typeof width);

// var variables can be redeclared and reassigned
var width;
console.log(width);

// let variables can be reassigned by not redeclared
let height;
console.log(height);

height = 20.2;
console.log(height);

// variables assigned with var are registered on the global or window object, other keywords do not register on window object

// Type Coercion
// variables can change data type after assignment, can be implict or explicit

width = true;
height = "this high";
console.log(typeof width);
console.log(typeof height);

// Const variables
// If we do not want to reassign values, use const. Must be initialised (declared and assigned at the same time)

const depth = 600;
console.log(depth);
console.log(typeof depth);

// const can be used with complex data e.g. arrays, objects etc.
// Overall shape of the data is unchanged (const) but properties can be modified; they are mutable
const dimensions = {
  width: 42.5,
  height: 20.2,
  depth: 600,
};
console.log(dimensions);
console.table(dimensions);

dimensions.depth = 500;
console.log(dimensions);

// Objects can share references, there is only one object but two references here
var x = { a: 1 };
var y = x;
y.a = 2;
console.log(x.a);

// Whereas here there are 2 objects
var z = { a: 1 };
z.a = 3;
console.log(x.a);
console.log(z.a);
