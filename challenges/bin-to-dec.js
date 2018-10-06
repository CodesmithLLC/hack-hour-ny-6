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
  let result = [];
  for (let i = 0; i < binary.length; i++) {
    let currNum = Number(binary[i]),
      secNum = Math.pow(2, binary.length - 1 - i),
      product = currNum * secNum;
    result.push(product);
  }
  return result.reduce((a, b) => a + b);
}

function binToDec(bin, place = 1, num = 0) {
  return bin.length
    ? binToDec(
        bin.slice(0, bin.length - 1),
        place * 2,
        (num += bin.slice(-1) * place)
      )
    : num;
}

function decToBin(dec, bin = "") {
  return dec
    ? decToBin(Math.floor(dec / 2), dec % 2 ? "1" + bin : "0" + bin)
    : bin;
}
module.exports = binToDec;
