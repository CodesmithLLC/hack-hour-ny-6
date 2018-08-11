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
  // mode -> frequent finding of a number
  let mode = function(array) {
    let counter = 1;
    let obj = {};

    let arraySorted = array.sort(function(a,b) {return a - b});

    while(arraySorted.length !== 0) {
      let firstValue = arraySorted.shift();

      if (obj.hasOwnProperty(firstValue)) {
        counter = 1;
        obj[firstValue] = counter;
      } else {
        obj[firstValue] = ++counter;
      }
    }

    // find the highest key -> value
    let highest = 0;
    for (let ele in obj) {
      if (obj[ele] > highest) {
        highest = obj[ele];
      }
    }

    return highest;
  };
  // mean -> add all and divide by the length
  let mean = Math.floor(array.reduce((accum, cur) => {
    return accum = accum + curr;
  }) / array.length);

  return mode === mean? true : false;
}

module.exports = modemean;
