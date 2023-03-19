const controlerEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

controlerEl.addEventListener('input', onControlerInput);

function onControlerInput() {
  textEl.style.fontSize = `${controlerEl.value}px`;
}
