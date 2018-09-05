/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

const placement = {
  0: 6,
  1: 4,
  2: 2,
  3: 1,
};

// read the index of the string
function binToDec(binary) {
  // add the necessary zeros to the string depending on the length of the binary string
  if (binary.length === 0) return undefined;

  // let binaryStr;
  let decimal = 0;
  const binaryStr = ('0'.repeat(4 - binary.length) + binary).split('');

  // console.log(binaryStr);

  // loop through the array of 0/1
  for (let i = 0; i < binaryStr.length; i += 1) {
    if (binaryStr[i] === '1') {
      // console.log(placement[i]);
      decimal += placement[i];
    }
  }

  console.log(decimal);
  return decimal;
}

// binToDec('0');
// binToDec('1');
// binToDec('11');
// binToDec('100');
// binToDec('101');

module.exports = binToDec;
