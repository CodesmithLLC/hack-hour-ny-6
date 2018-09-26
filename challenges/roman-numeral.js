/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    n = n.toString();
    let counter = n.length;
    let romanNumeralArr = {'1': 'I', '5': 'V', '9' : 'IX', '10' : 'X', '40' : 'XL', '50':'L', '90':'XC', '100':'C'}
    let romanMath = {'1' : 1, '2' : 10, '3':100}
    let romanNumeralNum = '';
    while(n.length > 0) {
        let curRomVal = n.substring(0, 1);
        curRomVal = curRomVal * romanMath[n.length.toString()];
        console.log(curRomVal)
        while(curRomVal > 0) {
            curRomVal = curRomVal - Number(1 + "0".repeat(n.length))
            console.log(curRomVal)
        }




        n = n.substring(1, n.length);
    }


}

// module.exports = romanNumeral;

console.log(romanNumeral(123))
