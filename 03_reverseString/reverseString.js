const reverseString = function(input) {
    let reversed = "";
    console.log("test function")
    for (let i = input.length-1; i>=0; i--){
        console.log(i + " " + input.length)
        reversed += input[i];

    }
    return reversed
};
// Do not edit below this line
module.exports = reverseString;
