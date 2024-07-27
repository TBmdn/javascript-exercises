const sumAll = function(num1,num2) {
    let sum;
    // to return ERROR in case of not integer or negetive values is entered 
    if( !(Number.isInteger(num1)) || !(Number.isInteger(num2)) || num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    else {
        const firstOperend = Math.min(num1,num2);
        sum = firstOperend;
        let i = 1;
        while (firstOperend + i <= Math.max(num1,num2)) {
            sum += firstOperend + i;
            i++;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
