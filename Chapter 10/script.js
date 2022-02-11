let showButton = document.querySelector('#show');
let hideButton = document.querySelector('#hide');
let paragraph = document.querySelector('#para');

showButton.addEventListener('click', function () {
  paragraph.style.display = 'block';
  hideButton.style.display = 'block';
  showButton.style.display = 'none';
});

hideButton.addEventListener('click', function () {
  paragraph.style.display = 'none';
  hideButton.style.display = 'none';
  showButton.style.display = 'block';
});
