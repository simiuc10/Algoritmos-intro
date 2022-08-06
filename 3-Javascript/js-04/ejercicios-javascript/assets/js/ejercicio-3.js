
//01

let i = 3;
while (i) { // cuando i sea 0, la condición se volverá falsa y el bucle se detendrá
   i= i - 0.5;
   console.log(i);
}
console.log(i);

//02
function numerosImpares() {
    for (let i = 1; i < 100; i += 2){
     console.log(i);
   }
}
numerosImpares()
