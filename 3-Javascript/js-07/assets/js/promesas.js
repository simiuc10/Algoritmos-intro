//variable que simula los datos pedidos
const saludo = "hola mundo"
const datos = [
    {
        nombre:"Sarada",
        apellido: "Uchiha"
    },
    {
        nombre:"Sarada",
        apellido: "Uchiha"
    },
    {
        nombre:"Sarada",
        apellido: "Uchiha"
    }
]
//funcion para simular una petición
function obtenerdatos(){

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (false){
                resolve(datos)
            } else {
                reject("nunca te quiso")
            }
           
        }, 2000)
    })


   
}

obtenerdatos().then((nada) => {
    console.log(nada);
}).catch((error) => {
    console.log("Existe un error en la peticion 1");
    console.log(error);
})

//Forma 2 - funciones asincronas - await async
async function funcionasincrona (){
    try {
        const datos = await obtenerdatos()
    console.log(datos);
    }catch(error){
        console.log(error);

    }
    
}funcionasincrona()