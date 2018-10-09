"use strict";
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  return array.forEach((el, i, arr) => (array[i] = arr[-i]));
}

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
module.exports = reverseInPlace;
