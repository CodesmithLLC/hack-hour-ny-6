/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  let front = 0; 
  let back = arr.length - 1;
  while(back > front) {
    if(arr[front] >= target) {
      if(arr[front] === target) {
        return true
      } else if {
        
      }
    }
    if(arr[back]) {

    }
  }
}


module.exports = findInOrderedSet;
