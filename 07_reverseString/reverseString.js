const reverseString = function(string) {
    let reverse = "";
    let length = string.length - 1;
for(let i = 0; i <= length; i++)
{
    reverse += string[length - i];
}
return reverse;
};

// Do not edit below this line
module.exports = reverseString;
