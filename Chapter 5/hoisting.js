// Hoisting

// This occurs only in ES5 non-strict code, it is the 'apparent' wrong order of things

// Call a function that hasn't been declared yet
console.log(goodMorning());

// Define a function whose variables are not yet declared
function goodMorning() {
  a = 'Good ';
  b = 'Morning';
  return a + b;
}

var a, b;

// Hoisting works for variable declarations only NOT initialisation, does not work with let, const keywords
// This is due to the behaviour of the JS intepreter, the browser/node makes at least 3 passes up and down the whole code
// First pass: declarations (variables and functions) interpreted
// Second pass: expressions get evaluated
// Third pass: Runtime code is exectuted (e.g. function calls etc.)
