/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length === undefined || array.length === 0) return false;

  let product = 1;

  for (let i = 0; i < 3; i += 1) {
    product *= array.splice(array.indexOf(Math.max(...array)), 1);
  }

  console.log(product);
  return product;
}


module.exports = highestProduct;
