/**
 * Given an array of integers, find the highest product you can get from
 * three of the integers.
 */

function highestProduct(array) {
  let products = []
  for (let i = 0; i < array.length; i++) {
    const remaining = [...array.slice(0, i), ...array.slice(i + 1)]

    for (let j = 0; j < remaining.length; j++) {
      const rest = [...remaining.slice(0, j), ...remaining.slice(j + 1)]
      for (let k = 0; k < rest.length - 1; k++) {
        products = [...products, array[i] * remaining[j] * rest[k]]
      }
    }
  }

  return Math.max(...products)
}

// console.log(highestProduct([2, 4, 6, 0]), "should be", 48)
// console.log(highestProduct([5, 5, 8, 3, 6, -1, -2]), "should be", 240)
// console.log(highestProduct([-10, 10, -9, 8, -8, 0]), "should be", 900)
// console.log(highestProduct([-10, -9, -8, 0]), "should be", 0)
// console.log(highestProduct([-10, -9, -8, 1]), "should be", 90)

module.exports = highestProduct
