const passwordOutput = document.getElementById('password-output');
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn".split('');
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');
const dataNumbers = "0123456789".split('');
const dataSymbols = "!@#$%^&*()_+-=[]{}|;':,./<>?".split('');

function generatePassword() {

  const data = [].concat(
    lowercase.checked ? dataLowercase : [],
    uppercase.checked ? dataUppercase : [],
    numbers.checked ? dataNumbers : [],
    symbols.checked ? dataSymbols : []
  )
  //genere la longueur d apres le choix au curseur
  let passwordLength = parseInt(
    document.getElementById('display-password-length').value
  );
  let newPassword = "";

  if (data.length === 0) {
    passwordOutput.innerHTML = "Générateur de teur";
    alert("Veuillez choisir au moins un critères");
    return;
  }
  //genere le mot de passe:
  for (let i = 0; i < passwordLength; i++) {
    newPassword += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = newPassword;

  //selectionner en appuiyant sur btn
  passwordOutput.select();
  // copie automatique ds le presse papier
  document.execCommand('copy')
  generateButton.innerHTML = "Copié !";
  //delai de 3.5 secondes
  setTimeout(() => { generateButton.innerHTML = "Générer mot de passe " }, 3500);



}
