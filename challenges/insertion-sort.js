// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array, indx=1) {
 if(array.length === 0) return array

 if( indx === array.length) return array;

 if( array[indx] < array[indx - 1] ){
  let lower = array[indx] ;
  let higher = array[indx - 1]
  array[indx - 1 ] = lower;
  array[indx] = higher
  return insertionSort(array, indx - 1, indx);
 }
 
 return insertionSort(array, indx + 1);
}

let arr = [2,6,9,1,4,5,3,7,8,0];

insertionSort(arr);


module.exports = insertionSort;