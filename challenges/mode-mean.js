/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  let i = 0;
  let sum = 0;
  let memo = {};
  while(i < array.length) {
    let num = array[i];
    sum += num;
    if (num in memo) {
      memo[num].count++
    } else {
      memo[num] = {};
      memo[num].num = num;
      memo[num].count = 1;
    }
    i++;
  }
  let mean = Math.floor(sum / array.length);
  let countArray = [];
  for(let num in memo) {
    countArray.push({num: parseInt(num), count: memo[num].count})
  }
  const mode = countArray.reduce((prev, curr) => {
    if(curr.count === prev.count) {
      if(curr.num > prev.num) {
        prev = curr;
      }
    } else if (curr.count > prev.count) {
      prev = curr;
    }
    return prev;
  });
  return mean === mode.num;
}
var test = modemean([1,2,3,4,2,1,2,3,1]);
console.log(test);

module.exports = modemean;
