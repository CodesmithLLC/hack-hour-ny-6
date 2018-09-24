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

function binToDec(binary) {
  const binaryArr = binary.split('');
  //console.log(binaryArr);
  let power = 0;
  let baseBinary = 0;
  //console.log(baseBinary);
  let currLength = binaryArr.length - 1;

  for (let i=0; i < binaryArr.length; i++){
      if (binaryArr[i] === '1'){
        baseBinary =  baseBinary + Math.pow(2, currLength)
      }
      currLength--
  }
  //console.log(baseBinary);
  return baseBinary;
}

binToDec('0')
binToDec('11')
binToDec('100')
binToDec('101')
binToDec('0101')
console.log(binToDec('1011'))

module.exports = binToDec;
