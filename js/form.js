const inputs = document.querySelectorAll('.contact-form__input');

inputs.forEach(input => {
  input.addEventListener('invalid', e => {
    if (e.target.validity.typeMismatch) {
      input.nextElementSibling.textContent = 'Invalid e-mail address';
    }
    input.classList.add('invalid');
  });
});

inputs.forEach(input => {
  input.addEventListener('blur', () => {
    input.checkValidity();
    if (input.classList.contains('invalid') && input.checkValidity()) {
      input.classList.remove('invalid');
    }
  });
});
