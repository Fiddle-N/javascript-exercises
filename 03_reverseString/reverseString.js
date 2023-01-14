const reverseString = function(string) {
    const strArray = [];

    for (const char of string) {
        strArray.push(char);
    }

    const reversedArray = strArray.reverse();

    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
