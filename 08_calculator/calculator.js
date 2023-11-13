const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce(
    (sum, number) => sum += number, 0,
  );
};

const multiply = function(array) {
  return array.reduce(
    (product, number) => product *= number, 1,
  );
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num1) {
	let fact = 1;
  let i = 1;
  while(i <= num1) {
    fact *= i;
    i++;
  };
  return fact;
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
