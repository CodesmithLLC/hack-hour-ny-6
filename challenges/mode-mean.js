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
    let count = {};
    for(let i = 0; i < array.length; i++) {
      count[array[i]] ? count[array[i]]++ : count[array[i]] = 1;
    }

    let mode = array[0];
    let maxFreq = 0;

    for(let num in count) {
      if(count[num] > maxFreq) {
        if(count[num] === maxFreq) {
          mode = Math.max(num, mode);
          maxFreq = count[num];
        } else {
          mode = num;
          maxFreq = count[num];
        }
      }
    }

    let mean = Math.floor(array.reduce((a, b) => a + b) / array.length);
    
    return mean === mode;
  }

module.exports = modemean;
