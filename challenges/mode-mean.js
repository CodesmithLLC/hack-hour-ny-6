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
  // calculate mode 
  var countedNums = array.reduce(function (allNums, num) { 
	  if (num in allNums) {
	    allNums[num]++;
	  } else {
	    allNums[num] = 1;
	  }
	  return allNums;
	}, {});

  let occurrences = Object.values(countedNums)  // an array of occurrences [3, 4, 5]
  let max = Math.max(...occurrences) // num that is highest # occur
  let maxKey = Object.keys(countedNums).find(key => countedNums[key] === max)

  const mode = parseInt(maxKey)

  if (array.indexOf(maxKey) !== array.lastIndexOf(maxKey)) {
	  let maxNumArr = countedNums.reduce((acc, cur) => {
	 	  return Math.max(acc, cur)
	  })  	
  }

  // calculate mean 
  const sum = array.reduce((acc, cur) => {
    return acc = acc + cur
  }, 0)

  let mean = Math.floor(sum/array.length)
  return (mode === mean)
}

// modemean([1, 1, 1, 2, 3])

// module.exports = modemean;
