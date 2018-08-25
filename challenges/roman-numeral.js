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
  const chars = {
    single: 'I',
    double: 'V',
    singleNum: 1,
    doubleNum: 5
  }

  let i = 0;
  let numeral = ''
  while (i <= n) {
    console.log({i, n})
    if (i < chars.doubleNum) {
      numeral += chars.single
    }
    if (i === chars.doubleNum - chars.singleNum) {
      numeral = chars.single + chars.double
    }
    if (i === chars.doubleNum) {
      numeral = chars.double
    }
    if (i > chars.doubleNum) {
      numeral += chars.single
    }
    if (i === )
    i += 1
  }
  return numeral

}

const test = 9;
const res = romanNumeral(test);
console.log(res)

module.exports = romanNumeral;
