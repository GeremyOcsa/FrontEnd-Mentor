let a=5, b=6;
let z = a + b;
console.log('Resultado de la suma: ' + z);

z = a - b;
console.log('Resultado de la resta: ' + z);

z = a * b;
console.log('Resultado de la multiplicacion: ' + z);

z = a / b;
console.log('Resultado de la division: ' + z);

z = a % b; //residuo
console.log('Residuo de la division: ' + z);

z = a ** b;
console.log('Resultado de la potencia: ' + z);

/*Operadores de Incremento y Decremento*/
//Incremento
//Pre-Incremento (el ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);
//Post-Incremento (el ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-Decremento (el -- antes de la variable)
z = --a;
console.log(a);
console.log(z);
//Post-Decremento (el -- despues de la variable)
z = b--;
console.log(b);
console.log(z);
