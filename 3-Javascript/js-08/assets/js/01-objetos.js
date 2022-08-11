let x = 10;
console.log(x.length);

let crush = {
    nombre: "Hinata",
    Apellido: "Hyiuga",
    Correo_Electronico: "hinata.uc@gmail.com",
    Edad: 23
    
}

console.log(crush);
console.log(crush.nombre);
console.log(crush.Apellido);
console.log(crush.Correo_Electronico);
console.log(crush.Edad);

let crush2 = new Object();
crush2.nombre = "Sarada"
crush2.edad = 18;
crush2.Correo_Electronico = "sarada.uc@gmail.com"

console.log(crush2.nombre);
console.log(crush2.edad);
console.log(crush2.Correo_Electronico);


let novia = {
    nombre: "tsunade",
    apellido: "senju",
    edad: 40,
    correo: "tsunade.uc@gmail.com",
    /*nombrecompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }*/

    idioma: "es",
    get leng(){
        return this.idioma.toUpperCase();  
    },
    set leng (Lang){
        this.idioma = Lang.toUpperCase();
    }
}
console.log(novia.Lang);
novia.Lang = "ES";
console.log(novia.leng);
console.log(novia.idioma);


















novia.tel = "7731236855"

console.log(novia);
console.log(novia.nombre);
console.log(novia.nombrecompleto());


// for in

for(varPropiedad in novia){
    console.log(novia[varPropiedad]); 
}

let noviaString = JSON.stringify(novia);
console.log(noviaString);