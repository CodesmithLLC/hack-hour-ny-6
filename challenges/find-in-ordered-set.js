/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  if (!Array.isArray(arr) || arr.length === 0) return false
  if (typeof target !== 'number') return false

  let low = 0
  let high = arr.length
  let counter = 0

  while (low <= high && counter <= 20) {
    let mid = Math.floor((low + high) / 2)

    if (arr[mid] === target) return true
    if (arr[mid] > target) {
      high = mid
    } else {
      low = mid
    }

    counter++
  }

  return false
}

var nums = [1, 9, 10, 39, 45]
// console.log(findInOrderedSet(nums, 9), 'should be true')
// console.log(findInOrderedSet(nums, 32), 'should be true')
// console.log(findInOrderedSet(nums, 45), 'should be true')
// console.log(findInOrderedSet(nums, 0), 'should be FALSE')
// console.log(findInOrderedSet(nums, 11), 'should be FALSE')

module.exports = findInOrderedSet
