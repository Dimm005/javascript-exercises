const repeatString = function(string, num) {
    if (num === 0 || string === "") {
        return "";
    };

    if (num < 0) {
        return "ERROR";
    };


    let i = num;
    let result_string = string;

    while (i > 1) {
        result_string += string;
        i--;
    };
    return result_string;
    }


// Do not edit below this line
module.exports = repeatString;
