const reverseString = function(string) {
    const strArray = string.split('');
    const reversedArray = strArray.reverse();
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
