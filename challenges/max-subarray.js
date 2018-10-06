/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  const accums = []
  for (let i = 0; i < arr.length; i++){

    let accum = 0
    for (let j = i; j < arr.length; j++){
      if (accum === 0){
        accum = arr[i];
        // accums.push({ begin: i, end: j, val: accum })
      } else {
        accum += arr[j];
        accums.push({ begin: i, end: j, val: accum })
      }
    }
  }
  console.log(accums);
  let max = 0
  let subArr = {};
  for (let p=0; p < accums.length; p++){
    if (accums[p].val > max){
      max = accums[p].val;
      subArr = accums[p];
    }
  }
  // console.log({max});
  return arr.slice(subArr.begin, subArr.end + 1)
}

const arr = [1, -2, 3, 10, -4, 7, 2, -5];
console.log(maxSubarray(arr))
module.exports = maxSubarray;
