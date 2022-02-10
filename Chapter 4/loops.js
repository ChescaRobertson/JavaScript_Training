// For Loops

const band = [
  'Patti',
  'Stevie',
  'Nils',
  'Tom',
  'Max',
  'Gary',
  'Danny',
  'Soozie',
  'Clarence',
  'Jake',
];

console.log(band.length);

band[3] = 'Tom Morello';

// Standard for loop
console.log('Standard for Loop: ');
for (let i = 0; i < band.length; i++) {
  console.log(band[i]);
}

// For of loop
console.log('\nFor of loop:');
for (const member of band) {
  console.log(member);
}

// Break and continue
console.log('\nFor loop with break:');
for (let i = 0; i < band.length; i++) {
  if (band[i] === 'Gary') {
    break; // breaks out of entire loop
  }
  console.log(band[i]);
}

console.log('\nFor loop with continue:');
for (let i = 0; i < band.length; i++) {
  if (band[i] === 'Gary') {
    continue; // skips this iteration of loop
  }
  console.log(band[i]);
}

// While Loop
let counter = 0;
while (counter < band.length) {
  console.log(band[counter]);
  counter++;
}

//Do While Loop
let counter2 = 0;
do {
  console.log(band[counter2]);
  counter2++;
} while (counter < band.length);
