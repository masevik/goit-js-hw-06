const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
  const fontSize = event.currentTarget.value;
  console.log(fontSize);
  refs.text.style.fontSize = `${fontSize}px`;
}
