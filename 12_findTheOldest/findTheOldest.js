const findTheOldest = function(arr) {
    let oldest = arr.reduce((accumulator, currentValue) => {

       /** Set current year if yearOfDeath is not
        * declared.
        */ 
        if (!accumulator.yearOfDeath) {
            accumulator.yearOfDeath = new Date().getFullYear();
        }
        else if (!currentValue.yearOfDeath) {
            currentValue.yearOfDeath = new Date().getFullYear();
        }

        let age = currentValue.yearOfDeath - currentValue.yearOfBirth;
        let prevAge = accumulator.yearOfDeath - accumulator.yearOfBirth;

        if (age > prevAge) {
            accumulator = currentValue;
        }
        return accumulator;

    })
    console.log(oldest);
    return oldest
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,

    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]
  
findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
