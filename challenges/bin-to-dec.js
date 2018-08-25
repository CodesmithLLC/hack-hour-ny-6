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

function binToDec(bin, place = 1, sum = 0) {
  return bin.length === 0 ? sum : binToDec(bin.slice(0, bin.length - 1), place * 2, sum += bin.slice(-1) * place)
}

module.exports = binToDec;
