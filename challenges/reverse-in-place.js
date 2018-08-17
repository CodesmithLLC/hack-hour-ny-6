"use strict"
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
  let i
  let j
  for (i = 0, j = array.length - 1; i < j; i++, j--) {
    let temp = [array[i], array[j]]
    array[i] = temp[1]
    array[j] = temp[0]
  }
  return array
}

/* TDD */
// console.log(reverseInPlace([0, 1, 2, 3, 4]))
// console.log(reverseInPlace([0, 1, 2, 3, 4, 5]))

module.exports = reverseInPlace
