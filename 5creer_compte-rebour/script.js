//parametrer la fct avec l input text

function getInputValue() {
  //recuperer value
  let choice = document.getElementById("choice").value;

  //si ce nest pas un nombre:
  if (isNaN(choice)) {
    alert("entrez un nombre avant que ca péte");
  } else {
    let startingMinutes = choice;

    //vider l input :
    document.getElementById("choice").value = ""; //ou :
    // this.choice.value = ("");


    let time = startingMinutes * 60;


    const countDownEl = document.getElementById('countdown');

    //appel la fct avec compte a rebours chaques secondes:
    // envoi updateCountdown
    setInterval(updateCountdown, 1000); //chaque secondes envoi la fct

    function updateCountdown() {
      //comment obtenir les minutes et les secondes :
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      //si le time inferieur a 10 tu concataine 0 et le time entre 0 et 9
      seconds = seconds < 10 ? '0' + seconds : seconds;

      countDownEl.innerHTML = `${minutes}:${seconds}`;
      //arrivé a zero lui dire de pas faire negatif et afficher game over
      if (time > 0) {
        time--;
      } else {
        countDownEl.innerHTML = `Game Over`;
      }
    }
  }
}










