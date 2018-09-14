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
  var hash = {};
  for(var i = 0; i < str.length; i++){
    if(!hash[str[i]]) hash[str[i]] = 1;
    else hash[str[i]]++;
  }
  var count = 0;
  for(j in hash){
    if(hash[j]%2 !== 0 )count++;
    if(count > 1) return false;
  }
  return true
}

module.exports = permPalin;