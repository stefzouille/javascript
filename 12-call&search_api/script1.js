//https://restcountries.eu/rest/v2/all?fields=name;population;flag
//https://restcountries.eu/rest/v3.1/all?fields=name;population;flag

// good : https://restcountries.com/v3.1/all?fields=name;population;flag
const searchInput = document.getElementById('search');
const results = document.getElementById('results');


let countries;
let searchTherms = '';


//API request
const fetchCountries = async () => {
  countries = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,population,flags'
  ).then(res => res.json());


}

const fetchCountries2 = async () => {
  countries = await fetch('https://restcountries.com/v3.1/all?fields=capital,continents')
    .then(res => res.json())

}

// fetchCountries();
// fetchCountries2();

//fct pour lancer la recherche
const showCountries = async () => {
  await fetchCountries();

  //ecrire dans results et tout ramener en minuscule :

  results.innerHTML = (
    countries
      .filter(country = country.name.toLowerCase().includes(searchTerms.toLowerCase()))
      .map(country => (

        `
        <li class="country-item">
        img class="country-flag" src="${country.flags}"/>
        <h3 class="country-name">${country.name}</h3>
        <div class="country-info">
        <h2 class="country-population">${country.population}</h2>
        <h5 class="country-population-text">habitants</h5>
        <div/>
        </li>
        
        `

      )).join('')
  )

};

showCountries();

// INPUT SETUP
searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  showCountries();
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
