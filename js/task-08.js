const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('Всі поля форми мають бути заповнені');
  } else {
    const userData = {
      email: `${email.value}`,
      password: `${password.value}`,
    };
    console.log(userData);
    form.reset();
  }
}
