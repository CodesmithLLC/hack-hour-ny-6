/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let count = a;
  while(count > 0) {
    if(Number.isInteger(a/count) && Number.isInteger(b/count)) {
      return count
    }
    count--;
  }
  return 1
}

module.exports = gcd;