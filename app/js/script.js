const hamburgerBtn = document.querySelector('#hamburger-btn');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

hamburgerBtn.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    // Close mobile menu
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  } else {
    // Open mobile menu
    header.classList.add('open');
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
  }
});
