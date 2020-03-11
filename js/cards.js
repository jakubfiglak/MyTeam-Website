const openBtns = document.querySelectorAll('.dir-card__button--open');
const closeBtns = document.querySelectorAll('.dir-card__button--close');

openBtns.forEach(button =>
  button.addEventListener('click', e => {
    const card = e.target.closest('.dir-card');
    const cardBack = card.querySelector('.dir-card__back');
    cardBack.classList.add('dir-card__back--active');
  })
);

closeBtns.forEach(button =>
  button.addEventListener('click', e => {
    const card = e.target.closest('.dir-card');
    const cardBack = card.querySelector('.dir-card__back');
    cardBack.classList.remove('dir-card__back--active');
  })
);
