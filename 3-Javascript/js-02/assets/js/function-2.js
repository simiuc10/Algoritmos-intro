function mifuncion(a,b){
    return (a + b);
}
let resultado = mifuncion(6, 4);
console.log("El resultado de la suma es:" + resultado);

/*funcion de expresión o anonima*/

let suma = function(a,b){return(a+b)};

let resultado2 = suma (2,3);

console.log("La suma es:" + resultado2);


/*Resta*/

let resta = function(a,b){return(a-b)};

let resultado3 = resta (15,5);

console.log("La resta es:" + resultado3);

/*Multiplicación*/

let multiplicación = function(a,b){return(a*b)};

let resultado4 = multiplicación (10,5);

console.log("La multiplicación es:" + resultado4);

/*División*/

let división = function(a,b){return(a/b)};

let resultado5 = división (5,5);

console.log("La división es:" + resultado5);

/*-------self invoking------*/

(function (a,b){
    console.log("el resultado de self invoking es:" + (a +b));
}
)(3,4);

