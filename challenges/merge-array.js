/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  let len = Math.min(arr1.length, arr2.length);
  let returnArr = [];
  for(let i = 0; i < len; i++) {
    returnArr.push(arr1[0]);
    returnArr.push(arr2[0]);
    arr1 = arr1.splice(1);
    arr2 = arr2.splice(1);
  }

  arr1.length !== 0 ? returnArr = returnArr.concat(arr1) : returnArr = returnArr.concat(arr2);
  
  return returnArr;
}


module.exports = mergeArrays;