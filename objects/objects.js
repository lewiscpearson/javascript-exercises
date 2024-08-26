//1. empty object user

let user = new Object();
let user2 = {
    name: "John",
    surname: "Smith",
};




user2.name = "John";
user2.surname = "Smith";
user2.name="Pete";
delete user2.name;

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sum1 = 0;

for (let prop in salaries) {
    num = salaries[prop];
    sum1 = sum1 + num;
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  
function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] == "number") {
            obj[prop] = obj[prop]*2
        }
    }
}

multiplyNumeric(menu)