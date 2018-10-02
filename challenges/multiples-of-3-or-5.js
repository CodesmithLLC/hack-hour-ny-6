'use strict'
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  const X = 3
  const Y = 5
  const END = 1000

  let sum = 0
  let multiple = 1
  let multipleX = 0
  let multipleY = 0
  let memo = {}

  while (multipleX <= END || multipleY <= END) {
    multipleY = multiple * Y
    if (multipleY <= END && multipleY % X !== 0) {
      if (!memo[multipleY]) {
        memo[multipleY] = multipleY
        sum += multipleY
        arr.push(multipleY)
      }
    }

    multipleX = multiple * X
    if (multipleX <= END && multipleX % Y !== 0) {
      if (!memo[multipleX]) {
        memo[multipleX] = multipleX
        sum += multipleX
        arr.push(multipleX)
      }
    }

    multiple += 1
  }

  return sum
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0
  let multiple = 1
  let multipleX = 0
  let multipleY = 0
  let memo = {}

  while (multipleX <= z || multipleY <= z) {
    multipleY = multiple * y
    if (multipleY <= z && multipleY % x !== 0) {
      if (!memo[multipleY]) {
        memo[multipleY] = multipleY
        sum += multipleY
      }
    }

    multipleX = multiple * x
    if (multipleX <= z && multipleX % y !== 0) {
      if (!memo[multipleX]) {
        memo[multipleX] = multipleX
        sum += multipleX
      }
    }

    multiple += 1
  }

  return sum
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ
}

// console.log('Answer:', sumMultiples3Or5Below1000(), 'to equal')
/* BigO Time consideration for sumMultiples3Or5Below1000()
  END 100, 35 loops
  END 1000, 335 loops
  END 10000, 3335 loops
  O(n/3) ==> O(n)
*/
/*
  Overall:
  O(n/Min(x, y)) ==> O(n)
*/

module.exports = objectToExport
