/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// pow(2, 3) -> 8
// pow(2, 4) -> 16
// pow(2, 5) -> 32

function pow(base, power) {
  if(power === 0) return 1
  if(power === 1 || power === -1) return base;
  if(pow < 0) return 1 / base * pow(base, power + 1)
  if(power === 1) return base
  return base * pow(base, power - 1)
}

module.exports = pow;
// const jsPow = Math.pow(2, -1)
// console.log({jsPow})
const myPow = pow(2, -1)
console.log({myPow})