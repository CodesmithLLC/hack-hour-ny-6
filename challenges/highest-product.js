/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */



function highestProduct(array) {
  array.sort((a, b) => {return a - b});
  const product = (array[array.length - 1] * array[array.length - 2] * array[array.length - 3]);
  return product;
}

console.log(highestProduct([7, 8, 9, 10, 11, 104, 12, 1, 6, 5, 3, 2, 4]))
module.exports = highestProduct;
