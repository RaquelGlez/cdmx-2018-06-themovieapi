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

// getMovies(apiActual, searchActual);
// getMovies(apiActual, searchActual).then()
// window.viewMovies = (data) => {
//   const movies = Object.values(data.Search)
//   console.log(movies);
//
//
//   // for (let i = 0; i < search.length; i++) {
//   //   info.innerHTML += `
//   //   <p>${search[i].Title}</p>
//   //   <img src="${search[i].Poster}" alt="">
//   //   `;
//   // };
//
// };
