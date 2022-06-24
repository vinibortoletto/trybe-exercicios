/* 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato: 
      A soma de 35 a 105 é: X.
*/

let sum = 0;

for (let i = 35; i < 105; i += 1) {
  sum += i;
}

// console.log("A soma de 35 a 105 é:", sum);

/* 
   2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
      Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.
*/

let intervalCounter = 0;
let oddCounter = 0;

for (let i = 15; i <= 155; i += 1) {
  if (i % 3 === 0) {
    intervalCounter += 1;
  }

  if (i % 2 !== 0) {
    oddCounter += 1;
  }
}

// console.log("Quantidade de números divisíveis por 3:", intervalCounter);
// console.log("Quantidade de números ímpares:", oddCounter);

if (oddCounter <= 50) {
  // console.log("Mais de 50 números ímpares");
} else {
  // console.log("Menos de 50 números ímpares");
}

/* 
  3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
     “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
*/

// const choices = ["pedra", "papel", "tesoura"];
// const player1 = choices[Math.ceil(Math.random() * 3) - 1];
// const player2 = choices[Math.ceil(Math.random() * 3) - 1];

// console.log("Jogador 1:", player1, "---", "Jogador 2:", player2);

// if (player1 === player2) {
//   console.log("Empate!");
// } else if (player1 === "pedra" && player2 === "papel") {
//   console.log("Jogador 2 venceu!");
// } else if (player1 === "papel" && player2 === "tesoura") {
//   console.log("Jogador 2 venceu!");
// } else if (player1 === "tesoura" && player2 === "pedra") {
//   console.log("Jogador 2 venceu!");
// } else if (player2 === "pedra" && player1 === "papel") {
//   console.log("Jogador 1 venceu!");
// } else if (player2 === "papel" && player1 === "tesoura") {
//   console.log("Jogador 1 venceu!");
// } else if (player2 === "tesoura" && player1 === "pedra") {
//   console.log("Jogador 1 venceu!");
// }

/* 
    4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
       Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
       Bônus: Crie a condição utilizando operador ternário.
*/

// const legalAge = 18;
// const personAge = Math.ceil(Math.random() * 100);

// personAge <= legalAge
//   ? console.log(personAge, "A pessoa é maior de idade")
//   : console.log(personAge, "A pessoa é menor de idade");

/* 
    5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
    “Pessoa” é a mais nova. (edited) 
*/

const ademar = Math.ceil(Math.random() * 100);
const adriana = Math.ceil(Math.random() * 100);
const julia = Math.ceil(Math.random() * 100);

if (ademar < adriana && ademar < julia) {
  console.log("Ademar é o mais novo:", ademar);
} else if (adriana < julia && adriana < ademar) {
  console.log("Adriana é a mais nova:", adriana);
} else if (julia < ademar && julia < adriana) {
  console.log("Julia é a mais nova:", julia);
}
