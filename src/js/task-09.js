function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.body;

bodyEl.style.backgroundColor = changeBtn.addEventListener('click', changeColor);

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}
