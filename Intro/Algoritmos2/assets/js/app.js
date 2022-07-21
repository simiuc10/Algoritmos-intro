
function saludar () {
    console.log("Hola mundo");
}
//saludar

//Arreglos (Array)

//let num = [];
//console.log(num);

//let arr1 = new Array();
//console.log(arr1);

//usar un arreglo

//const arr = [1,2,3,4,5];
//console.log(arr);

//notacion de corchetes []

//console.log(arr[3]);

//arr[5] = 25;
//arr[6] = 30;
//console.log(arr);

//propiedades de los arreglos
//descripción de nuestro arreglo

//console.log(arr.length);

//metodos 
//acciones que puede realizar un objeto

const frutas = ["manzana", "mango"];
console.log(frutas);

//push
//agrega un valor al final del arreglo
let fruta = "toronja", melon;

frutas.push ("naranja");
console.log(frutas);
frutas.push(fruta);

console.log(frutas);
//pop() 
//quita un elemento al final del arreglo

let elementoborrado = frutas.pop();
console.log(frutas);
console.log(elementoborrado);

//unshift ()
//agrega un elemento al inicio del arreglo

let devolver = frutas.unshift ("uvas", melon);
console.log(frutas);
console.log(devolver);

//shift ()
//elimina el primer elemento del arreglo


