/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target, i = 0, original = array) {
  if (array.length === 0) return target == 0
  if (array.length === 1) {
    if (i >= original.length - 1) {
      return array[0] === target
    }
    return subsetSum(original, target, (i += 1), original)
  }

  if (
    array.reduce(
      (bool, curr) => (bool ? true : original[i] + curr === target),
      false
    )
  ) {
    return true
  }

  if (array.reduce((sum, curr) => sum + curr, original[i]) === target) {
    return true
  }

  return subsetSum(array.slice(1), target, i, original)
}

// console.log(subsetSum([3, 7, 4, 2], 5), "- > true, 3 + 2 = 5")
// console.log(
//   subsetSum([3, 34, 4, 12, 5, 12], 32),
//   "-> true, 3 + 12 + 5 + 12 = 32"
// )
// console.log(subsetSum([8, 2, 4, 12], 13), "-> false")
// console.log(subsetSum([8, -2, 1, -3], 6), "-> true, 8 + 1 + (-3) = 6")

module.exports = subsetSum
