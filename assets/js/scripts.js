document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  var menuBtn = document.getElementById("nav-icon");
  var menuItems = document.querySelector(".nav-list");
  var glassMenu = navbar.offsetTop;



  window.addEventListener("scroll", changeNavbarBackground);
  menuBtn.addEventListener("click", showMobileMenu);
  menuItems.addEventListener("click", hideMobileMenu);
  window.addEventListener("resize", () => {
    navbar.classList.toggle("mobile", window.innerHeight <= 768 && window.innerHeight <= 1080)
  })

  function changeNavbarBackground() {
    if (window.pageYOffset >= glassMenu + 10) {
      navbar.classList.add("glass");
    } else {
      navbar.classList.remove("glass");
    }
  };

  function showMobileMenu() {
    if (menuBtn.classList.contains("reverse")) {
      menuBtn.classList.remove("reverse");
      menuBtn.classList.add("x");
      menuItems.classList.add("show");
    }
    else {
      menuBtn.classList.remove("x");
      menuBtn.classList.add("reverse");
      menuItems.classList.remove("show");
    }
  };
  function hideMobileMenu() {
    menuBtn.classList.remove("x");
    menuBtn.classList.add("reverse");
    menuItems.classList.remove("show");
  }

})