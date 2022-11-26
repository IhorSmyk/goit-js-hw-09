const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

let timerId = null;

refs.start.addEventListener('click', changeColor);
refs.stop.addEventListener('click', stopChange);
refs.stop.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);

  refs.stop.removeAttribute('disabled');
  refs.start.setAttribute('disabled', true);
}

function stopChange() {
  clearInterval(timerId);
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', true);
}
