// créer les variables avec les noms passés aux id div dans html
const toggleButton = document.getElementById('toggle-button');
const sideBar = document.getElementById('side-bar');

//a levenement click on passe le param show..monter
toggleButton.addEventListener('click', show);

function show() {
  //toggle ajoute et enléve   add ajoute ds la console mais n enléve pas
  sideBar.classList.toggle('active');
}


//remove sidebar si on clique sur le main content

const content = document.querySelector('.content');

content.addEventListener('click', () => {
  sideBar.classList.remove('active');
});


