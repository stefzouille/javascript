//utilisé api et promise

const quote = document.getElementById('quote');


const getQuote = () => {
  fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => {
      //récupere dans la console l autheur :
      console.log(data.author);

      // affiche la data voulue content:
      quote.innerHTML = data.content;
      //rajoute le nom de l autheur en dessous du content citation:
      quote.innerHTML += `<br> - ${data.author} -`;
    });

  //ajout d une photo en random:
  fetch('https://picsum.photos/1600/1000')
    //cherche la phot
    .then((res) => {
      //affiche a l ecran:
      document.getElementById('pic').innerHTML =
        `<img src="${res.url}" alt="random photo"/>`;
    });


};
//quand on click sur le btn text citation news quote(citation) :
quote.addEventListener('click', () => getQuote());

getQuote();