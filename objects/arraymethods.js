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

//map to objects

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

  
// sort users by age
let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };

let arr1 = [ pete1, john1, mary1 ];

function sortByAge (arr) {
    arr.sort((a,b) => a.age - b.age )
}

sortByAge(arr1)

//shuffle an array

function shuffle(arr) {
    arr.sort((a,b) => Math.random() - 0.5);
}

// fisher-yates shuffle better

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

// get average age
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }


//create keyed object from array


let users2 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

function groupById(users) {
   return users.reduce((prev, user) => ({...prev, [user.id]: {id: user.id, name: user.name, age: user.age}}), {})
}

//filter unique array members

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

function unique(arr) {

    const uniqueArr = [];
    for (let i=0; i<arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}

console.log(unique(strings))