const handleSuccess = (value1, value2) => {
  // Turn string to number
  result = Number(value1) + Number(value2);

  // Display result
  document.getElementById('result').innerHTML = `Resultado: ${result}`;

  // Clear inputs
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
};

const handleError = (value1, value2) => {
  if (!value1 || !value2) throw new Error('Campos não poder ser vazios.');
  if (isNaN(value1) || isNaN(value2))
    throw new Error('Campos devem conter apenas números.');
};

const sum = () => {
  // Get input values
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  let result = 0;

  try {
    handleError(value1, value2);
    handleSuccess(value1, value2);
  } catch (error) {
    // Display error
    document.getElementById('result').innerHTML = error.message;
  }
};

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
