function acceptMarks() {
  let mark = Number(prompt('Please enter a mark: '));
  alert(grade(mark));
  more = confirm('Are there more marks to grade?');
}

function grade(mark) {
  if (mark >= 90) {
    return 'A';
  } else if (mark >= 80) {
    return 'B';
  } else if (mark >= 70) {
    return 'C';
  } else if (mark >= 60) {
    return 'D';
  } else if (mark >= 50) {
    return 'E';
  } else {
    return 'F';
  }
}

let more = true;
while (more) {
  acceptMarks();
}
