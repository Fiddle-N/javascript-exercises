const sumAll = function(num1, num2) {
    for (const num of [num1, num2]) {
        if (typeof(num) != 'number' || num < 0 ) {
            return 'ERROR';
        }
    }

    let start;
    let end;

    if (num1 <= num2) {
        start = num1;
        end = num2;
    }
    else {
        start = num2;
        end = num1;
    }

    let sumVal = 0;
    for (i = start; i <= end; i++) {
        sumVal += i;
    }
    return sumVal;
};

// Do not edit below this line
module.exports = sumAll;
