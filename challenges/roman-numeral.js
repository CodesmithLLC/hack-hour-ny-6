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
  const romanNumerals = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' };
  let romNum = []
  let prevNum = 1
  for (num in romanNumerals){
  //  console.log({num});
    if (n === num){
      romNum.push[romanNumerals[num]];
      return romNum;
    }

    if (n > 1 && n < num){
      console.log({num});
      if (n === (num - prevNum)){
        romNum.push(romanNumerals[prevNum]);
        romNum.push(romanNumerals[num]);
        return romNum
      } else {
        for (let i = 0; i < n; i++){
          romNum.push(romanNumerals[prevNum]);
        }
        return romNum
      }
    }
  }
  // if (n < 5){
  //   if (n === (5-1)){
  //     romNum.push(romanNumerals[1]);
  //     romNum.push(romanNumerals[5]);
  //   } else {
  //     for (let i = 0; i < n; i++){
  //       romNum.push(romanNumerals[1]);
  //     }
  //   }
  // }
  //return romNum
}

// console.log(romanNumeral(4));
// console.log(romanNumeral(3));
console.log(romanNumeral(10));

module.exports = romanNumeral;
