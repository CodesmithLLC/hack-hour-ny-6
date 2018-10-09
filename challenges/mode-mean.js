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
  for (let i = 0; i < array.length; i++) {
    count[array[i]] ? count[array[i]]++ : (count[array[i]] = 1);
  }

  let mode = array[0];
  let maxFreq = 0;

  for (let num in count) {
    if (count[num] > maxFreq) {
      if (count[num] === maxFreq) {
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

function modemean(array) {
  //if invalid input return false
  if (!array.length) return false;

  //find sum using reduce
  const sum = array.reduce(function(acc, value) {
    return (acc += value);
  }, 0);

  //find mean using Math.floor
  const mean = Math.floor(sum / array.length);

  //initialize occurences obj
  let occurences = {};
  array.forEach(function(el) {
    occurences[el] === undefined ? (occurences[el] = 1) : (occurences[el] += 1);
  });

  //initialize mode to -infinity bc something will always be greater
  let mode = -Infinity;
  //initialize highest freq
  let highestFreq = 0;

  //iterate through occurences
  for (let num in occurences) {
    //if the amount of occurences is >= highest frequencey
    if (occurences[num] >= highestFreq) {
      //check if they're the same and if the number is greater than curr mode
      if (occurences[num] === highestFreq && occurences[num] > mode) {
        //if so, reassign mode to the new highest num
        mode = num;
      }

      //if not equal, means it's greater, so reassign
      highestFreq = occurences[num];
      mode = num;
    }
  }

  return mode === mean;
}

//optimized
function modeMean(array) {
  let maxFreq = 0;
  let maxMode = -Infinity;
  let sum = 0;

  array.reduce((obj, curr) => {
    sum += curr;
    obj[curr] ? ++obj[curr] : (obj[curr] = 1);
    if (obj[curr] === maxFreq && curr > maxMode) {
      maxMode = curr;
    } else if (obj[curr] > maxFreq) {
      maxFreq = obj[curr];
      maxMode = curr;
    }
    return obj;
  }, {});

  return Math.floor(sum / array.length) === maxMode;
}

module.exports = modemean;
