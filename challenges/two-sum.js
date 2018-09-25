/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

  // sort the array
  arr.sort();
  const midpoint = Math.floor(arr.length/2)

  // cut array in half
  const lowerHalf = arr.slice(0, midpoint);
  const upperHalf = arr.slice(midpoint, arr.length)

  // check if the largest number in lower half is larger than n
    // if yes, divide in half again
  if (lowerhalf[lowerHalf.length] > n) {
    return twoSum(lowerhalf, n) 
  }else if ()
  }








}

twoSum([4,3,6,7,2,1], 4);

module.exports = twoSum;
