let pocket = document.querySelector('.menu-pocket');
let navLinks = document.querySelector('.menu-nav');
let links =  document.querySelector('.menu-link');
let dark = document.querySelector('.darkness-body');

pocket.addEventListener('click', () => {
  navLinks.classList.toggle('hide');
  dark.classList.toggle('hiddem')
});