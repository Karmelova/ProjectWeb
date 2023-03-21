document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', changeNavbarBackground);
  var navbar = document.getElementById("navbar");
  var glassMenu = navbar.offsetTop;

  function changeNavbarBackground() {
    if (window.pageYOffset >= glassMenu + 10) {
      navbar.classList.add("glass");
    } else {
      navbar.classList.remove("glass");
    }
  }

  const menuBtn = document.querySelector('.menu-icon');
  let menuIcon = 'hamburger';
  menuBtn.addEventListener('click', () => {
    if (menuIcon === 'hamburger') {
      menuBtn.classList.remove('reverse');
      menuBtn.classList.add('x');
      menuIcon = 'x';
    }
    else {
      menuBtn.classList.remove('x');
      menuBtn.classList.add('reverse');
      menuIcon = 'hamburger';
    }
  });
})