// le DOM

const btn = document.querySelector('#btn'); // on récupère le bouton avec l id 
const img = document.getElementById('img');

//créer un evenement:hidden ou visible aprés clique sur le btn

btn.addEventListener('click', () => {
  // console.log('yess !');
  img.classList.toggle('show')
  // alert('ça a changé') a chaque click
})

//======================================================
// posistion de la souris

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const affiche = document.querySelector('.affiche');


//le e de event permet de recuperer des infos

mouseEvent.addEventListener('mousemove', (e) => {
  // retranscrit la position de la souris ds le html a l ecran
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;

  // bouge le div mouseEvent en fonction de la valeur retranscrit de la souris
  mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";


  //rajoute un flou blur quand valeur x depasse 500px
  if (e.x > 900) {
    document.body.style.filter = "blur(3px)";

    //l enleve sinon ça
  } else {
    document.body.style.filter = "none"
  }
});

//====================================================

//l evenement input text inputEvent

document.getElementById("input").addEventListener('input', (e) => {
  console.log('yesspapa')
  // target.value recupere ce que est ecrit dans l input text
  console.log(e.target.value)
  //affiche le texte ecrit au clavier dans le text input
  affiche.innerHTML = e.target.value
})

//====================================================

//integrer darkmode

const theme = document.querySelectorAll('.theme');
// const dark = document.querySelector('.dark');
// const salmon = document.querySelector('.salmon');
// const yellow = document.querySelector('.yellow');

//pour chacun des element theme creer un foreach 
//et met un evenement sur chacun des elements
//nommé item mais peu mettre n importe quel nom
theme.forEach((item) => {
  item.addEventListener('click', (e) => {
    //affiche ds la console a chaque click sur un de elements theme id
    console.log(e.target.id)
    // enlever le theme pour empecher accumumlation et reset
    document.body.classList.remove("darktheme", "salmontheme", "yellowtheme")

    //switch permet de reagir a l id clické du darkmode
    switch (e.target.id) {
      case 'dark':
        document.body.classList.add('darktheme');
        break;
      case 'salmon':
        document.body.classList.add('salmontheme');
        break;
      case 'yellow':
        document.body.classList.add('yellowtheme');
        break;
      default:
        null;
    }
  })
})