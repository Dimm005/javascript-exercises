const findTheOldest = function(people) {
    const time = new Date;
    people.forEach(person => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = time.getFullYear();
        };
        person.age = person.yearOfDeath - person.yearOfBirth
        
    });
    people.sort((a, b) => {
        let ageA = a.age;
        let ageB = b.age;
        if (ageA > ageB) {
            return -1;
        };
        if (ageA > ageB) {
            return 1;
        };
        if (ageA == ageB) {
            return 0;
        };
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
