// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);

  while( array[0] !== min || array[array.length - 1] !== max){
    for( let i =0; i < array.length; i++){
      if(array[i + 1] < array[i]){
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }
  
  return array;
}

console.log(bubbleSort([5,0,1,3,2]));
// console.log();
module.exports = bubbleSort;
