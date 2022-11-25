
const btnsRef = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
}

let timerId = null;

btnsRef.start.addEventListener('click', changeColor);
btnsRef.stop.addEventListener('click', stopChange);
btnsRef.stop.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  timerId = setInterval(() => {
      document.body.style.background = getRandomHexColor();
  }, 1000);

  btnsRef.stop.removeAttribute('disabled');
  btnsRef.start.setAttribute('disabled', true);
}

function stopChange() {
  clearInterval(timerId);
  btnsRef.start.removeAttribute('disabled');
  btnsRef.stop.setAttribute('disabled', true);
}
