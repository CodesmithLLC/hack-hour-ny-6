/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  const merged = [];
  let i=0;
  while (i<array.length){
    const rangeOne = array[i];
    const rangeTwo = array[i+1];
    console.log({rangeOne});
    console.log({rangeTwo});
    if (!rangeTwo){
      break
    }
    if (rangeOne[1] < rangeTwo[0]){

      merged.push(rangeOne)
      i++
      console.log({merged});
    } else {
      const newRange = [(rangeOne[0] < rangeTwo[0] ? rangeOne[0] : rangeTwo[0]), (rangeOne[1] < rangeTwo[1] ? rangeTwo[1] : rangeOne[1])];
      merged.push(newRange)
      i+=2
    }
  }
  return merged;
}
var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(times));
module.exports = mergeRanges;
