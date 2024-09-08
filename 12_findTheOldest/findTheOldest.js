const getAge = function(birth, death){
    if (!death) {
        death = new Date().getFullYear() 
    }
    return death-birth;
}


const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return currentAge > oldestAge ? currentPerson : oldest;
})
};

// Do not edit below this line
module.exports = findTheOldest;
 