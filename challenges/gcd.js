/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (!a || !b) return NaN

  const bigger = Math.max(a, b)
  const smaller = Math.min(a, b)
  if (bigger % smaller === 0) return smaller

  const factors = getfactors(smaller).reverse()

  for (let i = 0; i < factors.length; i++) {
    if (bigger % factors[i] === 0) return factors[i]
  }

  return NaN

  // ------------
  function getfactors(num, factor = 2, headFactors = [1], tailFactors = [num]) {
    if (headFactors[headFactors.length - 1] > Math.floor(Math.sqrt(num)))
      return [...headFactors, ...tailFactors]
    if (num % factor === 0) {
      if (factor >= num / factor) return [...headFactors, ...tailFactors]
      headFactors.push(factor)
      tailFactors.unshift(num / factor)
    }
    return getfactors(num, (factor += 1), headFactors, tailFactors)
  }
}

/*
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b)
}
*/

// console.log(gcd(10, 8), '-> 2')
// console.log(gcd(10, 9), '-> 1')
// console.log(gcd(100, 45), '-> 5')
// console.log(gcd(100, 20), '-> 20')

module.exports = gcd
