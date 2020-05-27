//Variables
const listaTweets = document.getElementById('lista-tweets');


//Event Listeners

eventListeners();

function eventListeners(){
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);   
    
    //borrar tweets
    listaTweets.addEventListener('click', borrarTweet);
}



//FUNCIONES

    //Añadir tweet del formulario
    function agregarTweet(e) {
        e.preventDefault();
        //leer el valor del textarea
        const tweet = document.getElementById('tweet').value;
        //Crear boton de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        //Crear lemento y anañdir contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        //Añade boton de borrar al tweet
        li.appendChild(botonBorrar);
        //Añade el tweet a la lista
        listaTweets.appendChild(li);
    
    }

    //Borrar tweet
    function borrarTweet(e){
        e.preventDefault();
        if (e.target.className === 'borrar-tweet') {
            e.target.parentElement.remove();    
            alert('tweet eliminado');
        }

        
    }