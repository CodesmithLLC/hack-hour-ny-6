/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, first = base ) {
    if (power === 1) return base;
    return pow(base * first, power - 1, first)  
}

console.log(pow(2,4));

module.exports = pow;


// function pow(base, power) {
//     let arr = Array.from({length: power})
//     return arr.fill(base, 0, power).reduce( (prev, curr) => prev*curr);
// }