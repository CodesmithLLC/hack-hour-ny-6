// Write a function that returns an array containing the numbers 1 to NUM.
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers
// divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

/* Solution 2 */
const fizzbuzz = num =>
  num >= 0 &&
  [num]
    .map(num => [...Array(num + 1).keys()])
    .reduce((acc, arrayOfArray) => acc.concat(arrayOfArray), [])
    .map((num, i) => (num % 3 === 0 && num % 5 === 0 ? "fizzbuzz" : i))
    .map(val => (val % 3 === 0 && typeof val === "number" ? "fizz" : val))
    .map(val => (val % 5 === 0 && typeof val === "number" ? "buzz" : val))

// console.log(fizzbuzz(30))
module.exports = fizzbuzz
