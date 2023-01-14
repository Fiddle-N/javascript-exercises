const isDivisible = function(num, div) {
    return num % div === 0;
};

const leapYears = function(year) {
    return (isDivisible(year, 400) || (isDivisible(year, 4) && !isDivisible(year, 100)));

};

// Do not edit below this line
module.exports = leapYears;
