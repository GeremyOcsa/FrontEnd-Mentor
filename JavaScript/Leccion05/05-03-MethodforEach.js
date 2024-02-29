let fruits = ['Apple', 'Pinneaple', 'Watermelon', 'Strawberry'];

// forEach() =  Ejecuta la funcion indicada una vez por cada elemento del array
// foreach no duelve un nuevo array

fruits.forEach(function(element, index, array){
    console.log(`Elemento ${element} en el indice ${index}`)
})

fruits.forEach((element) => console.log(element));