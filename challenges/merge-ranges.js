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
  let result = [];
  let last;
 
  array.sort((a, b) => {
    return a[0] - a[0] || a[1] - b[1];
  });
 
  array.forEach(function(res) {
    if(!last || res[0] > last[1]) result.push(last = res);
    else if(res[1] > last[1]) last[1] = res[1]
  })
  return result;
}

module.exports = mergeRanges;
