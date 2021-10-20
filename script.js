navbar = document.getElementById('navbar');
navElements = document.getElementById('nav-elements');
  
window.addEventListener('scroll', function(){
  const scroll = this.document.documentElement.scrollTop;

  if (scroll > 200) {
    navbar.style.height = "7vh";
    navElements.style.height = "7vh";
    navbar.style.background = "rgba(52, 187, 255, 0.9)";
  } else {
    navbar.style.height = "15vh";
    navElements.style.height = "15vh";
    navbar.style.background = "#34BDFF"
  }
});