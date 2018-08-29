/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  return array.sort((a,b) => a > b).slice(-3).reduce( prev, next => prev * next);
}


module.exports = highestProduct;
