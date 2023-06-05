let pocket = document.querySelector('.menu-pocket');
let pocketimg = document.querySelector('.img-menu');
let navLinks = document.querySelector('.menu');
let links =  document.querySelectorAll('.menu-link');
let dark = document.querySelector('.darkness-body');

pocket.addEventListener('click', () => {
  navLinks.classList.toggle('hide');
  if (navLinks.classList.contains('hide')) {
    pocketimg.src = "src/header/Close.svg";
  } else {
    pocketimg.src = "src/header/HambugerMenu.svg"
  }
  dark.classList.toggle('hiddem');
});

for ( i = 0; i < 3; i++) {
  links[i].addEventListener('click', () => {
    navLinks.classList.remove('hide');
    dark.classList.toggle('hiddem');
  });
}

