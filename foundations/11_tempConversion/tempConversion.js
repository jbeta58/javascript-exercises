const convertToCelsius = function(fNumber) {
  return Math.round(((fNumber - 32) * 5 / 9) * 10 )/ 10;
};

const convertToFahrenheit = function(cNumber) {
  return Math.round(((cNumber * 9 / 5) + 32) * 10 )/ 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
