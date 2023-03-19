const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFromSubmit);

function onFromSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {
    alert('Заполни поле');
  } else {
    const formData = { email, password };
    alert('ok');
    formEl.reset();
    console.log(formData);
  }

  //   console.log(formData);
}
