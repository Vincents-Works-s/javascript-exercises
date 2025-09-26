const convertToCelsius = function(degrees) {
  const celsius = (degrees - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(degrees) {
  const fahrenheit = degrees * (9 / 5) + 32
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
