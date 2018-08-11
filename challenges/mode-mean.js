/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean // average
 * 	- If there are multiple modes, use the max of the modes // value that occurs most often
 *
 * Return true or false
 *
 */

function modemean(array) {
  return getMean(array) === getMode(array)

  // -----

  function getMean(array) {
    return Math.floor(
      array.reduce((num, element) => (num += element), 0) / array.filter(num => num !== 0).length
    )
  }

  function getMode(array) {
    const memo = array.reduce((acc, element) => {
      return acc[element + ""] === undefined
        ? // if not found, add to object
          { ...acc, [element + ""]: 1 }
        : // if found, increment the counter
          { ...acc, [element + ""]: (acc[element] += 1) }
    }, {})

    return (
      // get list of properties
      Object.keys(memo)
        // convert each to a more workable object
        .map(prop => ({ element: prop, value: memo[prop] }))
        // sort by value, then return the first element (which would be the max)
        .sort((a, b) => b.value - a.value)[0].element
    )
  }
}

module.exports = modemean
