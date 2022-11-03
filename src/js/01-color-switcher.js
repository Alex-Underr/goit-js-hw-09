const bodyColor = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener('click', () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(
    () => (bodyColor.style.backgroundColor = getRandomHexColor()),
    1000 );
    startBtn.disabled = true;
     stopBtn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
  clearInterval(timerId);
});
