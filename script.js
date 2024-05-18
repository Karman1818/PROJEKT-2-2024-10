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
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
  
  lastScrollTop }, false);

  window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    let header = document.querySelector('.header');
    header.style.backgroundPositionY = -(scrolled * 0.5) + 'px'; // Adjust the multiplier for desired parallax effect
});



  