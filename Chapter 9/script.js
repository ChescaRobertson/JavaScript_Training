let heading = document.querySelector('h1');
heading.innerHTML = 'Document Object Model';

let body = document.querySelector('body');
body.style.fontFamily = 'Helvetica';

let span = document.querySelector('span');
span.classList.add('highlight');

let unordlist = document.querySelector('ul');
unordlist.setAttribute('type', 'sqaure');
alert(unordlist.children[2].innerHTML);

let tableRow = document.createElement('tr');
let propertyCell = document.createElement('td');
let descriptionCell = document.createElement('td');

propertyCell.innerHTML = 'classList';
descriptionCell.innerHTML = 'Array of classes assigned to the element';

table.row.appendChild(propertyCell);
table.row.appendChild(descriptionCell);

document.querySelector('table').appendChild(tableRow);
let allCells = document.querySelectorAll('td');
for (var cell of allCells) {
  cell.style.padding = '10px';
}
