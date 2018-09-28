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

// function repeatNumbers(array) {
//
//   let nums = {};
//   for (let i=0; i < array.length; i++){
//     console.log({nums});
//     if (nums[array[i]] === 'inArr'){
//       return array[i];
//     }
//     nums[array[i]] = 'inArr';
//   }
//   return 'no duplicate'
// }

function repeatNumbers(array) {
}

const arr = [1, 2, 3, 4, 5, 1, 6, 7];
console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
