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
        throw console.error("Can't be a number smaller than or equal to zero.");
        
    }

    // create an array to store the number or strings
    let final = [];
    // loop through from 1 to num
    for ( let i = 1; i < num; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) { // number is divisible by 5 and by 3
            final.push('fizzbuzz');
        } else if (i % 3 === 0) { //  number is just divisible by 3
            final.push('fizz');
        } else if (i % 5 === 0) { // number is just divisible by 5
            final.push('buzz');
        } else {
            final.push(i); // its just a number, that isn't divisible by 3 or 5
        }
    }

    return final; // return the array
}

module.exports = fizzbuzz;
