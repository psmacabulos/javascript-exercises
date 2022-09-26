const leapYears = (year) => {
//     if (year % 100 == 0 && year % 400 == 0) {
//         return true;
//     } else if (year % 100 == 0) {
//         return false;
//     } else if (year % 4 == 0) {
//         return true;
//     } else {
//         return false;
//   }
    let regex = /(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)$/
    return regex.test(year);
};

// Do not edit below this line
module.exports = leapYears;
