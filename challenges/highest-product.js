/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length < 3) return 'Need more then 3 items'
  array = array.sort((a,b) => {return a-b});
  array.reverse();
  let sum = array[0] + array[1] + array[2]
  return sum;
}


module.exports = highestProduct;