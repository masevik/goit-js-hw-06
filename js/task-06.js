const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onChangeFocus);

function onChangeFocus(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    changeClass('valid', 'invalid');
  } else {
    changeClass('invalid', 'valid');
  }
}

function changeClass(addClass, removeClass) {
  inputRef.classList.add(addClass);
  inputRef.classList.remove(removeClass);
}
