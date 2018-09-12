/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const lessNums = {};

  for (let i=0; i<arr.length; i++){
      if (lessNums[arr[i]]){
        console.log({lessNums});
        return true;
      } else {
        lessNums[n-arr[i]]=arr[i];
      }
  }
  console.log({lessNums});
  return false
}

console.log(twoSum([1,2,3], 5));
console.log(twoSum([10,1, 9, 2,3], 13));
console.log(twoSum([1,2,3,10,40,6, 7, 8], 100));
console.log(twoSum([10,-2,3,-5], 5));

module.exports = twoSum;
