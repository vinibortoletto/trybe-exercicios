const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;

const temperatureInFahrenheit = (temperature) => {
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
};

const greet = (temperature) => {
  console.log(
    `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
  );
};

const handleError = (errorReason) => {
  console.log(`Error getting temperature: ${errorReason}`);
};

const sendMarsTemperature = (handleTemp, handleError) => {
  setTimeout(() => {
    const temperature = getMarsTemperature();
    console.log(`Mars temperature is: ${temperature} degree Celsius`);
    console.log('-------------------');

    const successRate = Math.random() <= 0.6;

    if (successRate) handleTemp(temperature);
    else handleError('Robot is busy');
  }, messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);
