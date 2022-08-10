`use sctrict`

const urlaleatorios = "https://dog.ceo/api/breeds/image/random"

const imagenperrito = document.getElementById("img-perrito")


const btn = document.getElementById("btn-perrito")
console.log(btn);

btn.addEventListener("click", () => {
    console.log("Boton presionado");

    obtenerperritoaleatorio(urlaleatorios)
})

async function obtenerperritoaleatorio(url){
    const respuesta = await fetch (url)
    const datos = await respuesta.json()
    console.log(datos.message);
    console.log(datos.status);

    imagenperrito.src = (datos.message)

}

//obtenerperritoaleatorio(urlaleatorios)