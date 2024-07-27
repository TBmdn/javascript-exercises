const removeFromArray = function(array,...wantToDlt) {
    for (const i in wantToDlt) {
        // counter for looping throug the array with while loop
        let j = 0;
        while (j != array.length) {
            if (array[j] === wantToDlt[i]) {
                array.splice(j,1);
            }
            else {
                j++;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
