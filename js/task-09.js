function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorCode = document.querySelector('.color');
console.log(colorCode);

changeColorBtn.addEventListener('click', clickChangeColorBtn);

function clickChangeColorBtn(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorCode.textContent = getRandomHexColor();
}
