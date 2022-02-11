let showButton = document.querySelector('#show');
let hideButton = document.querySelector('#hide');
let paragraph = document.querySelector('#para');

showButton.addEventListener('click', function () {
  paragraph.style.display = 'block';
  hideButton.style.display = 'block';
  this.style.display = 'none';
});

hideButton.addEventListener('click', function () {
  paragraph.style.display = 'none';
  this.style.display = 'none';
  showButton.style.display = 'block';
});
