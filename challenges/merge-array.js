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
    const a1 = arr1.shift();
    const a2 = arr2.shift();
    // if a1 is larger
    if(a1 > a2) {
    sortedArr.push(a2);
    arr1.unshift(a1);
    } else {
      // values are the same, or a2 is larger
      sortedArr.push(a1)
      arr2.unshift(a2);
    }
  }if (arr1.length === 0) {
    sortedArr.push(...arr2);
  }else {
    sortedArr.push(...arr1);
  }
  return sortedArr;
}

// function mergeSort(arr) {
// if (arr.length === 1) return arr;

// const midPoint = (arr.length / 2);
// // cut in half

// const firstPartition = mergeSort(arr.slice(0, midPoint));
// const secondPartition = mergeSort(arr.slice(midPoint, arr.length));

// // merge
//  return mergeArrays(firstPartition, secondPartition);
// }

// console.log(mergeSort([15,21,23,25,26,2,5,29,3,3000]));

module.exports = mergeArrays;
