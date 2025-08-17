const palindromes = function (string) 
{
    let cleaned = string.replace(/[^a-zA-Z0-9]/g, "");
    cleaned = cleaned.toUpperCase();
    const reverse = [...cleaned].reverse().join('');
    return reverse == cleaned
};

// Do not edit below this line
module.exports = palindromes;
