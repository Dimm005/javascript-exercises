const removeFromArray = function(array, ...moreArgs) {
    let itemIndex;
    for (const item of moreArgs) {
        itemIndex = array.indexOf(item);
        if (itemIndex == -1) {
            continue;
        };
        array.splice(itemIndex, 1);
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
