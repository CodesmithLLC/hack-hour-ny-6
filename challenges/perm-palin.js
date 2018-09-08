/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  if (str.length === 1) return true 
  let arr = str.split('')

  let key = arr.reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++
    else acc[cur] = 1
    return acc 
  }, {})

  let valArr = Object.values(key)
  let count = 0;
  valArr.reduce((arr, cur) => { // find how many chars occur an odd number of times 
    if (cur % 2 !== 0) count++ 
    return count 
  }, count)

  return count === 1 || count === 0
}

module.exports = permPalin;