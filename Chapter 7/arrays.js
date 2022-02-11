// Arrays

// Defining an array literal
let myArray = [4];

// Defining an array constructor function
let myArray2 = new Array(4, 6, 7, 0);
// Defining with just one arguement sets the length of the array
// It can be useful to set length (or min) at the start to perform better when running and save memory
let myArray3 = new Array(5);

console.log(myArray.length);
console.log(myArray3.length);

//Array.prototype.slice() // does not mutate
// Array.prototype.splice() // does mutate
