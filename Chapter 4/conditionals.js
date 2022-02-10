//If else

if (false) {
  console.log('Inside the if block');
} else {
  console.log('Inside the else block');
}

// Switch statements
let switchVariable = 2;
switch (switchVariable) {
  case 1:
    console.log('Option 1');
    break;
  case 2:
    console.log('Option 2');
    break;
  case 3:
    console.log('Option 3');
    break;
  default:
    console.log('Please choose a valid option');
}

// Switch statements without breaks, it will return anything after the break, summatively adding
let switchVariable2 = 2;
switch (switchVariable2) {
  case 1:
    console.log('Option 1');
  case 2:
    console.log('Option 2');
  case 3:
    console.log('Option 3');
  default:
    console.log('Please choose a valid option');
}

// Ternary Operator

var result = false ? 'case if true' : 'case if false';
console.log(result);

//Use case

const loggedInComponent = '<p>Admin Component</p>';
const loggedOutComponent = '<p>Guest Component</p>';
let isLoggedIn = true;

document.querySelector('#welcome').innerHTML = isLoggedIn
  ? loggedInComponent
  : loggedOutComponent;
