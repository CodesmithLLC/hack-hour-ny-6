/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 * 
 */

let counter = 0;

function pow(base, power) {
  // checking edge cases
  if (!Number.isNumber(base) || !Number.isNumber(power)) return undefined;
  if (power === 0) return 1;
  
  // 0^0 -> 1, when power is 0 -> 1

  // base case:
  if (counter === power) return base;
  counter++;
  return base * pow(base, power - 1);
}

module.exports = pow;
