/*Casa de Cancer*/
let grado = parseInt(prompt("Introduce un valor en grados Celsius: "));
function convKelvin(a) {
    let resultado = (a + 273.15);
    return resultado;
}
alert(convKelvin(grado));

let grado2 = parseInt(prompt("Introduce un valor en grados Celsius: "));
function convFarenheit(a) {
    let resultado = (grado2 * 1.8) + 32;
    return resultado;
}
alert(convFarenheit(grado2));