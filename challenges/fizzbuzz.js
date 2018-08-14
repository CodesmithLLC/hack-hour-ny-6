// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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

function fizzbuzz(num) {
    // testing cases:
    // num is negative or 0
    if (num <= 0) {
        //throw console.error("Can't be a number smaller than or equal to zero.");
      throw Error('no negative numbers');
    }

    // create an array to store the number or strings
    const array = [];
    // loop through from 1 to num
    for ( let i = 1; i < num; i += 1) {
      array.push(i % 3 === 0 && i % 5 === 0? 'fizzbuzz' : i % 3 === 0? 'fizz' : i % 5 === 0? 'buzz' : i);
    }

    return array; // return the array
}

module.exports = fizzbuzz;
