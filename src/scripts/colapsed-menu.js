let pocket = document.querySelector('.menu-pocket');
let pocketimg = document.querySelector('.img-menu');
let navLinks = document.querySelector('.menu');
let links =  document.querySelectorAll('.menu-link');
let body = document.querySelector('.body');
let dark = document.querySelector('.darkness-body');

pocket.addEventListener('click', () => {
  navLinks.classList.toggle('hide');
  if (navLinks.classList.contains('hide')) {
    pocketimg.src = "src/header/Close.svg";
    body.classList.add('no-scrol');
  } else {
    pocketimg.src = "src/header/HambugerMenu.svg";
    body.classList.remove('no-scrol');
  }
  dark.classList.toggle('hiddem');
});

for ( i = 0; i < 3; i++) {
  links[i].addEventListener('click', () => {
    navLinks.classList.remove('hide');
    dark.classList.add('hiddem');
    if (navLinks.classList.contains('hide')) {
      pocketimg.src = "src/header/Close.svg";
      body.classList.add('no-scrol');
    } else {
      pocketimg.src = "src/header/HambugerMenu.svg"
      body.classList.remove('no-scrol');
    }
  });
}

setInterval(() => {
  if(window.innerWidth >= 800 && body.classList.contains('no-scrol')){
    body.classList.remove('no-scrol');
    dark.classList.add('hiddem');
    
  } 
  if(navLinks.classList.contains('hide') && window.innerWidth <= 800){
    body.classList.add('no-scrol');
    dark.classList.remove('hiddem');
  }
})

