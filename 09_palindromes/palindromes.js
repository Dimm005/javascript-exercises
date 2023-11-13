const palindromes = function (string) {
    string = string.toLowerCase();
    let reg = /[a-z0-9]/g;
    let array = string.match(reg);
    string = array.join("");
    let string2 = "";
    for(let i = array.length - 1; i >= 0; i--) {
        string2 += array[i];
    };
    return string === string2;
};

// Do not edit below this line
module.exports = palindromes;
