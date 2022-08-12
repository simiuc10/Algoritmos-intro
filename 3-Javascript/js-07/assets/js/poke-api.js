/* URL o consumir */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/155"




/* Elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon")
console.log(imgPokemon);

const idPokemon = document.getElementById("id-pokemon")
console.log(idPokemon);

const nombrePokemon = document.getElementById("nombre-pokemon")
console.log(nombrePokemon);

const listaHabilidades = document.getElementById("lista-habilidades")
console.log(listaHabilidades);

/* Funciones */
async function obtenerPokemon(url){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
 
    const pokemon = {
        nombre: datos.forms[0].name,
        habilidades: datos.abilities,
        id: datos.id,
        tipo: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default,
    }

    // imagen, nombre y ID
    imgPokemon.src = pokemon.imagen;
    idPokemon.textContent = `ID: ${pokemon.id}`;
    nombrePokemon.textContent = pokemon.nombre;

    // Habilidades
    console.log(pokemon.habilidades);


    let template = `<li class="list-group-item">Elemento agregado desde JS</li><li class="list-group-item">Elemento agregado desde JS</li><li class="list-group-item">Elemento agregado desde JS</li><li class="list-group-item">Elemento agregado desde JS</li><li class="list-group-item">Elemento agregado desde JS</li>`

    listaHabilidades.innerHTML += template



}

obtenerPokemon(urlPokemon)