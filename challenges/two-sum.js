/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length < 2) return false

  // {[n - value] : collisions}
  const hashmap = arr.reduce((acc, value) => {
    if (acc.hasOwnProperty(n - value)) {
      return {
        ...acc,
        [n - value]: +acc[n - value] + 1
      }
    } else {
      return {
        ...acc,
        [n - value]: 0
      }
    }
  }, {})

  for (let i = 0; i < arr.length; i++) {
    if (hashmap.hasOwnProperty(arr[i])) {
      if (n / 2 !== arr[i] || hashmap[arr[i]] > 0) {
        return true
      } // else continue looping
    } // else continue looping
  }

  return false
}

// console.log(twoSum([-1, -2, -3], -6), 'should be false')
// console.log(twoSum([1, 2, 3], 6), 'should be false')
// console.log(twoSum([1, 1, 2, 3, 3, 4, 5], 3), 'should be true')
// console.log(twoSum([1, 2, 3, 4, 5], 8), 'should be true')
// console.log(twoSum([1, 2, 3, 4, 5], 0), 'should be false')
// console.log(twoSum([1, 2, 4, 5, 6], 1), 'should be false')
// console.log(twoSum([1, 2, 3, -3, -4], 0), 'should be true')
// console.log(twoSum([-9, -8, -1, 1, 2], -6), 'should be true')
// console.log(twoSum([-9, -8, -1, 1, 2], -10), 'should be true')

module.exports = twoSum
