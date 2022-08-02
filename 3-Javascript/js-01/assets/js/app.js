"use strict";
//javascript de forma estricta


/*tipos de datos*/


/*Tipos de Variables*/
let a; //bloque o local 
const b = 0; //constante
var c; //Global

const PI = 3.1416
/*
Scope - contexto
espacio en el que vive la variable
*/

if(true){
    var d = 15;
}

//var d = "hola";
d = "hola";

/*console.log(15);*/

//string
let cadena = "Hola mundo!";
let cadena2 = 'Hola mundo!';

//Number
let numero = 5;
let numero1 = 5.89;
let numero3 = -5.89;

//Boolean
let booleano = true;
let booleano2 = false;

//undefined - indefinido
let variable;
//console.log(variable);


//null
let vacio = null;
//console.log(vacio);




//NaN - Not a number
//no es un numero
//tratar de realizar alguna operación aritmética con algun dato que no es un número

/* Plantillas literales
   template strings
   literal strings
   interpolación
*/
/*console.log(`esta es una cadena ${5+4}`);

let nombre = 'Sarada';*/

//let presentación = ``;
/*console.log("Mi nombre es" + nombre);
console.log(`yo me llamo ${nombre}`);*/

/*Arreglos - matrices - arrays */

let arr = [1, "A", null, undefined, [true, false]];

//notación de corchetes
//console.log(arr[4][0]);


let arr2 = new Array("B", 2);
/*console.log(arr2);*/


/*objetos en javascript*/

//Clave / valor

const persona = { 
             nombre: 'Sarada', 
             edad: 18,
             hobbies: ["tocar guitarra",
                       "jugar resident evil" 
                    ],
                    auto:{
                         marca: "vw",
                         modelo: "Bochito",
                         year: "1998",
                    },
                    saludar: function (){
                        return "saludar"
            
                    }
                    
};

//notación de punto
console.log (`mi nombre es: ${persona.nombre}`);

console.log(`mi hobbie favorito es: ${persona.hobbies[1]}`);

console.log(`La marca de mi carro es: ${persona.auto.marca}`);

console.log(`la acción que realizo es: ${persona.saludar()}`);


