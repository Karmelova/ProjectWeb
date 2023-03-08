document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', changeNavbarBackground);
    var navbar = document.getElementById("navbar");
    var glassMenu = navbar.offsetTop;
    
    function changeNavbarBackground() {
      if (window.pageYOffset >= glassMenu+10) {
        navbar.classList.add("glass");
      } else {
        navbar.classList.remove("glass");
      }
    }
})