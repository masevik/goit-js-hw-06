const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');
let counterValue = 0;

decBtn.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

incBtn.addEventListener('click', () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
