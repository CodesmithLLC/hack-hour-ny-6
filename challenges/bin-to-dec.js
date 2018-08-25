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
    // let hexVal = { '0':'0000', '1': '0001' }
    let newVal = [];
    let conversion = '';
    for(let i = binary.length - 1; i >= 0; i--){
        let powerInd = binary.length - i;
        newVal.push(binary[i] * Math.pow(2, binary.length - 1 - i));
        console.log('vals being multiplied: ', binary[i] * Math.pow(2, binary.length - 1 - i));
        // console.log('currentVal: ', powerInd)
        // console.log('this is newVal: ', newVal);
    }
    // for(let j = 0; j < newVal.length; j++){
    //     conversion = newVal += neVal[j];
    //     console.log(conversion);

    // }
    conversion = newVal.reduce((a, b) => a + b);
    console.log(conversion)
}

function pow(base, power) {
    if(power === 0) return 1;
    if(power === 1) return base;
    else return base * pow(base, power-1);
  }

binToDec('0101');
module.exports = binToDec;
