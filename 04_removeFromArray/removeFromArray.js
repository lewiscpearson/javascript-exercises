const removeFromArray = function(input, toRemove) {
    const newArray = [];
    for (let i = 0; i < toRemove.length; i++){
        for (let i = 0; i < input.length; i++)  {
            if (input[i] !== toRemove[i]){
                newArray.push(input[i]);
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
