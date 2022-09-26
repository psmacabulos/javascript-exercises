const ftoc = function (far) {
  let celcius = ((far - 32) * 5) / 9;
  return parseFloat(celcius.toFixed(1));
};

// parseFloat is used because .toFixed output is a string

const ctof = function (cel) {
  let far = (cel * 9) / 5 + 32;
  return parseFloat(far.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
