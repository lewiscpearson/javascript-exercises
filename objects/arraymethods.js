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
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
// sort in decreasing order

let arr = [5, 2, 1, -10, 8];

function sortDecreasing(arr) {
    arr.sort((a,b) => a -b); 
}

//map to names

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);
