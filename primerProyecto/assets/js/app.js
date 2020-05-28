//Variables
const listaTweets = document.getElementById("lista-tweets");

//Event Listeners

eventListeners();

function eventListeners() {
  //Cuando se envia el formulario
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTweet);

  //borrar tweets
  listaTweets.addEventListener("click", borrarTweet);
}

//FUNCIONES

//Añadir tweet del formulario
function agregarTweet(e) {
  e.preventDefault();
  //leer el valor del textarea
  const tweet = document.getElementById("tweet").value;
  //Crear boton de eliminar
  const botonBorrar = document.createElement("a");
  botonBorrar.classList = "borrar-tweet";
  botonBorrar.innerText = "X";

  //Crear elemento y anañdir contenido a la lista
  const li = document.createElement("li");
  li.innerText = tweet;
  //Añade boton de borrar al tweet
  li.appendChild(botonBorrar);
  //Añade el tweet a la lista
  listaTweets.appendChild(li);
  //Añadir a local storage
  agregarTweetLocalStorage(tweet);
}

//Borrar tweet del DOM
function borrarTweet(e) {
  e.preventDefault();
  if (e.target.className === "borrar-tweet") {
    e.target.parentElement.remove();
    alert("tweet eliminado");
  }
}

//Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  //Añadir nuevo tweet
  tweets.push(tweet);
  //Convertir de string a arreglo para local Storage
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Obtener tweets de local storage
function obtenerTweetsLocalStorage() {
  let tweets;
  //Revisamos valores de local storage
  if (localStorage.getItem('tweets') === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;
}
