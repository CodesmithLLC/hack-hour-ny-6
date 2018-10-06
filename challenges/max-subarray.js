/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let currentMax = arr[0];
  let finalMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];

    if (num < 0 && Math.abs(num) > currentMax) {
      currentMax = -Infinity;
    } else if (currentMax === -Infinity) {
      currentMax = num;
    } else {
      currentMax += num;
    }

    finalMax = Math.max(currentMax, finalMax);
  }

  return finalMax;
}

function maxSubarray(arr) {
  var currentMax = -Infinity;
  var finalMax = -Infinity;

  for (var i = 0; i < arr.length; i++) {
    // which is greater: arr[i] or the sum of a subarray ending in arr[i]?
    currentMax = Math.max(arr[i], currentMax + arr[i]);

    // which is greater: currentMax or the previous max?
    finalMax = Math.max(finalMax, currentMax);
  }
  return finalMax;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
console.log(maxSubarray([15, 20, -5, 10]));

module.exports = maxSubarray;
