const fibonacci = function(n) {
    if (n < 1) {
        return "OOPS";
    };
    if (typeof(n) === "string") {
        n = parseInt(n);
    } else if (typeof(n) != "number") {
        return "OOPS";
    };
    let fibArray = [1, 1, 2];
    let i = 2;
    let sum = 0;
    while(fibArray.length <= n) {
        fibArray.push(fibArray[i - 1] + fibArray[i]);
        i++;
    };
    return fibArray[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
