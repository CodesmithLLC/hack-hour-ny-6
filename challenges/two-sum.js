/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!Array.isArray(arr) || arr.length === 0 ) return false;

  let obj = {};
  let ans = false;

  arr.forEach( element => {
    obj[element] = n - element;
  })

  Object.values(obj).forEach(element => {
    if(obj[element]){
      ans = true;
    }
  })

  return ans;
}

console.log(twoSum([1,2,3,4,11,9,10], 12));

module.exports = twoSum;
