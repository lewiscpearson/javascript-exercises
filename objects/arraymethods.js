// javascript.info/array-methods Translate border-left-width to borderLeftWidth

function camelize (string) {
    return string
        .split("-")
        .map((word, index) => index == 0 ? word : word[0].toUpperCase()+ word.slice(1))
        .join("");
}


// Filter range


function filterRange(arr, a, b) {
    return arr.filter((num) => num>= a && num <= b)
}

//filter range in place

function filterRangeInPlace(arr,a,b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        console.log(val, i, a, b)
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
            console.log("item removed: ", val, i, a, b)
        }
    }
}