const openBtn = document.querySelector('#menu-open');
const closeBtn = document.querySelector('#menu-close');
const navContainer = document.querySelector('#nav-container');
const sideNav = document.querySelector('#side-nav');

function openSideNav() {
  navContainer.classList.add('nav-container--visible');
  sideNav.classList.add('side-nav--open');
}

function closeSideNav() {
  navContainer.classList.remove('nav-container--visible');
  sideNav.classList.remove('side-nav--open');
}

openBtn.addEventListener('click', openSideNav);
closeBtn.addEventListener('click', closeSideNav);
