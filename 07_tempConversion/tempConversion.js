const convertToCelsius = function(tempDegree) {
  return Math.round((tempDegree-32) * 5/9 * 10) / 10;
};

const convertToFahrenheit = function(tempDegree) {
  return Math.round(((tempDegree * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
