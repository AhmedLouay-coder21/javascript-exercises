const add = function(n1 , n2) {
	return n1 + n2
};

const subtract = function(n1 , n2) {
	return n1 - n2
};

const sum = function(array) {
  let sum = 0;
  const initialValue = 0;
  sum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
return sum;
};

const multiply = function(array) {
  let sum = 1;
  const initialValue = 1;
  sum = array.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  initialValue,
);
  return sum;
};

const power = function(n1 , n2) {
	return Math.pow(n1,n2)
};

const factorial = function(n) {
  // Make an array [5, 4, 3, 2, 1]
  const arr = Array.from({ length: n }, (_, i) => n - i);

  // Use reduce to multiply them (factorial as an example)
  return arr.reduce((acc, curr) => acc * curr, 1);
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
