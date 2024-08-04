const removeFromArray = function(input, ...toRemove) {
    const newArray = [];
    input.forEach((item) => {
        if (!toRemove.includes(item)) {
          newArray.push(item);
        }
      });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
