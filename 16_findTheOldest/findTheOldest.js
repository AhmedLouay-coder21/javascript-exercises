const findTheOldest = function(people) {
    let age = []
    let max = 0
    let oldest = "";
    let big = [];
    for(let i = 0; i < people.length; i++)
    {
        age[i] = people[i].yearOfDeath - people[i].yearOfBirth
        if(age[i] > max)
        {
            max = age[i]
            oldest =  people[i]
        }
        if(typeof people[i].yearOfDeath == 'undefined')
        {
            big = people[i]
        }
    }
    console.log(big)
    if (big != 'undefined' && big.yearOfBirth < oldest.yearOfBirth)
    {
         return big
    }
    else
    {
        return oldest
    }
};

// Do not edit below this line
module.exports = findTheOldest;
