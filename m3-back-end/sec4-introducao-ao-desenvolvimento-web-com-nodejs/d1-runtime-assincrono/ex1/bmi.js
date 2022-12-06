const weightInKilos = 85;
const heightInCentimeters = 180;

const calculateBMI = (weight, height) => {
  console.log(`Weight: ${weight}; Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;
  const bmi = weight / heightSquared;

  return bmi;
};

const main = () => {
  const bmi = calculateBMI(weightInKilos, heightInCentimeters);
  console.log(`BMI: ${bmi.toFixed(2)}`);
};

main();
