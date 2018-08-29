/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const newArr = array.sort();

  const int1 = newArr.pop();
  const int2 = newArr.pop();
  const int3 = newArr.pop();

  const product = int1 * int2 * int3;
  return product;
}


module.exports = highestProduct;
