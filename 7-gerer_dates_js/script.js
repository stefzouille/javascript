const start = document.getElementById("start_date");
const end = document.getElementById("end_date");

//recup Date du jour et split a T recup 1er index [0] :
const today = new Date().toISOString().split("T")[0];
const today1 = new Date().toISOString().split("T")[1];


console.log(today)
console.log(today1)

start.value = today;
start.min = today;


//rajout de l heure en page :
function pause(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function afficherDate() {
  while (true) {
    await pause(1000);
    let cejour = new Date();
    let options = { day: "2-digit" };

    let heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
    var dateheure = heure;

    document.getElementById('dateheure').innerHTML = dateheure;
  }
}
afficherDate();

// param dates de retour au lendemain min de start date :
const tomorrowDate = () => {
  let day = new Date(today);
  // manipuler le nombre de jour a venir :
  day.setDate(day.getDate() + 1);
  let tomorrow = day.toISOString().split("T")[0];
  end.value = tomorrow;
  //empeche le retour ds le passé :
  end.min = tomorrow;
};
tomorrowDate();

start.addEventListener("change", (e) => {
  // la value de start rentré par l utilisateur on crer une date  :
  let day = new Date(e.target.value);
  //on lui met 1 jour + 1 :
  day.setDate(day.getDate() + 1);
  //on convertie la valeur :
  let tomorrow = day.toISOString().split("T")[0];
  //la valeur input doit au minimun etre tomorrow :
  end.min = tomorrow;
  //au mini la valeur de input +1 jour :
  end.value = tomorrow;
});

end.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() - 1);
  let yesterday = day.toISOString().split("T")[0];
  start.max = yesterday;
});

//total des jours entre depart et arrivée :
const bookingTotal = () => {
  let date1 = new Date(start.value);
  let date2 = new Date(end.value);
  //calcul Math en valeur absolute en commence par 2 car value + grande :
  let diffTime = Math.abs(date2 - date1);
  console.log(diffTime);

  //calcul des jours d ecart en s? passage en jours :
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let nightPrice = document.getElementById("nightPrice").innerHTML;
  console.log(diffDays);

  //resultat du nb jours par le price :
  let total = diffDays * nightPrice;
  //inclure le total ds notre element :
  document.getElementById("total").innerHTML = total
};

//des que l input change refait un calcul
start.addEventListener("change", () => bookingTotal());
end.addEventListener("change", () => bookingTotal());

bookingTotal();