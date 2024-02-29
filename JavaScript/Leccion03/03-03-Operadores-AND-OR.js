//Ejemplo AND (&&), regresa true solo si ambos operandos son true
let a=5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax){
    console.log('Dentro del rango');
}
else{
    console.log('Fuera del rango');
}

//Ejemplo OR (||), regresa true si cualquier operando es true
let = vacaciones = false, diaDescanso = false;
if (vacaciones || diaDescanso){
    console.log('Puede asistir al juego del hijo');
}
else{
    console.log('El padre esta ocupado');
}

//Operador Ternario
let resultado = (2>3) ? "verdadero" : "falso";
console.log(resultado);

let numero = 8;
resultado = (numero % 2 == 0) ? "Es par" : "Es impar";
console.log(resultado)

let rpta = 10;
resultado = (5+5 == rpta) ? "Correcto" : "Incorrecto";
console.log(resultado) 