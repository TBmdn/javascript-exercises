const reverseString = function(enteredString) {
    /* the string which will reverse the string on it */
    let reString = '';
    if(enteredString.length == 0){
        return reString;
    }
    else{
        for(let i = (enteredString.length - 1); i >= 0; i--){
            if(reString == ''){
                reString = enteredString[i];
            }
            else{
                reString += enteredString[i];
            }
        }
        return reString;
    }
};

// Do not edit below this line
module.exports = reverseString;
