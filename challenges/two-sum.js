/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for(let i =0; i < arr.length; i++) {
    for(let j = 1+i; j < arr.length; j++) {
      if(arr[j]+arr[i]===n) {
        return true;
      }
    }
  }

  return false;
}

module.exports = twoSum;