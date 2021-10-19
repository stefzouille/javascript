
//changement auto des couleurs ::
setInterval(changeBg, 2000);

function changeBg() {
  const col1 = getRandomRgb();
  const col2 = getRandomRgb();
  const col3 = getRandomRgb();

  const colorString = `rgb(${col1}, ${col2}, ${col3})`;
  console.log(colorString);
  // injecter resultat du log ci dessus ds le dom :
  document.body.style.backgroundColor = colorString;
  //maintenant injecter le rgb en cour dans le texte du html:
  document.getElementById("color").innerHTML = colorString;
}


function getRandomRgb() {
  //au hasard Math.random
  return Math.floor(Math.random() * 256);
}

console.log(getRandomRgb());