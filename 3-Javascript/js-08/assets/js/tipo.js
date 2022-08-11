//Tipo predefinido//
let tiempo = new Date();
console.log(tiempo);
console.log(Math);

let objeto_literal = {
    nombre: "Sarada",
    Edad: 18
}

let objeto_constructor = new Object();
objeto_constructor.nombre = "Itachi";
objeto_constructor.Edad = 23;
console.log(objeto_literal);
console.log(objeto_constructor);

objeto_literal["nombre"];
let llave = "nombre";
console.log("esto es con llave" + objeto_literal [llave]);



// tipo cadena
let cadena = "Esto es una cadena";
let cadena_objeto = new String("esto es otra cadena objeto");
console.log(cadena);
console.log(cadena_objeto);

//tipo númerico//

let numero = 13;
let numero_objeto = new Number(13.13);
console.log(numero);
console.log(numero_objeto);


//Tipo compuesto o único//
let lista = ["2", "3", "5", "7"];
let lista_objeto = new Array ("1", "4", "6", "8","9");
console.log(lista);
console.log(lista_objeto);