const palindromes = function (str) {
    const arr = str.split('');
    const filteredArr = [];
    for (const char of arr) {
        const lowerChar = char.toLowerCase();
        const lowerCharCode = lowerChar.charCodeAt();
        if (lowerCharCode >= 97 && lowerCharCode <= 122) {
            filteredArr.push(lowerChar);
        }
    }
    const reversedFilteredArr = [...filteredArr].reverse();
    return filteredArr.toString() === reversedFilteredArr.toString();
}

// Do not edit below this line
module.exports = palindromes;
