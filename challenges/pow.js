/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, acc = 1) {
  if (power === 0) {
    return 1
  }
  if (power === 1) {
    return acc * base
  }
  if (power === -1) {
    return acc / base
  }
  return pow(base, power > 0 ? power - 1 : power + 1, power > 0 ? acc * base : acc / base)
}

/* TDD */
// console.log(pow(2, 2), "should be 4")
// console.log(pow(2, 3), "should be 6")
// console.log(pow(3, 3), "should be 27")
// console.log(pow(8, -1), "should be 0.125")
// console.log(pow(4, -3), "should be 0.015625")

module.exports = pow
