  /** 97 is "a" , 98 is "b"  .... and so on
   * on the Unicode table. "z" is 122
   * For capital letter "A" is 65 "Z" is 90.
   */
const upperCase = [
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90,
];
const lowerCase = [
  97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
  113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
];
const caesar = function (caesarStr, shiftValue) {


  /**
   * Step 1: Create a constant array containing the unicode value of the letters
   * Step 2: Check the character if its upper or lowercase during the loop
   */
  let encryptedString = '';

  for (let index in caesarStr) {
    let value = caesarStr.charCodeAt(index);
    let encryptedValue = value + shiftValue;

    /** make sure it goes back to "a" after "z" */
    if (encryptedValue > 122) {
      encryptedValue -= 26;
    } else if (encryptedValue < 97) {
      encryptedValue += 26;
    }

    encryptedString += String.fromCharCode(encryptedValue);
  }
  return encryptedString;
};

console.log(caesar(' ', -2));
// Do not edit below this line
module.exports = caesar;
