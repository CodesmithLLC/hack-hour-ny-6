/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  var store = {};
  for (var i = 0; i < array.length; i++) {
    if (array[i] in store) return array[i];
    store[array[i]] = true;
  }
}

// O(n) time, O(1) space
function repeatNumbers(array) {
  var result = 0;
  // use bitwise XOR!!
  for (var i = 0; i < array.length; i++) {
    result = result ^ i ^ array[i];
  }

  return result;
}

module.exports = repeatNumbers;
