const string = 'je suis une string';
const number = 42;
const boolean = true;
const array = ['Paris', 'Lyon', 'Montreal', 'Bordeaux'];
const array1 = ['Paris', 33, ['Montreal', 'Bordeaux'], true];

//se balader dans l array:

//affiche le tab array
console.log(array);

//affiche la valeur de l'index 2 du tab array
console.log(array[2]);

//affiche la 4eme valeurs de l index 2 du tab array la lettre r de montreal
console.log(array[2][4]);

//les boucles for : 

//je veux enumerer ce qu il y a ds le tableau

for (let i = 0; i < array.length; i++) {

  //a chaque boucle log moi ou se trouve [i]
  console.log(array[i]);
}
//enumére des données differentes array1 number boolean etc...
for (let i = 0; i < array1.length; i++) {

  //a chaque boucle log moi ou se trouve [i]
  console.log(array1[i]);

  //savoir le type de données : un number ou strig ou boolean:
  console.log(typeof array1[i]);
}


//.sort avec des chiffres ca range dans l ordre

const numbers = [21, 45, 1, 22, 44, 7]
array.sort();
//numbers.sort() ou :
console.log('range', numbers.sort()); //attention trie seulement le 1er index de chaque
console.log('yo', array);

//==================================================

// gestion integration video

const input = document.getElementById('input');
const video = document.getElementById('video');
let link = "";

input.addEventListener('input', (e) => {
  //recupere ce qui est tapé dans le input text :
  console.log(e.target.value);

  //utilise la fct changelink pour l url
  changeLink(e.target.value);

  if (link) {
    video.innerHTML = ` <iframe width="882" height="496" src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  }
})

// remplace le embed du code integration video et split a partir du & : 
const changeLink = (linkToChange) => {
  let embed = linkToChange.replace('watch?v=', 'embed/');
  //donc split et garde que la partie de gauche en enlevant le timestamp:
  link = embed.split('&')[0];
}

//code copy integration video :
//https://www.youtube.com/embed/QB1DTl7HFnc

//liens de la barre des tache est differente :
//https://www.youtube.com/watch?v=QB1DTl7HFnc&t=5420s
