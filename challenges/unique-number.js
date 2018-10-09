/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
// function uniqueNumber(array) {
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//     obj[array[i]] ? obj[array[i]]++ : (obj[array[i]] = 1);
//   }
//   for (let num in obj) {
//     if (obj[num] === 1) return num;
//   }
// }

function uniqueNumber(array) {
  let res = array[0];
  for (let i = 1; i < array.length; i++) {
    res = res ^ array[i];
  }
  return res;
}

// console.log(uniqueNumber([1, 2, 1, 3, 3]));
module.exports = uniqueNumber;
