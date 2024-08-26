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