const removeFromArray = function(array, ...remove) {
    let newArray = [];
    let numberOfElements = array.length;
    for(let i = 0; i < numberOfElements; i++)
    {
        if (!remove.includes(array[i]))
        {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
