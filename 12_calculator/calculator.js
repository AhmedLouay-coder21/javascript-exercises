const add = function(n1 , n2) {
	return n1 + n2
};

const subtract = function(n1 , n2) {
	return n1 - n2
};

const sum = function(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++)
  {
    sum += array[i];
  }
	return sum;
};

const multiply = function(array) {
  let sum = 1
  for ( let i = 0; i < array.length; i++)
  {
    sum *= array[i];
  }
  return sum
};

const power = function(n1 , n2) {
	return Math.pow(n1,n2)
};

const factorial = function(n) {
  let sum = 0
  let i = n
  let j = n - 1
  if ( n == 0 || n == 1)
  {
    return 1
  }
while (j > 0)
{
  sum = (n * (i - 1))
  n = sum
  i = i - 1
  j = j - 1
  console.log(sum)
}
return sum
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
