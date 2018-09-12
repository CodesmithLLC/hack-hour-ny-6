/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    let arrCopy = arr.slice();
    for (let j = 1; j < arr.length; j++) {
      arrCopy.splice(i, 1);
      arrCopy.unshift(arr[i]);
      if (arr[i] + arrCopy[j] === n) {
        return true;
      }
    }
  }
  return false;
}

module.exports = twoSum;
