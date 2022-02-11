//Type Coercion

let yearNumber = 1995;
console.log('\nSimple Type Coercion: ');
console.log('Numerical addition: ' + (yearNumber + 1));
console.log('Numerical subtraction: ' + (yearNumber + 1));

let yearString = '1995';
console.log('Coercion to allow addition: ' + (yearString + 1));
console.log('Coercion to allow subtraction: ' + (yearString - 1));

//Equality
console.log('\nEquality: ');
console.log('== Equality: ' + (yearNumber == yearString)); // true, loose/abstract equality
console.log('=== Equality: ' + (yearNumber === yearString)); // false, strict equality, checking value and type

// Using == allows coercion of one of more operands before doing a strict comparions

// Other values
console.log('\nNot a Number: ');
console.log(yearString - '1'); // 1994
console.log('NaN example: ' + yearString - 'one'); // Not a Number NaN
// NaN result of an expression where a number was expected but not provided

console.log('NaN === comparison: ' + (NaN === NaN)); // false
console.log('NaN == comparison: ' + (NaN == NaN)); // false
// NaN never equals itself with == or === as you could arrived at NaN in different ways

// Equality using Object.is()
// Designed for edge cases like NaN equality
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false

console.log(1 / 0); // inifinity

// Explicit Coercions

//Strings to numbers
console.log('\nExplicit Coercions, Strings to numbers:');
console.log('Option 1: ' + 100 + '1'); // 1001 Option 1
console.log('Option 2 Method of String Class: ' + (100 + parseInt('1'))); // 101 Option 2 Method of String Class
console.log(
  'Option 3 Function constructor of number class: ' + (100 + Number('1'))
); // 101 Option 3 Function constructor of number class
console.log('Option 4 Unary Plus Operator: ' + (100 + +'1')); // 101 Option 4 Unary Plus Operator

//Wrapper Classes
// There are a number of object wrapper classes, they promote primitive vales into objects, they have methods associated with objects of that type
console.log('\nTruthy and Falsey Values:');
console.log('Empty Strings: ' + Boolean('')); // false: empty strings
console.log('Non-empty Strings: ' + Boolean(' ')); // true: non-empty strings
console.log('Zero: ' + Boolean(0)); // false
console.log('Non-Zero Number: ' + Boolean(1)); // true
console.log('Objects: ' + Boolean({ a: 1 })); // true
console.log('Empty Objects: ' + Boolean({ a: 1 })); // true

console.log('\nThe not not operator: ');
console.log('Not true: ' + !true);
console.log('Not false: ' + !false);
console.log('Not not true: ' + !!true);
console.log('Not not false: ' + !!false);

// First ! changes type to boolean and gives you the opposite truth value, the second ! inverts the opposite value

console.log('Not not empty string: ' + !!''); // false
console.log('Not not non-empty string: ' + !!'x'); // true

//Compound Operators
console.log('\nCompound Operators: ');
var x = 1;
// Increment and Decrement Operators
x = x + 1;
x += 1;
x++;
++x;
// Prefix and postfix operators differ in behvaiour when used in an expression
// Prefix changes value for use in expression then stores changed vales
// Postfix uses values as is, then stores changed value

//Outside an expression
let counterPrefix = 0;
let counterPostfix = 0;

++counterPrefix;
++counterPostfix;

console.log(
  'Pre/Postfix outside expression: Prefix: ' +
    counterPrefix +
    ' Postfix: ' +
    counterPostfix
);

// Inside an expression
let resultPrefix = ++counterPrefix + 100;
let resultPostfix = counterPostfix++ + 100;

console.log(
  'Pre/Postfix outside expression: Prefix: ' +
    resultPrefix +
    ' Postfix: ' +
    resultPostfix
);
