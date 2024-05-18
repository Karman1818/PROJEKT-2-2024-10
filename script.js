function swapColors() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
}


function toggleMenu() {
    const nav = document.querySelector('.navbar-nav');
    if (nav.classList.contains('active')) {
        nav.style.maxHeight = '0';
        nav.addEventListener('transitionend', function() {
            nav.classList.remove('active');
        }, { once: true });
    } else {
        nav.classList.add('active');
        nav.style.maxHeight = nav.scrollHeight + 'px';
    }
}


const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Przewijanie w dół
    navbar.classList.add('hidden');
  } else {
    // Przewijanie w górę
    navbar.classList.remove('hidden');
  }
  
  lastScrollTop }, false);


  