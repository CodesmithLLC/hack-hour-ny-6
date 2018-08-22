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

function romanNumeral(n, romNum = '') {
    let rNArr = [1000, 500, 100, 50, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let rN = {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'VI',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'XI',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    }
    if(n === 0) {
      return romNum;
    }
  
    for(let i = 0; i < rNArr.length; i++) {
      let currNum = rNArr[i];
      if(n - currNum >= 0) {
        n -= currNum;
        romNum += rN[currNum];
      }
    }
    return romanNumeral(n, romNum);
  }
  
  

module.exports = romanNumeral;
