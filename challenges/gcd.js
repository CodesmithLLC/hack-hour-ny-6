/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(...nums) {
  // sort input
  const sorted = nums.sort((a, b) => {
    return a - b;
  });
  // create an array for common divisor for both inputs
  let rcd = [];
  let lcd = [];

  for (let i = nums[0]; i > 0; i--) {
    if (nums[0] % i === 0) {
      lcd.push(i);
    }
  }
  for (let i = nums[1]; i > 0; i--) {
    if (nums[1] % i === 0) {
      rcd.push(i);
    }
  }

  for (let i = 0; i < rcd.length; i++) {
    if (lcd.indexOf(rcd[i]) > -1) {
      return rcd[i];
    }
  }
}

function gcd(a, b) {
  // Check if a and b are integers and make sure both aren't 0
  if (!Number.isInteger(a) || !Number.isInteger(b) || (a === 0 && b === 0))
    return "wrong input";

  // If a or b are 0, return other variable since 0 divides all numbers and GCD will be other number
  if (a === 0) return b;
  if (b === 0) return a;

  // Use minimum value as starting starting point for loop
  const min = Math.min(a, b);

  // GCD is found when both inputs are divisible by the same number, so loop down from min to > 0
  for (i = min; i > 0; i--) {
    // The first shared factor will be the GCD since we're looping downward!
    if (a % i === 0 && b % i === 0) return i;
  }
}

//euclidean algorithm
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

module.exports = gcd;
