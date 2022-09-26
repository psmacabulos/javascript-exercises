const sumAll = function (num1, num2) {
  let sum = 0;
  for (arg of arguments) {
    if (arg < 0 || typeof arg != 'number') {
      return 'ERROR';
    }
  }

  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  while (num1 != num2) {
    sum += num2;
    num2--;
  }
  return sum + num1;
};

console.log(sumAll(4, 1));

// Do not edit below this line
module.exports = sumAll;
