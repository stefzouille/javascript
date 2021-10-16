//injecte le body dans la page html :
const body = document.body;

//frequence ou la fct part:
setInterval(rainFall, 10);

//injecter class et style dans html :

function rainFall() {
  //quand on appelle waterDrop c est une balise i qui sera injecté ds html
  const waterDrop = document.createElement('i');

  // injecter une class .add :
  waterDrop.classList.add('fas');

  //aller chercher l icon goutte dans la class :
  waterDrop.classList.add('fa-tint');

  // parameter la taille de la goutte et taille aleatoire math.random :
  //formule math.random= le resultat de random fois 7  pixel:
  waterDrop.style.fontSize = Math.random() * 7 + 'px';

  //durée d animation :
  waterDrop.style.animationDuration = Math.random() * 2 + 's';

  //opacité differente grace a la formule math.random :
  waterDrop.style.opacity = Math.random() + 0.3;

  //repartir les gouttes sur la page comme il est absolute on joue sur left :
  //largeur de la window window.innerWidth :
  waterDrop.style.left = Math.random() * window.innerWidth + 'px';


  //a la balise body tu me creer waterDrop :
  body.appendChild(waterDrop);

  // creer timeout pour tueer chaque element qui a etait creer:
  setTimeout(() => {
    waterDrop.remove();
    //kill at 6 secondes:
  }, 6000);
}

//tester math.random :
console.log(Math.random());