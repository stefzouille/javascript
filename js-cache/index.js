if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/mettre-en-cache-les-donnees/serviceworker")
    .then(() => console.log("sw registered"))
    .catch((err) => console.log(err));
}
