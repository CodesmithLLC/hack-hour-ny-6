/**
 * We have a list of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
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
  const sortedArr = [];

  while (arr1.length !== 0 && arr2.length !== 0) {
  // get lowest value from arr1 and arr2 (shift)
    const a1 = arr1.shift;
    const a2 = arr2.shift;
    const sorted = null;
  // compare values
    // if the same, get both values
    if(a1 > a2) {
    sortedArr.push(a2);
    arr1.unshift(a1)
    } else sortedArr.push(a1)
    arr2.unshift(a2);
    // unshift higher value back to its array

  } else while (arr1.length !== 0 && arr2.length !== 0) {
    // concat remaining arr to end of sortedArray
      sortedArr += arr1 + arr2;
  }
  return sortedArr;
}

module.exports = mergeArrays;
