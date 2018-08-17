'use strict';
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
  //divide the array in half, declare 2 empty strings
  let half = Math.floor(array.length/2),
      beginning = '',
      ending = '';
  //iterate through array, create a "swapped" array
  for(let i = 0; i < half; i++){
    beginning = array[i];
    ending = array[array.length - i - 1];
    array[array.length - i - 1] = beginning;
    array[i] = ending;
  }
  return array;
}

module.exports = reverseInPlace;
