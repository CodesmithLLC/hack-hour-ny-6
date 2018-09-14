/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

  let divisor = 1;
  let common = 0;

  let count = 0

  while (count < a || count < b){
    if (a % divisor === 0 && b % divisor === 0){
      common = divisor;
    }
    divisor++
    count++
    //console.log(count);
  }
  return common;
}

console.log(gcd(10, 8));
console.log(gcd(10, 9));
console.log(gcd(3, 9));


module.exports = gcd;
