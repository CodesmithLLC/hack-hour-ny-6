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


function binToDec(bin, place = 1, num = 0) {
  return bin.length === 0 ? num : binToDec(bin.slice(0, bin.length - 1), place * 2, num += bin.slice(-1) * place)
}

function decToBin(dec, bin = '') {
  if (!dec) return bin;
  return decToBin(Math.floor(dec / 2), dec % 2 ? '1' + bin : '0' + bin);
}

class Hello {
  getInfo: function(){
    return 'hello';
  }
}

const test = 100
const res = decToBin(test);
console.log(res);

module.exports = binToDec;
