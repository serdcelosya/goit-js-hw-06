const counter = {
  value: 0,
  decrement() {
    this.value -= 1;
  },

  increment() {
    this.value += 1;
  },
};

const decrementBtn = document.querySelector('.decrement');
const incrementBtn = document.querySelector('.increment');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
  counter.increment();
  valueEl.textContent = counter.value;
});
