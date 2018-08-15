/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    let arr = Array.from({length: power})
    return arr.fill(base, 0, power).reduce( (prev, curr) => prev*curr);
}

console.log(pow(2,8));

module.exports = pow;
