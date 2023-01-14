const removeFromArray = function(arr, ...elems) {
    for (const elem of elems) {
        const idx = arr.indexOf(elem);
        if (idx === -1) {
            continue
        }
        arr.splice(idx, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
