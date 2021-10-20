//on va chercher le div cursor dans l html

let mouseCursor = document.querySelector('.cursor');

//ajout d une ecoute sur la page pour suivre les ev de la souris:
window.addEventListener('mousemove', cursor);

//fct qui prend param e :
function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

//==========================================================
//cursor growing qui grossis:
// va chercher la class navlinks ds html:
let navLinks = document.querySelectorAll('.nav-links li');

//for each pour chacun des li 
navLinks.forEach(link => {

  //ajout ecouteur d evenement sur chaque li:
  //mouseover la souris est sur klk chose:
  link.addEventListener('mouseover', () => {
    //quand on survole les Li, la class grow est ajoutee:
    //ajouter une class a notre souris:
    mouseCursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });

  //quand la souris quitte le Li
  link.addEventListener('mouseleave', () => {
    //quand on survole les Li, la class grow est enlevee:
    mouseCursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
})
