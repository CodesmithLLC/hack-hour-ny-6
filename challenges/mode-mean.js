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
  // find mean - add all numbers in array and divide by length
  const occurenceHolder = {};

  const sumArr = array.reduce((accum, currentVal) => {
    if (occurenceHolder[currentVal] === undefined){
      occurenceHolder[currentVal] = 1;
    } else {
      occurenceHolder[currentVal] = occurenceHolder[currentVal] + 1;
    }
    return  accum + currentVal;
  })

  const mean = Math.floor(sumArr / array.length);

  // find mode - put each number into object and coount its occurences.  find the highest occurence.
  let topOccurence = 0;
  let mode = 0;
  for (let occurence in occurenceHolder){
    if (occurenceHolder[occurence] > topOccurence){
      topOccurence = occurenceHolder[occurence]
      mode = occurence
    } else if (occurenceHolder[occurence] === topOccurence){
      if (occurence > mode){
        topOccurence = occurenceHolder[occurence];
        mode = occurence
      }
    }
  }
  // compare the two
  console.log({mode});
  console.log({mean});
  if (mode === String(mean)){
    return true;
  }
  return false;
}

module.exports = modemean;

console.log(modemean([2, 2, 10, 4, 5, 6, 10, 2, 10]));
