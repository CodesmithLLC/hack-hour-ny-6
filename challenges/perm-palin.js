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

    if(str === str.split('').reverse().join('') || str.length === 1) {
      return true;
    }
    let perm, first, 
    for(let i = 0; i< str.length ; i++) {
      perm = str.slice(i, i+1) + str(i);
      
    }
  }

module.exports = permPalin;