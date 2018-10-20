/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows, count = numRows - 1, acc = [[1]]) {
  if (count === 0) return acc
  const previous = [0, ...acc[acc.length - 1], 0]
  let newArray = []
  for (let i = 1; i < previous.length; i++) {
    newArray = [...newArray, previous[i - 1] + previous[i]]
  }
  return pascalTriangle(numRows, count - 1, [...acc, newArray])
}

console.log(pascalTriangle(6))

module.exports = pascalTriangle
