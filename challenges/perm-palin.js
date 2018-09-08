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
  str = str.split('');
  let checkStr = {};
  for(let i = 0; i < str.length; i++) {
    if(checkStr.hasOwnProperty(str[i])) {
      checkStr[str[i]] = true;
    }
    if(checkStr[str[i]] === undefined || checkStr[str[i]] !== true) {
      checkStr[str[i]] = false;
    }
  }
  let falseCount = 0;
  for(key in checkStr) {
    if(checkStr[key] === false) {
      falseCount++;
    }
  };
  if(falseCount >= 2) {
    return false;
  };
  return true;
}

module.exports = permPalin;