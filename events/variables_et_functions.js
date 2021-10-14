//variables
/*let cours = 'yep yep';
console.log(cours);

const prenom = 'st3f';

prenom = 24; //erreur car prenom est une constante

console.log(prenom);*/



// functions
function faireKlkChose() {
  console.log('je fais un truc');
}
faireKlkChose();

//en nouveauté fonction flechée
const faireDeuxTaches = () => {
  console.log('je fais deux taches');
}

//avec un parametre a ma function
const faireUneTache = (type) => {
  console.log('je fais : ' + type);
}
faireUneTache('coder du js');
faireUneTache('coder comme un fou');
faireDeuxTaches();

