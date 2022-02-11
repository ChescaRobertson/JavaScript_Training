let trainees = ['Francesca', 'Liam', 'Matt', 'Emily', 'Jay', 'Luke'];
let allTrainees = '';

trainees.forEach(function (name) {
  allTrainees += `${name}\n`;
});
alert(allTrainees);
trainees.push('Alan');
trainees.sort();
let removeIndex = trainees.indexOf('Francesca');
trainees.splice(removeIndex, 1);
allTrainees = '';
for (let i = 0; i < trainees.length; i++) {
  allTrainees += trainees[i] + '\n';
}
alert(allTrainees);
