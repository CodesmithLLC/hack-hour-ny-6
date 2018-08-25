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
  let binValue = 0;
  let position = binary.length - 1;
  let num = 0
  while( position >= 0){
    if( binary[position] === '1') num += Math.pow(2, binValue);
    binValue++;
    position--;
  }
  return num;
}

// TEST
binToDec('0101');
binToDec('11');
binToDec('100'); 
binToDec('101');
binToDec('0101');
binToDec('01010100101');

module.exports = binToDec;
