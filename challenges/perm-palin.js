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

// a: 2
// b: 2

// c: 2
// a: 1
// b: 1

// racecar
// r: 2
// a: 2
// c: 2
// e: 1

function permPalin(str) {
  // sort letters in word and count, then sort by their count
  const wordObj = {};
  const countObj = [];

// iterate over string to length
for (let i = 0; i < str.length; i++) {
  // push to an obj
  if (wordObj[str.charAt(i)]) {
    wordObj[str.charAt(i)]++;
  } else wordObj[str.charAt(i)] = 1;
}   
  // iterate over object.values
const wObjKeys = Object.keys(wordObj);
const wObjVals = Object.values(wordObj);
const wObjLength = wObjVals.length;

  for (let i = 0; i < wObjLength; i++) {
    // push to an obj if value is 1
    if (wObjVals[i] % 2 === 1) {
      countObj.push(wObjKeys[i])
    }  
  }
  // check if obj.1 is > 1
  return !(countObj.length > 1);
}

module.exports = permPalin;