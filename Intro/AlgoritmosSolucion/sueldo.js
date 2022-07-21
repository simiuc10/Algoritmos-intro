function Calculadoradesueldo (sueldoIngresado, diastrabajados){
    let nombre = prompt("Escribe tu nombre")
    console.log(nombre);
    const sueldo = sueldoIngresado;
    const diassemana = diastrabajados;
    const semanames = 4;

    console.log("sueldo semanal:" + (sueldo * diassemana));
    console.log("sueldo mensual:" + sueldo * diassemana * semanames);

}

Calculadoradesueldo (200, 2)
Calculadoradesueldo (300, 6)
Calculadoradesueldo (200, 1)