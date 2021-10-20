navbar = document.getElementById('navbar');
navElements = document.getElementById('nav-elements');


window.addEventListener('scroll', function () {
  //quand on scroll recup les données de la valeur de la scrollTop :
  const scroll = this.document.documentElement.scrollTop;
  console.log(scroll);

  if (scroll > 200) {
    navbar.style.height = '7vh';
    //text :
    navElements.style.height = '7vh';
    // injecter du style par js color + opacity:
    navbar.style.background = '#34bbffde';

  } else {
    navbar.style.height = '15vh';
    //text :
    navElements.style.height = '15vh';
    navbar.style.background = '#34bdff'
  }

});