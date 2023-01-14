const roundDp = function (num, dp) {
  return Number(Math.round(num + 'e' + dp) + 'e-' + dp);
}

const convertToCelsius = function(fah) {
  return roundDp((fah - 32) * (5 / 9), 1);
};

const convertToFahrenheit = function(cel) {
  return roundDp(cel * (9 / 5) + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
