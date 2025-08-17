const fibonacci = function(n) {
    let sum = 1
    let sum1 = 0
    let total = 0
    if (n < 0) return "OOPS"
    for(let i = 0; i < n; i++)
    {
        total = sum + sum1 
        sum = sum1
        sum1 = total
    }
    return total
};

// Do not edit below this line
module.exports = fibonacci;
