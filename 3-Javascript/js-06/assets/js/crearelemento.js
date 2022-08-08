//crear un elemento
const imagen = document.createElement("img");

//modificar los atributos html de un elemento
imagen.src = "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/25130103/joyas-Avengers-4.jpg"

imagen.alt = "scarlett johansson en la premier de avengers endgame";


//lo insertamos en un elemento padre
document.body.appendChild(imagen);
document.body.insertAdjacentElement("afterbegin",imagen);
document.body.insertAdjacentElement("afterend",imagen);
document.body.insertAdjacentElement("beforebegin",imagen);
document.body.insertAdjacentElement("beforeend",imagen);

//forma correcta de modificar o insertar un elemento
//se crea el elemento que contendra la imagen
//seleccionar el elemento padre
const padreImg = document.getElementById("padreImg");

//crear el elemento
const imagen2 = document.createElement("img");

//modificamos los atributos del elemento
imagen2.src = "https://elcomercio.pe/resizer/YlYsiQjB4xRYHrEr2AAiTQMu7Hc=/620x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/6QSLCZYC4RAUXCOQHUWB3YNKRI.jpg"

imagen2.alt = "elizabeth olsen en avengers premiere";

//insertar elemento
padreImg.appendChild(imagen2)

//utilizar forEach para pintar datos

const frutas = ["tronja", "manzana", "mandarina", "Limon", "granada", "melón"]

 const listafrutas = document.getElementById("frutas")

/*frutas.forEach((element) => {
    const li = document.createElement("li")

    li.textContent = element
    listafrutas.appendChild(li);
})*/

//forma 2
frutas.forEach((el) => {
    listafrutas.innerHTML += `<li>${el}</li>`;
});