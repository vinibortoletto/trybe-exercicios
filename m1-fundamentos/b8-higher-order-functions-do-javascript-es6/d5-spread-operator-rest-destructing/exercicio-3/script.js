const greetings = ['Olá', (greeting) => console.log(greeting)];

// greetings[1](greetings[0]); // Olá
const [greeting] = greetings;
// console.log(greeting);

// ------------------------------------------------------|

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
[comida, animal, bebida] = [bebida, comida, animal];

// ------------------------------------------------------|

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[, , , ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];
