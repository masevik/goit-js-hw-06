function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
  boxes: document.querySelector('#boxes'),
};

let amount = 0;
let markup = '';

refs.input.addEventListener('input', getAmount);
refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function getAmount() {
  amount = refs.input.value;
  return amount;
}

function createBoxes() {
  getAmount();
  let size = 30;

  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style="display:block;background-color:${getRandomHexColor()};width:${size}px;height:${size}px;"></div>`;
    size += 10;
  }

  refs.boxes.innerHTML = markup;
  markup = '';
  refs.input.value = '';
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  markup = '';
  refs.input.value = '';
}

createBoxes(refs.input.value);
