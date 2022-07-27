// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Strawberry', 'Watermelon', 'Blueberry'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Passion fruit', 'Banana', 'Orange'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));
