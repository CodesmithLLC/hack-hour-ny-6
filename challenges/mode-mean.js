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


// function modemean(array) {
//   let meanVal = (function(array) {
//     console.log(array);
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//
//       sum += array[i];
//
//     }
//     let mean = sum / array.length;
//
//     return Math.floor(mean);
//   })(array);
//
//   console.log(meanVal)
//   let modeVal = (function mode(array) {
//     console.log(array);
//     let storedVal = {};
//     for(let i = 0; i < array.length; i++){
//       if(!storedVal[array[i]])storedVal[array[i]] = 0;
//       storedVal[array[i]] += 1;
//     }
//     for(let prop in storedVal){
//       storedVal[prop] = prop;
//     }
//     return storedVal;
//   })(array);
//   console.log(modeVal);
// }

//optimized
function modeMean(array) {
  let maxFreq = 0;
  let maxMode = -Infinity;
  let sum = 0;

  array.reduce((obj, curr) => {
    sum += curr;
    obj[curr] ? ++obj[curr] : obj[curr] = 1;
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
