'use strict';
const urlGatos = 'https://api.thecatapi.com/v1/images/search';

/* Elementos DOM */
const imagenGatos = document.getElementById("img-gatito");
const btn = document.getElementById('btn-gatito');


/* Eventos */
btn.addEventListener("click", () => {

  console.log('Boton presionado');  // Comprobacion de sintaxis del AddEventListener

  obtenerGatoAleatorio();
} )

async function obtenerGatoAleatorio () {
  const respuesta = await fetch(urlGatos);
  const datos = await respuesta.json();
  console.log(datos[0].url);

  imagenGatos.src = datos[0].url;
}
