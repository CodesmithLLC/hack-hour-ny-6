/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    // edge cases
    if(power === 0) {
      return 1;
    }
    // base case
    if(power === 1) {
        return base;
    }
  
    // recursive case
    return base * pow(base, power - 1);
  }

module.exports = pow;
