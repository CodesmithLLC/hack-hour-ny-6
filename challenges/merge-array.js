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
  const longerArray = arr1.length > arr2.length ? arr1 : arr2;
  const smallerArray = arr1.length > arr2.length ? arr2 : arr1;
  const combinedArr = [];
  let j = 0
  let i = 0

  while (i < longerArray.length) {
    if (longerArray[i] < smallerArray[j]){
      combinedArr.push(longerArray[i])
      i++
    } else {
      if (j < smallerArray.length){
        combinedArr.push(smallerArray[j])
        j++
      } else {
        combinedArr.push(longerArray[i])
        i++
      }
    }
  }
  return combinedArr;
}

const arr1 = [1,5,8,12,14,19];
const arr2 = [3,4,6,10,11,15,21];

console.log(mergeArrays(arr1, arr2));

module.exports = mergeArrays;
