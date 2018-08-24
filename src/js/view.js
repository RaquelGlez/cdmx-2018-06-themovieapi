let btnSearch = document.getElementById('search-user');
//

window.viewSearch = (data) => {
  let information = document.getElementById('poster');
  let movies = Object.values(data.Search);
  console.log(movies);
  information.innerHTML = '';
  for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].Title);
    console.log(movies[i].Poster);
    information.innerHTML +=
    `<div class="card" style="width: 200px;">
      <img class="card-img-top" src="${movies[i].Poster}" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">${movies[i].Title}</p>
      </div>
    </div>`


    // `<div class="card">
    //   <img class="card-img-top" src="${movies[i].Poster}" alt="Card image cap">
    //   <div class="card-body">
    //     <p class="card-title">${movies[i].Title}</p>
    //   </div>
    // </div>`
  }


  // for (let i = 0; i < search.length; i++) {
  //   info.innerHTML += `
  //   <p>${search[i].Title}</p>
  //   <img src="${search[i].Poster}" alt="">
  //   `;
  // };
};
// window.viewMovies = (data) => {
//   const movies = Object.values(data.Search)
//   console.log(movies);
//
//   // for (let i = 0; i < search.length; i++) {
//   //   info.innerHTML += `
//   //   <p>${search[i].Title}</p>
//   //   <img src="${search[i].Poster}" alt="">
//   //   `;
//   // };
// };
// Declaramos la función asociada a obtener la api completa, incluyendo la apikey y la busqueda
const getSearch = (title) => {
  let api = 'http://www.omdbapi.com/?apikey=ea9cd228&s=';
  let searchApi = title.replace(/[' ']/gi ,'+');
  document.getElementById('titleMovie').value = '';
  let fullApi = `${api}${searchApi}`;
  getMovies(fullApi);
};

// Declaramos la función asociada al click en el boton, así como la llamada de la funcion para obtener la fullApi
btnSearch.addEventListener('click', ()=> {
  // obtenemos el valor el input dentro de la funcion, (recomendable en casos de ejecutar funciones que las emplean como parametros)
  let titleMovie = document.getElementById('titleMovie').value;
  if (titleMovie === '') {
    alert('Ingresa un titulo');
  } else {
    // document.getElementById('categoria').innerHTML += titleMovie
    getSearch(titleMovie);
  }
});
