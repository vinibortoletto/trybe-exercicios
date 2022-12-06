const { calculateBMI } = require('./bmi');
const { questionInt, questionFloat } = require('readline-sync');

const main = () => {
  const weightInKilos = questionFloat('Qual seu peso em kilos?');
  const heightInCentimeters = questionInt('Qual sua altura em centímetros?');

  const bmi = calculateBMI(weightInKilos, heightInCentimeters);
  console.log(`BMI: ${bmi.toFixed(2)}`);

  if (bmi < 18.5) return console.log('Abaixo do peso (magreza)');
  if (bmi >= 18.5 && bmi <= 24.9) return console.log('Peso normal');
  if (bmi >= 25 && bmi <= 29.9) return console.log('Acima do peso (sobrepeso)');
  if (bmi >= 30 && bmi <= 34.9) return console.log('Obesidade grau I');
  if (bmi >= 35 && bmi <= 39.9) return console.log('Obesidade grau II');
  if (bmi >= 40) return console.log('Obesidade grau III e IV');
};

main();
