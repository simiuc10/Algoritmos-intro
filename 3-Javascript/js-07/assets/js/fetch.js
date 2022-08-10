const url = "https://dog.ceo/api/breeds/image/random"


fetch(url).then((respuesta) => {
    console.log(respuesta);
})

//obtener la informacion de la peticion
fetch(url)
.then((respuesta) => respuesta.json())
.then((datos) =>{
    console.log(datos);
}).catch((error) => {
    console.log(error);
})

//forma 2
async function obtenerperritoaleatorio(){
    
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json()
        console.log(datos);
    }catch(error){
        console.log(error);
    }
    }
    
   

obtenerperritoaleatorio