const getAge = function(person) {
    currentYear = (person.yearOfDeath) 
        ? person.yearOfDeath
        : (new Date()).getFullYear()
    
    return currentYear - person.yearOfBirth; 
}

const sortAgeDesc = function(p1, p2) {
    const age1 = getAge(p1);
    const age2 = getAge(p2);
    return (age1 > age2) ? -1 : 1;
}

const findTheOldest = function(people) {
    return [...people]
        .sort(sortAgeDesc)
        [0];
};

// Do not edit below this line
module.exports = findTheOldest;
