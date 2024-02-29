let fruits = ['Apple', 'Pinneaple', 'Watermelon', 'Strawberry'];

/* Eliminando un elemento de acuerdo a su posicion */
fruits.splice(2,1);
console.log(fruits);

/* 🚩Con .splice() tambien podemos extraer elementos de un array, al hacer esto estariamos modificando
el array original 🚩*/
console.log(fruits);

let position = 0, numElements = 2

let deletedElements = fruits.splice(position, numElements);
console.log(fruits);
console.log(deletedElements);