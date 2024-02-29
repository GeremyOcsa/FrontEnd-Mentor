//Tipo de dato String
let nombre = "Hola Mundo desde JavaScript";
console.log(typeof nombre);

//Tipo de dato Numerico
let numero = 1437
console.log(typeof numero)

//Tipo de dato Object
let objeto = {
    nombre : "Geremy",
    apellido : "Ocsa",
    telefono: "985282618"
}
console.log(typeof objeto);

//Tipo de dato Boolean(true,false)
let bandera = true
console.log(typeof bandera);

//Tipo de dato Function
function MiFuncion(){}
console.log(typeof MiFuncion);

//Tipo de dato Symbol
let simbolo = Symbol("mi simbolo");
console.log(typeof simbolo); 

//Tipo clase es una function
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo Undefined
let x;
console.log(x);

x = undefined
console.log(typeof x);

//Tipo Null
let y = null;
console.log(y);

//Arreglos
let autos = ['BMW','Ferrari','Twingo']
console.log(typeof autos)

//Cadena Vacia
let z = '';
console.log(z);