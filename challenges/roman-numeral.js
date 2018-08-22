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
  const range = {
    base: [1, 5, 10, 50, 100, 500, 1000],
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  }

  acc = ""

  let mid = Math.floor(range.base.length / 2 - 1)
  while (n > 0) {
    let i = 0
    while (range.base[i] - n >= 0) {
      i += 1
      if (range.base[i] === undefined) return NaN
    }
  }
  return mid
}

console.log(romanNumeral(1), "I")
console.log(romanNumeral(4), "IV")
console.log(romanNumeral(5), "V")
console.log(romanNumeral(9), "IX")
// console.log(romanNumeral(10), "X")
// console.log(romanNumeral(40), "XL")
// console.log(romanNumeral(50), "L")
// console.log(romanNumeral(90), "XC")
// console.log(romanNumeral(100), "C")
// console.log(romanNumeral(400), "CD")
// console.log(romanNumeral(500), "D")
// console.log(romanNumeral(900), "CM")
// console.log(romanNumeral(1000), "M")

module.exports = romanNumeral
