const repeatString = function(string,num) {
    let repetedString = string;
    if(num == 0){
        return '';
    }
    else if (num < 0) {
        return 'ERROR';
    }
    else{
        for(let i = 1; i < num; i++){
            repetedString = repetedString.concat(string);
        }
        return repetedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
