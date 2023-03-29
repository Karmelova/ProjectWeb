document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar')
  var menuBtn = document.getElementById('nav-icon')
  var menuItems = document.querySelector('.nav-list')
  var menuBrand = document.querySelector('.brand')
  var glassMenu = navbar.offsetTop
  const images = document.querySelectorAll('img')

  const carousel = document.querySelector('.carousel')
  firstCard = carousel.querySelectorAll('li')[0];
  carouselArrows = document.querySelectorAll('.button-wrapper .btn')
  let firstCardWidth = firstCard.clientWidth + 24.5;

  carouselArrows.forEach(arrowButton => {
    arrowButton.addEventListener('click', () =>{
carousel.scrollLeft += arrowButton.id == "btn-left"? -firstCardWidth:firstCardWidth;
    })
  })

  window.addEventListener('scroll', changeNavbarBackground)
  menuBtn.addEventListener('click', toggleMobileMenu)
  menuItems.addEventListener('click', hideMobileMenu)
  menuBrand.addEventListener('click', hideMobileMenu)
  window.addEventListener('resize', () => {
    navbar.classList.toggle(
      'mobile',
      window.innerHeight <= 768 && window.innerHeight <= 1080
    )
  })
  images.forEach(image => {
    const newURL = image.getAttribute('data-src')
    image.src = newURL
  })

  function changeNavbarBackground () {
    if (window.pageYOffset >= glassMenu + 10) {
      navbar.classList.add('glass')
    } else {
      navbar.classList.remove('glass')
    }
  }
 
  function toggleMobileMenu () {
    if (menuBtn.classList.contains('reverse')) {
      menuBtn.classList.remove('reverse')
      menuBtn.classList.add('x')
      menuItems.classList.add('show')
    } else {
      menuBtn.classList.remove('x')
      menuBtn.classList.add('reverse')
      menuItems.classList.remove('show')
    }
  }

  function hideMobileMenu () {
    menuBtn.classList.remove('x')
    menuBtn.classList.add('reverse')
    menuItems.classList.remove('show')
  }
})
