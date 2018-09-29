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

function mergeRanges(arr) {
  //
  let merged = [];
  for (let i = 0; i < arr.length - 1; i++) {
    // CURRENT array
    current = arr[i];
    // NEXT array
    next = arr[i + 1];
    // if CURRENT array is in the range of the NEXT array
    // merge CURRENT and NEXT
    if (current[0] >= Math.min(...next) || current[1] >= Math.min(...next)) {
      // mininum in CURRENT range
      let minRange = Math.min(...current, ...next);
      // maximum in NEXT range
      let maxRange = Math.max(...current, ...next);
      // push minimum and maximum of MERGED array
      merged.push([minRange, maxRange]);
      // increment i to skip NEXT array since merged
      i++;
    } else {
      // if CURRENT array max is not in range of NEXT
      // push CURRENT range to merged
      merged.push([Math.min(...current), Math.max(...current)]);
    }
  }
  return merged;
}

module.exports = mergeRanges;
