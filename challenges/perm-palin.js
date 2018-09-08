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
  if (!str || typeof str !== 'string') return false

  const counts = [...str].reduce(
    (acc, letter) => ({
      ...acc,
      [letter]: acc[letter] === undefined ? 1 : +acc[letter] + 1
    }),
    {}
  )
  const frequences = Object.values(counts)

  if (str.length % 2 === 0) {
    return frequences.reduce(
      (bool, num) => (!bool ? false : num % 2 === 0),
      false
    )
  } else {
    let odds = 0
    for (let i = 0; i < frequences.length; i++) {
      if (frequences[i] % 2 !== 0) {
        odds++
      }
      if (odds > 1) return false
    }
    return true
  }
}

// console.log(permPalin('abab'), '=> true')
// console.log(permPalin('cbaba'), '=> true')
// console.log(permPalin('cbac'), '=> false')
// console.log(permPalin('a'), '=> true')

module.exports = permPalin
