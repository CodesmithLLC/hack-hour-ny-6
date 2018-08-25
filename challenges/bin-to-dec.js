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
    let indexOfFirstOne = binary.split('').findIndex((n) => {return n === '1'})
    let slice = binary.split('').slice(indexOfFirstOne)
    return slice.reduce((acc, cur, i) => {
        let exp = slice.length - 1 - i;
        if (cur === "1") { acc = acc + Math.pow(2, exp)}
        return acc 
    }, 0)
}

module.exports = binToDec;
