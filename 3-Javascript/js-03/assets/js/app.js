/*Control de flujo*/
/*condicionales*/
/*if*/
let condicion = "5";

if(condicion === "A"){ //if------si
    /*codigo que se hace
    si se cumple la condicion A
    */
   console.log("Entro en la condición A");
}else if(condicion === "B"){
    /*codigo que se hace
    si se cumple la condicion B
    */
   console.log("Entro en la condicion B");
}else if(condicion === "C"){
    /*codigo que se hace
    si se cumple la condicion C
    */
   console.log("Entro en la condición C");
} else {
    /*codigo que se hace si no se cumple
    ninguna de las condiciones anteriores*/
    console.log("No entro en la condicion");
}

function dividir (a,b){
    if (b ===0){
        console.log("no se puede realizar la operación");

    }
    else{
        console.log(a / b);
    }
}
//dividir(10,2)



/*------switch-------*/

let nuevacondicion = "Adios";


switch(nuevacondicion){
    case "hola":
        console.log("Buenos días");
        console.log("Espero que te encuentres bien");
        break;
    case "Adios":
        console.log("Nos Vemos");
        break;
    
    case "saludo":
        console.log("Te mando un saludo!");
        break
    
    default:
        console.log("No entendí tu mensaje");
        break
}

switch(elegir){

    case "sumar":
        console.log("Vamos a sumar");
        break

    case "restar":
        console.log("Vamos a restar");
        break

    case "dividir":
        console.log("Vamos a dividir");
        break

    case "multiplicar":
        console.log("Vamos a multiplicar");
        break

    default:
        console.log("No entiendo");
}
if(elegir === "sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "restar"){

    console.log("Vamos a restar");

}else if(elegir == "dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}
