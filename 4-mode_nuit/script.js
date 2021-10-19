//lié avec l id de html
const darkMode = document.getElementById('dark-mode');



darkMode.addEventListener('change', () => {
  //inject une class dark au body et la désinject en re click dessus .toggle et non .add
  document.body.classList.toggle('dark');
});