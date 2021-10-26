const searchInput = document.getElementById('search');
const results = document.getElementById('results');

let searchTerm = '';
let countries;

// API REQUEST
const fetchCountries = async () => {
  countries = await fetch(
    'https://restcountries.com/v2/all?fields=name,population,flags').then(res => res.json());

  console.log(countries)
};
const showCountries = async () => {
  await fetchCountries();
  results.innerHTML = (


    countries
      .filter(country => country.names.toLowerCase().includes(searchTerm.toLowerCase()))

      .map(country => (

        ` 
          <li class="country-item">
            <img class="country-flag" src="${country.flag}" />
            <h3 class="country-name">${country.name}</h3>
            <div class="country-info">
              <h2 class="country-population">${numberWithCommas(country.population)}</h2>
              <h5 class="country-population-text">Habitants</h5>
            </div>
          </li>
        `
      )).join('')
  );
};

// showCountries();

// INPUT SETUP
searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  showCountries();
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}