/* URL o consumir */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/chikorita"




/* Elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon")
console.log(imgPokemon);

const idPokemon = document.getElementById("id-pokemon")
console.log(imgpokemon);

const nombrePokemon = document.getElementById("nombre-Pokemon")
console.log(nombrePokemon);
/* Funciones */
async function obtenerPokemon(url){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
 
    const pokemon = {
        nombre: datos.forms[0].name,
        habilidad: datos.abilities,
        numero: datos.id,
        tipo: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default,
    }

    imgPokemon.src = pokemon.imagen;
    idPokemon.textContent = `ID: ${pokemon.id}` ; //cONCATENAMOS EL VALOR JALADO CON EL ID:
    nombrePokemon.textContent = pokemon.nombre;
    

//console.log(pokemon.imagen); 
}obtenerPokemon(urlPokemon)

