const sumAll = function(n1,n2) {
    let sum = 0;
    let i = 0;
    if(n1 < 0 || n2 < 0 || !Number.isInteger(n1) || !Number.isInteger(n2))
    {
        return "ERROR";
    }

    if ( n1 > n2)
    {
        i = n2;
        n2 = n1;
    }
    else
    {
        i = n1;
    }
    for(i; i <= n2; i++)
    {
        sum += i;
    }
return sum
};

// Do not edit below this line
module.exports = sumAll;
