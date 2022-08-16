/*if(palabra === palabraInvertida){
    return "es un palindromo"
}else{
    return "no es un palindromo"
}*/

const palindromo = (palabra) => {
    let palabraInvertida = palabra.split("").reverse().join("");
    
    return palabra === palabraInvertida ? "Es un palindromo" : "no es un palindromo";
   }

//(condición) ? verdadera : falsa
//(condicion) ? if : else
/*console.log(palindromo("generation"));*/

module.exports = palindromo;