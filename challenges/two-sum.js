/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let sum = [];
  let hash = {};

  for(let i = 0; i < arr.length; i++){
    let diff = n - arr[i];

    if(hash[diff.toString()] !== undefined){
      return true;
    }
    hash[arr[i].toString()] = arr[i];
  }
  return false;
}

module.exports = twoSum;
