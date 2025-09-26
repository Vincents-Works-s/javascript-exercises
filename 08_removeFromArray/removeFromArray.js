const removeFromArray = function(arr, ...itemsToRemove) {
    return arr.filter(num => !itemsToRemove.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
