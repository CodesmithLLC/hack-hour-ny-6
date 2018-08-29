/**
 * Given an array of integers, find the highest product you can get from 
 * // three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return

  let sorted = array.sort().filter(num => num !== 0)
  let first = sorted[0]
  let sec = sorted[1]
  let third = sorted[2]
  let last = sorted[sorted.length - 1]
  let nextToLast = sorted[sorted.length - 2]
  let thirdToLast = sorted[sorted.length - 3]
  let final;
  third > thirdToLast ? final = third : final = thirdToLast 
  
  let firstProduct = first * sec * final
  let lastProduct = last * nextToLast * final
  
  return firstProduct > lastProduct ? firstProduct : lastProduct
}

module.exports = highestProduct;
