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
  // declare final arr and temp arr
  const finalArr = [];
  // const tempArr = [];

  while (n) {
    // check if > 1000
    while (n >= 1000) {
      // subtract 1000,  M
      n -= 1000;
      tempArr.shift("X");
    }
    // check if > 500
    while (n > 500) {
      // subtract 500, D
      n -= 500;
      tempArr.push("D");
    }
    // check if > 100
    if (n > 100) {
      // subtract 100, C
      n -= 100;
      finalArr.push("C");
    }
    // check if > 50
    if (n > 50) {
      // subtract 50, L
      n -= 50;
      finalArr.push("L");
    }
    // check if > 10
    if (n > 10) {
      // subtract 10, X
      n -= 10;
      finalArr.push("X");
    }
    // check if > 5
    if (n > 5) {
      // subtract 5, V
      n -= 5;
      finalArr.push("V");
    }
    // check if > 1
    if (n > 1) {
      // subtract 1, I
      n -= 1;
      finalArr.push("I");
    }
  }
  return finalArr;
}

console.log(romanNumeral(900));

module.exports = romanNumeral;
