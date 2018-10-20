// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

// function bubbleSort(array, i = 0) {
//   if (i === array.length) return array
//   for (let j = 0; j < array.length - 1; j++)
//     i !== j &&
//       array[j] > array[j + 1] &&
//       ([array[j + 1], array[j]] = [array[j], array[j + 1]])

//   const newArray = array.reduce(
//     (result, e, j, arr) =>
//       i !== j && arr[j] > arr[j + 1]
//         ? ([arr[j + 1], arr[j]] = [arr[j], arr[j + 1]])
//         : arr,
//     []
//   )

//   return bubbleSort(newArray, i + 1)
// }

const bubbleSort = (array, i = 0) =>
  i === array.length
    ? array
    : bubbleSort(
        array.reduce(
          (a, e, j, arr) =>
            i !== j && arr[j] > arr[j + 1]
              ? ([arr[j + 1], arr[j]] = [arr[j], arr[j + 1]])
              : arr,
          []
        ),
        i + 1
      )

console.log(bubbleSort([4, 8, 1, 0, -1, 3, 7, 2, 5]))

module.exports = bubbleSort
