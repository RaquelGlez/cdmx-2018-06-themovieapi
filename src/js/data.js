// let apiActual = 'http://www.omdbapi.com/?apikey=ea9cd228&s=';

// Accedemos a la API
window.getMovies = (apiFinal) => {
  fetch(apiFinal)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // return data;
      // aqui pintas
      viewSearch(data);
      // viewMovies(data);
    })
    .catch((error) =>{
      console.log('Error');
    });
};
