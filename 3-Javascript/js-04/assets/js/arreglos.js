let arr = [1,2,3,4];
console.log(arr);

/*Propiedades - describen
---metodos - acciones que puede realizar*/
console.log(arr[2]);
arr [4] = 190;
arr [4] = "Hola"
console.log(arr);


const arreglo = [];

//push()
//arega elementos al final
arreglo.push(2);
arreglo.push(true);

let num = 500;

arreglo.push(num);

console.log(arreglo);

//unshift()
// agrega elementos al inicio del arreglo

arreglo.unshift("A");
arreglo.unshift("B");

console.log(arreglo);

console.log(typeof(arreglo[4]));

//para quitar elementos
//pop()

let dato1 = arreglo.pop();

console.log(dato1);

console.log(arreglo);

//shift()
//quita un elemento del inicio del arreglo

let dato2 = arreglo.shift();

console.log(dato2);
console.log(arreglo);

//splice()
//quita una parte de cualquier posicion de nuestro arreglo
//permite insertar un elemento en una posicion en especifico
arreglo.splice(1,1,"spiderman");

console.log(arreglo);

let dato3 = arreglo.slice(0,2);

console.log(dato3);

console.log(arreglo);