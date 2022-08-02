function miSuma(a, b){
    let resultado = (a + b);
    console.log("la suma es:" + resultado);
}

miSuma(2,3);

function miSuma(a, b){
    console.log("la suma es:" + (a + b));
}
miSuma(4 , 6);

function mimultiplicación(a,b){
    return (a*b);

}
console.log("el producto es:" + mimultiplicación(4,5));

let res;

function miResta(a,b){
    return (a-b);
}

res = miResta(10,4);

console.log("la resta es:" + res);

function dataNombre(nombres, apellido1, apellido2){
    nombre = nombres + "" + apellido1+ ""+ apellido2
    return(nombre);
}

let Nombres = "Aaron Caleb";
let apellido1 = "Ulloa";
let apellido2 = "Gómez";
console.log("Mi nombre completo es:" + dataNombre(Nombres, apellido1, apellido2));

/*División*/
function miDivisión(a,b){
    return (a/b);
}

console.log(miDivisión(5,5));