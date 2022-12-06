const { calculateBMI } = require('./bmi');
const { questionInt, questionFloat } = require('readline-sync');

const weightInKilos = questionFloat('What is your weight in kilos?');
const heightInCentimeters = questionInt('What is your height in centimeters?');

const main = () => {
  80;
  const bmi = calculateBMI(weightInKilos, heightInCentimeters);
  console.log(`BMI: ${bmi.toFixed(2)}`);
};

main();
