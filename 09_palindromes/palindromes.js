const palindromes = (testString) => {
    let strArray = testString.toLowerCase().split('');
    let cleanArray = strArray.filter((value) => {
        if (value == ',' || value == '!' || value == ' ' || value == '.') {}
        else { return value};
    })

    // Since reverse method of array changes the original array
    // it is best to store it in a string before comparing otherwise will always
    // result to true.
    
    testString = cleanArray.join("");
    revString = cleanArray.reverse().join("");

    console.log(testString);
    console.log(revString);
    return testString === revString;


}

console.log(palindromes("Patrick , from, Macabulos."));
// Do not edit below this line
module.exports = palindromes;
