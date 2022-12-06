const calculateBMI = (weight, height) => {
  console.log(`Weight: ${weight}; Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;
  const bmi = weight / heightSquared;

  return bmi;
};

module.exports = { calculateBMI };
