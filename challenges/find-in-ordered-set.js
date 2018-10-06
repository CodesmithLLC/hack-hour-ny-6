/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */
function findInOrderedSet(arr, target) {
    let length = arr.length;
    let middleIndex = Math.floor(length / 2);

    //base cases
    if(arr[0] === target || arr[length - 1] === target || arr[middleIndex] === target) return true;
    if(length === 1 ) return false;

    if( arr[middleIndex] > target){
      return findInOrderedSet(arr.slice(0, middleIndex), target);
    }

    if(arr[middleIndex] < target){
      return findInOrderedSet(arr.slice(middleIndex + 1, length), target);
    }

    return false;
}


module.exports = findInOrderedSet;
