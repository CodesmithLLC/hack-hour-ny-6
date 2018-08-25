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
    binary = binary.split("").reverse()
    let binaryKey = [1,2,4,8,16,32,64,128]
    count = 0;
    console.log(binary)
    for(let i = 0; i < binary.length; i++) {
        if(binary[i] === '1') {
            count += binaryKey[i]
        }
    }
    return count;

}

module.exports = binToDec;
// console.log(binToDec('0'))
// console.log(binToDec('0101'))
// console.log(binToDec('01010101'))