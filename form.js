let pocket = document.querySelector('.menu-pocket');
let navLinks = document.querySelector('.menu-nav');
let links =  document.querySelectorAll('.menu-link');
let dark = document.querySelector('.darkness-body');
let close = document.querySelector('.close');

pocket.addEventListener('click', () => {
  navLinks.classList.toggle('hide');
  dark.classList.toggle('hiddem');
});

close.addEventListener('click', () => {
  navLinks.classList.toggle('hide');
  dark.classList.toggle('hiddem');
})

for ( i = 0; i < 3; i++) {
  links[i].addEventListener('click', () => {
    navLinks.classList.remove('hide');
    dark.classList.toggle('hiddem');
  });
}

