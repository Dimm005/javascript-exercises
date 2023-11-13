const reverseString = function(string) {
    let result_string = "";
    let temp_array = [];
    for (const letter of string) {
        temp_array.push(letter);
    };
    temp_array = temp_array.reverse();
    result_string = temp_array.join('');
    return result_string;
};
    

// Do not edit below this line
module.exports = reverseString;
