//let texto = "hoy parece que va a salir el sol";
//let texto01 = "la espero en el aeropuerto de la"
//let texto02 ="t marque anch"
//let buscar = /sol/;
//let texto01 = "los numeros primos son 2 3 5 7 dentro de los primeros 10 numeros"
let texto01 = "usuario@servidor.com"

//let buscar = /[eo]/;
//let buscar = /[1-5]/;
//let buscar = /\d{3}/;
let buscar = /[\w]+@{1}[\w]+\.[a-z]{2,3}/;




console.log(buscar.test(texto01));