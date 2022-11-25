startRef = document.querySelector('[data-start]');
stopRef = document.querySelector('[data-stop]');

let timerId = null;

startRef.addEventListener('click', changeColor);
stopRef.addEventListener('click', stopChange);
stopRef.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);

  stopRef.removeAttribute('disabled');
  startRef.setAttribute('disabled', true);
}

function stopChange() {
  clearInterval(timerId);
  startRef.removeAttribute('disabled');
  stopRef.setAttribute('disabled', true);
}
