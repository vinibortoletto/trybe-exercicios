const number = 10;
let factorial = 1;

for (let i = number; i > 0; i -= 1) {
  factorial *= i;
}

console.log(factorial);
