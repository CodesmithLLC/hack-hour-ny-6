/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */



// function highestProduct(array) {
//   array.sort((a, b) => {return a - b});
//   const posProduct = (array[array.length - 1] * array[array.length - 2] * array[array.length - 3]);
//   const negProduct = (array[0] * array[1] * array[array.length - 1])
//   console.log({negProduct});
//   console.log({posProduct});
//   if (negProduct > posProduct){
//     return negProduct;
//   }
//   return product;
// }

function highestProduct(array) {
  let topThree = {firstTop: -Infinity, secondTop: -Infinity, thirdTop: -Infinity, };
  for (let i=0; i < array.length; i++){
    switch (true){
      case (array[i] > topThree.firstTop):
      console.log('greater than');
        topThree.thirdTop = topThree.secondTop;
        topThree.secondTop = topThree.firstTop
        topThree.firstTop = array[i];
      case (array[i] > topThree.secondTop):
        topThree.thirdTop = topThree.secondTop;
        topThree.secondTop = array[i];
      case (array[i] > topThree.thirdTop):

      default:
        console.log("default");
      }
    }
}

console.log(highestProduct([7, 8, 9, -10, 11, -104, 12, 1, 6, 5, 3, 2, 4]))
module.exports = highestProduct;
