
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let sortArray = array.sort((a,b) => a > b);
  let lastThree = sortArray.slice(-3).reduce( (prev, next) => prev * next);
  let negatives = sortArray.filter( num => num < 0);

  if (negatives.length > 1){
    negatives = sortArray.slice(0,2)
    negatives.push(sortArray[sortArray.length - 1])
    negatives = negatives.reduce( (prev, next) => prev * next);
  } 

  return Math.max(lastThree, negatives);
}

console.log(highestProduct([-9,-2,1, 3,4,5]))
console.log(highestProduct([5,8,-8,2,9,10,7]));

module.exports = highestProduct;
