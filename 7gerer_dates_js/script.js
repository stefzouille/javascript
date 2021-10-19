const start = document.getElementById("start_date");
const end = document.getElementById("end_date");

//recup Date du jour et split a T recup 1er index [0] :
const today = new Date().toISOString().split("T")[0];
const today1 = new Date().toISOString().split("T")[1];


console.log(today)
console.log(today1)

start.value = today;
start.min = today;

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


const tomorrowDate = () => {
  let day = new Date(today);
  day.setDate(day.getDate() + 1);
  let tomorrow = day.toISOString().split("T")[0];
  end.min = tomorrow;
  end.value = tomorrow;
};
tomorrowDate();

start.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() + 1);
  let tomorrow = day.toISOString().split("T")[0];
  end.min = tomorrow;
});

end.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() - 1);
  let yesterday = day.toISOString().split("T")[0];
  start.max = yesterday;
});

const bookingTotal = () => {
  let date1 = new Date(start.value);
  let date2 = new Date(end.value);
  let diffTime = Math.abs(date2 - date1);

  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let nightPrice = document.getElementById("nightPrice").innerHTML;

  let total = diffDays * nightPrice;
  document.getElementById("total").innerHTML = total
};
start.addEventListener("change", () => bookingTotal());
end.addEventListener("change", () => bookingTotal());
bookingTotal();