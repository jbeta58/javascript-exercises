const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a -b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, item) => sum + item, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((mult, item) => mult * item, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let mult = 1
  for (let i = 1; i <= number; i++) {
    mult *= i;
  }
  return mult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
