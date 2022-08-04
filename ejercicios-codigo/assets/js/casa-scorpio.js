/* Scorpio  */

function aleatorio(max) {
    return Math.floor(Math.random() * max);
  }

let numeroAdivinar = aleatorio(20);

let nIngresado =parseInt(prompt("Adivina el numero magico"))


while (nIngresado != numeroAdivinar) {
   
   if (nIngresado > numeroAdivinar) {
            alert("El número que ingresaste es mayor al número mágico");
            nIngresado =parseInt(prompt("Adivina el numero"))
        }
        else if (nIngresado < numeroAdivinar){
            alert("El número que ingresaste es menor al número mágico");
            nIngresado =parseInt(prompt("Adivina el numero"))
        }
        
    
        
}

alert("Felicidades, adivinaste el número mágico")